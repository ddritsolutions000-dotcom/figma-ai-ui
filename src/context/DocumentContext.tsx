import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { DesignDocument, CanvasNode } from '../types/document';
import { initialDocument } from '../data/initialDocument';

interface DocumentContextType {
  document: DesignDocument;
  activeView: 'design-editor' | 'ai-planning' | 'design-system' | 'prototype-flow' | 'new-project';
  setActiveView: (view: 'design-editor' | 'ai-planning' | 'design-system' | 'prototype-flow' | 'new-project') => void;
  selectedNodeId: string | null;
  selectNode: (id: string | null) => void;
  selectedNode: CanvasNode | null;
  updateNodeProperty: (nodeId: string, property: string, value: any) => void;
  updateAutoLayout: (nodeId: string, patch: Partial<NonNullable<CanvasNode['autoLayout']>>) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  activeTool: 'select' | 'frame' | 'rect' | 'pen' | 'text' | 'hand' | 'comment';
  setActiveTool: (tool: 'select' | 'frame' | 'rect' | 'pen' | 'text' | 'hand' | 'comment') => void;
  applyAiSuggestion: (prompt: string) => void;
  isAiGenerating: boolean;
  aiProgress: number;
  saveStatus: string;
}

const DocumentContext = createContext<DocumentContextType | null>(null);

export const DocumentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [doc, setDoc] = useState<DesignDocument>(() => {
    try {
      const saved = localStorage.getItem('figma_ai_document_state');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return initialDocument;
  });

  const [activeView, setActiveView] = useState<'design-editor' | 'ai-planning' | 'design-system' | 'prototype-flow' | 'new-project'>('design-editor');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('frame-02');
  const [zoom, setZoom] = useState<number>(100);
  const [activeTool, setActiveTool] = useState<'select' | 'frame' | 'rect' | 'pen' | 'text' | 'hand' | 'comment'>('select');
  const [isAiGenerating, setIsAiGenerating] = useState<boolean>(false);
  const [aiProgress, setAiProgress] = useState<number>(85);
  const [saveStatus, setSaveStatus] = useState<string>('Saved to Cloud');

  // Autosave persistence
  useEffect(() => {
    try {
      localStorage.setItem('figma_ai_document_state', JSON.stringify(doc));
      setSaveStatus('Saved to Cloud');
    } catch (e) {
      console.warn('Failed to save document', e);
    }
  }, [doc]);

  // Find node helper
  const findNode = useCallback((nodes: CanvasNode[], id: string): CanvasNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNode(node.children, id);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const selectedNode = selectedNodeId ? findNode(doc.frames, selectedNodeId) : null;

  const updateNodeRecursively = useCallback((nodes: CanvasNode[], id: string, updater: (n: CanvasNode) => CanvasNode): CanvasNode[] => {
    return nodes.map(node => {
      if (node.id === id) {
        return updater(node);
      }
      if (node.children) {
        return {
          ...node,
          children: updateNodeRecursively(node.children, id, updater),
        };
      }
      return node;
    });
  }, []);

  const updateNodeProperty = useCallback((nodeId: string, property: string, value: any) => {
    setDoc(prev => {
      const past = [...prev.history.past, prev];
      const newFrames = updateNodeRecursively(prev.frames, nodeId, node => ({
        ...node,
        [property]: value,
      }));
      return {
        ...prev,
        frames: newFrames,
        history: {
          past,
          future: [],
        },
      };
    });
    setSaveStatus('Syncing changes...');
    setTimeout(() => setSaveStatus('Saved to Cloud'), 800);
  }, [updateNodeRecursively]);

  const updateAutoLayout = useCallback((nodeId: string, patch: Partial<NonNullable<CanvasNode['autoLayout']>>) => {
    setDoc(prev => {
      const past = [...prev.history.past, prev];
      const newFrames = updateNodeRecursively(prev.frames, nodeId, node => ({
        ...node,
        autoLayout: {
          direction: node.autoLayout?.direction || 'vertical',
          gap: node.autoLayout?.gap || 16,
          paddingX: node.autoLayout?.paddingX || 16,
          paddingY: node.autoLayout?.paddingY || 20,
          align: node.autoLayout?.align || 'start',
          ...patch,
        },
      }));
      return {
        ...prev,
        frames: newFrames,
        history: {
          past,
          future: [],
        },
      };
    });
    setSaveStatus('Syncing changes...');
    setTimeout(() => setSaveStatus('Saved to Cloud'), 800);
  }, [updateNodeRecursively]);

  const undo = useCallback(() => {
    setDoc(prev => {
      if (prev.history.past.length === 0) return prev;
      const previous = prev.history.past[prev.history.past.length - 1];
      const newPast = prev.history.past.slice(0, -1);
      return {
        ...previous,
        history: {
          past: newPast,
          future: [prev, ...prev.history.future],
        },
      };
    });
  }, []);

  const redo = useCallback(() => {
    setDoc(prev => {
      if (prev.history.future.length === 0) return prev;
      const next = prev.history.future[0];
      const newFuture = prev.history.future.slice(1);
      return {
        ...next,
        history: {
          past: [...prev.history.past, prev],
          future: newFuture,
        },
      };
    });
  }, []);

  const applyAiSuggestion = useCallback((prompt: string) => {
    setIsAiGenerating(true);
    setAiProgress(30);
    setTimeout(() => setAiProgress(70), 500);
    setTimeout(() => {
      setAiProgress(100);
      setIsAiGenerating(false);
      // Mutate selected node with added dietary tags or property update
      if (selectedNodeId) {
        updateNodeProperty(selectedNodeId, 'fill', '#FFFFFF');
      }
    }, 1200);
  }, [selectedNodeId, updateNodeProperty]);

  const selectNode = useCallback((id: string | null) => {
    setSelectedNodeId(id);
    if (id) {
      setDoc(prev => ({
        ...prev,
        selection: [id],
      }));
    }
  }, []);

  return (
    <DocumentContext.Provider
      value={{
        document: doc,
        activeView,
        setActiveView,
        selectedNodeId,
        selectNode,
        selectedNode,
        updateNodeProperty,
        updateAutoLayout,
        undo,
        redo,
        canUndo: doc.history.past.length > 0,
        canRedo: doc.history.future.length > 0,
        zoom,
        setZoom,
        activeTool,
        setActiveTool,
        applyAiSuggestion,
        isAiGenerating,
        aiProgress,
        saveStatus,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocument must be used within DocumentProvider');
  }
  return context;
};
