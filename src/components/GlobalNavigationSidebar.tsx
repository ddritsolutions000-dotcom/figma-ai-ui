import React from 'react';
import { useDocument } from '../context/DocumentContext';

export const GlobalNavigationSidebar: React.FC = () => {
  const { activeView, setActiveView } = useDocument();

  return (
    <aside className="fixed left-0 top-12 bottom-0 w-60 bg-white border-r border-[#EAEDFF] z-40 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Navigation Category Header */}
        <div className="h-9 px-3 flex items-center justify-between border-b border-[#F2F3FF]">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#777587]">
            Layers &amp; Frames
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveView('new-project')}
              className="material-symbols-outlined text-[16px] text-[#464555] cursor-pointer hover:text-[#131B2E]"
              title="New Frame / Blueprint"
            >
              add
            </button>
            <span
              className="material-symbols-outlined text-[16px] text-[#464555] cursor-pointer hover:text-[#131B2E]"
              title="Filter Layers"
            >
              filter_list
            </span>
          </div>
        </div>

        {/* Global Nav Links */}
        <nav className="p-2 space-y-1">
          <button
            onClick={() => setActiveView('design-editor')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors text-left ${
              activeView === 'design-editor'
                ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                : 'text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">grid_view</span>
            <span>Artboards &amp; Viewport</span>
          </button>

          <button
            onClick={() => setActiveView('ai-planning')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors text-left ${
              activeView === 'ai-planning'
                ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                : 'text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">auto_awesome</span>
            <span>Autonomous Prompts</span>
          </button>

          <button
            onClick={() => setActiveView('design-system')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors text-left ${
              activeView === 'design-system'
                ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                : 'text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">palette</span>
            <span>Color &amp; Typography</span>
          </button>

          <button
            onClick={() => setActiveView('prototype-flow')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors text-left ${
              activeView === 'prototype-flow'
                ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                : 'text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">alt_route</span>
            <span>Navigation Logic</span>
          </button>

          <button
            onClick={() => setActiveView('new-project')}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors text-left ${
              activeView === 'new-project'
                ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                : 'text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[17px]">add_circle</span>
            <span>New Project Studio</span>
          </button>
        </nav>
      </div>

      {/* Docked AI Telemetry Status */}
      <div className="p-3 border-t border-[#EAEDFF] bg-[#F2F3FF]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3525CD] text-[20px]">neurology</span>
            <div>
              <p className="text-[11px] font-semibold text-[#131B2E]">AI Core Active</p>
              <p className="text-[11px] text-[#777587]">Autonomous Latency 38ms</p>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-[#4EDEA3] ring-2 ring-[#006E4B]/20 animate-pulse"></span>
        </div>
      </div>
    </aside>
  );
};
