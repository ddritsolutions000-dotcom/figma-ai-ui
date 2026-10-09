import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const CanvasToolbar: React.FC = () => {
  const { activeTool, setActiveTool, applyAiSuggestion } = useDocument();
  const [commentCount] = useState(3);

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full shadow-2xl border border-[#C7C4D8]/50 flex items-center gap-1 select-none">
      <button
        onClick={() => setActiveTool('select')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'select' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Move Tool (V)"
      >
        <span className="material-symbols-outlined text-[17px]">near_me</span>
      </button>

      <button
        onClick={() => setActiveTool('frame')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'frame' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Frame Tool (F)"
      >
        <span className="material-symbols-outlined text-[17px]">crop_free</span>
      </button>

      <button
        onClick={() => setActiveTool('rect')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'rect' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Rectangle (R)"
      >
        <span className="material-symbols-outlined text-[17px]">rectangle</span>
      </button>

      <button
        onClick={() => setActiveTool('pen')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'pen' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Ellipse / Shape (O)"
      >
        <span className="material-symbols-outlined text-[17px]">circle</span>
      </button>

      <button
        onClick={() => setActiveTool('pen')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'pen' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Pen Tool (P)"
      >
        <span className="material-symbols-outlined text-[17px]">edit</span>
      </button>

      <button
        onClick={() => setActiveTool('text')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'text' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Text Tool (T)"
      >
        <span className="material-symbols-outlined text-[17px]">title</span>
      </button>

      <button
        onClick={() => alert('Create Master Component')}
        className="w-8 h-8 rounded-full text-[#131B2E] hover:bg-[#EAEDFF] transition-colors flex items-center justify-center"
        title="Component (⌘K)"
      >
        <span className="material-symbols-outlined text-[17px]">token</span>
      </button>

      <div className="w-px h-4 bg-[#C7C4D8] mx-1"></div>

      {/* Primary AI Generate Trigger Button */}
      <button
        onClick={() => applyAiSuggestion('Generate dietary tags')}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#3525CD] to-[#4953BC] text-white text-[12px] font-semibold shadow-sm hover:opacity-95 transition-all"
      >
        <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
        <span>AI Generate</span>
      </button>

      <button
        onClick={() => setActiveTool('hand')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          activeTool === 'hand' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
        }`}
        title="Hand Tool (H)"
      >
        <span className="material-symbols-outlined text-[17px]">pan_tool</span>
      </button>

      <div className="relative">
        <button
          onClick={() => setActiveTool('comment')}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            activeTool === 'comment' ? 'bg-[#3525CD] text-white shadow-sm' : 'text-[#131B2E] hover:bg-[#EAEDFF]'
          }`}
          title="Comments (C)"
        >
          <span className="material-symbols-outlined text-[17px]">chat_bubble_outline</span>
        </button>
        {commentCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#BA1A1A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {commentCount}
          </span>
        )}
      </div>
    </nav>
  );
};
