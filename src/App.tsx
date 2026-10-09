import React from 'react';
import { DocumentProvider, useDocument } from './context/DocumentContext';
import { GlobalHeader } from './components/GlobalHeader';
import { GlobalNavigationSidebar } from './components/GlobalNavigationSidebar';
import { DesignEditorWorkspace } from './components/DesignEditorWorkspace';
import { AiPlanningWorkspace } from './components/AiPlanningWorkspace';
import { DesignSystemWorkspace } from './components/DesignSystemWorkspace';
import { PrototypeFlowWorkspace } from './components/PrototypeFlowWorkspace';
import { NewProjectStudioWorkspace } from './components/NewProjectStudioWorkspace';

const MainAppContent: React.FC = () => {
  const { activeView } = useDocument();

  return (
    <div className="min-h-screen bg-[#FAF8FF] font-sans antialiased text-[#131B2E]">
      {/* Top Universal App Header */}
      <GlobalHeader />

      {/* Global Navigation Left Strip */}
      <GlobalNavigationSidebar />

      {/* Main Routed Surfaces with Left 60px Offset for Navigation */}
      <div className="pl-60 pt-12 min-h-screen">
        {activeView === 'design-editor' && <DesignEditorWorkspace />}
        {activeView === 'ai-planning' && <AiPlanningWorkspace />}
        {activeView === 'design-system' && <DesignSystemWorkspace />}
        {activeView === 'prototype-flow' && <PrototypeFlowWorkspace />}
        {activeView === 'new-project' && <NewProjectStudioWorkspace />}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <DocumentProvider>
      <MainAppContent />
    </DocumentProvider>
  );
}
