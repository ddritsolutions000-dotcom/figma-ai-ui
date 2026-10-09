import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const GlobalHeader: React.FC = () => {
  const {
    document: doc,
    activeView,
    setActiveView,
    undo,
    redo,
    canUndo,
    canRedo,
    zoom,
    setZoom,
    activeTool,
    setActiveTool,
    saveStatus,
  } = useDocument();

  const [pageDropdownOpen, setPageDropdownOpen] = useState(false);
  const [zoomDropdownOpen, setZoomDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-white border-b border-[#EAEDFF] shadow-[0_1px_3px_rgba(15,23,42,0.04)] select-none">
      <div className="h-12 w-full px-3 flex items-center justify-between gap-2">
        {/* Left Section: Brand, Doc Name, Page Switcher, Save Status */}
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
          <div
            onClick={() => setActiveView('design-editor')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded bg-[#3525CD] flex items-center justify-center text-white shadow-sm group-hover:bg-[#4F46E5] transition-colors">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            </div>
            <span className="font-semibold text-[15px] text-[#131B2E] tracking-tight whitespace-nowrap">
              Figma AI
            </span>
          </div>

          <span className="px-1.5 py-0.5 rounded bg-[#E2E7FF] text-[#3525CD] text-[10px] uppercase tracking-wider font-bold border border-[#DAE2FD] whitespace-nowrap">
            Autonomous v2.4
          </span>

          <div className="h-4 w-px bg-[#C7C4D8] mx-1"></div>

          {/* Project Name */}
          <div className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded hover:bg-[#F2F3FF] transition-colors">
            <span className="text-[12px] font-medium text-[#131B2E] truncate max-w-[170px]">
              {doc.title}
            </span>
            <span className="material-symbols-outlined text-[15px] text-[#464555]">expand_more</span>
          </div>

          {/* Page Dropdown */}
          <div className="relative">
            <div
              onClick={() => setPageDropdownOpen(!pageDropdownOpen)}
              className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded hover:bg-[#F2F3FF] transition-colors text-[#464555]"
            >
              <span className="text-[12px] truncate max-w-[140px]">
                Page: {doc.pages.find(p => p.id === doc.activePage)?.name || 'Discovery & Menu'}
              </span>
              <span className="material-symbols-outlined text-[15px]">unfold_more</span>
            </div>

            {pageDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-[#EAEDFF] py-1 z-50">
                {doc.pages.map(page => (
                  <button
                    key={page.id}
                    onClick={() => setPageDropdownOpen(false)}
                    className="w-full text-left px-3 py-1.5 text-[12px] text-[#131B2E] hover:bg-[#F2F3FF] flex items-center justify-between"
                  >
                    <span>{page.name}</span>
                    {page.id === doc.activePage && (
                      <span className="material-symbols-outlined text-[14px] text-[#3525CD]">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Save Status Badge */}
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#F2F3FF] text-[#005338]">
            <span className="material-symbols-outlined text-[13px] text-[#006E4B]">check_circle</span>
            <span className="text-[11px] font-medium whitespace-nowrap">{saveStatus}</span>
          </div>
        </div>

        {/* Center Section: Canvas Tools, Zoom, Mode Navigation Tabs */}
        <div className="flex items-center gap-2 flex-shrink">
          {/* Quick Canvas Tools */}
          <div className="flex items-center gap-0.5 bg-[#F2F3FF] p-0.5 rounded">
            <button
              onClick={() => setActiveTool('select')}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                activeTool === 'select' ? 'bg-white text-[#3525CD] shadow-sm' : 'text-[#464555] hover:bg-[#EAEDFF]'
              }`}
              title="Select Tool (V)"
            >
              <span className="material-symbols-outlined text-[16px]">near_me</span>
            </button>
            <button
              onClick={() => setActiveTool('frame')}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                activeTool === 'frame' ? 'bg-white text-[#3525CD] shadow-sm' : 'text-[#464555] hover:bg-[#EAEDFF]'
              }`}
              title="Frame Tool (F)"
            >
              <span className="material-symbols-outlined text-[16px]">crop_free</span>
            </button>
            <button
              onClick={() => setActiveTool('rect')}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                activeTool === 'rect' ? 'bg-white text-[#3525CD] shadow-sm' : 'text-[#464555] hover:bg-[#EAEDFF]'
              }`}
              title="Shape Tool (R)"
            >
              <span className="material-symbols-outlined text-[16px]">rectangle</span>
            </button>
            <button
              onClick={() => setActiveTool('pen')}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                activeTool === 'pen' ? 'bg-white text-[#3525CD] shadow-sm' : 'text-[#464555] hover:bg-[#EAEDFF]'
              }`}
              title="Pen Tool (P)"
            >
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </button>
            <button
              onClick={() => setActiveTool('text')}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                activeTool === 'text' ? 'bg-white text-[#3525CD] shadow-sm' : 'text-[#464555] hover:bg-[#EAEDFF]'
              }`}
              title="Text Tool (T)"
            >
              <span className="material-symbols-outlined text-[16px]">title</span>
            </button>
            <div className="h-4 w-px bg-[#C7C4D8] mx-0.5"></div>
            <button
              onClick={undo}
              disabled={!canUndo}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                canUndo ? 'text-[#464555] hover:bg-[#EAEDFF]' : 'text-[#C7C4D8] cursor-not-allowed'
              }`}
              title="Undo (⌘Z)"
            >
              <span className="material-symbols-outlined text-[16px]">undo</span>
            </button>
            <button
              onClick={redo}
              disabled={!canRedo}
              className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
                canRedo ? 'text-[#464555] hover:bg-[#EAEDFF]' : 'text-[#C7C4D8] cursor-not-allowed'
              }`}
              title="Redo (⌘⇧Z)"
            >
              <span className="material-symbols-outlined text-[16px]">redo</span>
            </button>
          </div>

          {/* Zoom Selector */}
          <div className="relative">
            <button
              onClick={() => setZoomDropdownOpen(!zoomDropdownOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded bg-[#F2F3FF] hover:bg-[#EAEDFF] cursor-pointer transition-colors text-[11px] font-semibold text-[#131B2E]"
            >
              <span>{zoom}%</span>
              <span className="material-symbols-outlined text-[15px] text-[#464555]">expand_more</span>
            </button>
            {zoomDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-24 bg-white rounded-lg shadow-xl border border-[#EAEDFF] py-1 z-50">
                {[50, 75, 100, 150, 200].map(z => (
                  <button
                    key={z}
                    onClick={() => {
                      setZoom(z);
                      setZoomDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1 text-[11px] text-[#131B2E] hover:bg-[#F2F3FF]"
                  >
                    {z}%
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Core Workspace Switcher Tabs */}
          <nav className="flex items-center gap-1 bg-[#F2F3FF] p-0.5 rounded">
            <button
              onClick={() => setActiveView('design-editor')}
              className={`px-3 py-1 rounded text-[12px] font-medium whitespace-nowrap transition-all ${
                activeView === 'design-editor'
                  ? 'bg-[#4F46E5] text-white shadow-xs font-semibold'
                  : 'text-[#464555] hover:bg-[#EAEDFF] hover:text-[#131B2E]'
              }`}
            >
              Design / Editor
            </button>
            <button
              onClick={() => setActiveView('ai-planning')}
              className={`px-3 py-1 rounded text-[12px] font-medium whitespace-nowrap transition-all ${
                activeView === 'ai-planning'
                  ? 'bg-[#4F46E5] text-white shadow-xs font-semibold'
                  : 'text-[#464555] hover:bg-[#EAEDFF] hover:text-[#131B2E]'
              }`}
            >
              AI Planning
            </button>
            <button
              onClick={() => setActiveView('design-system')}
              className={`px-3 py-1 rounded text-[12px] font-medium whitespace-nowrap transition-all ${
                activeView === 'design-system'
                  ? 'bg-[#4F46E5] text-white shadow-xs font-semibold'
                  : 'text-[#464555] hover:bg-[#EAEDFF] hover:text-[#131B2E]'
              }`}
            >
              Design System
            </button>
            <button
              onClick={() => setActiveView('prototype-flow')}
              className={`px-3 py-1 rounded text-[12px] font-medium whitespace-nowrap transition-all ${
                activeView === 'prototype-flow'
                  ? 'bg-[#4F46E5] text-white shadow-xs font-semibold'
                  : 'text-[#464555] hover:bg-[#EAEDFF] hover:text-[#131B2E]'
              }`}
            >
              Prototype Flow
            </button>
          </nav>
        </div>

        {/* Right Section: Avatars, Share, Present, Export, Profile */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Active Co-Pilots Avatars */}
          <div className="flex items-center -space-x-1.5 overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-[#006E4B] ring-2 ring-white flex items-center justify-center text-[10px] text-white font-bold">
              JD
            </div>
            <div className="w-6 h-6 rounded-full bg-[#4953BC] ring-2 ring-white flex items-center justify-center text-[10px] text-white font-bold">
              AL
            </div>
            <div className="w-6 h-6 rounded-full bg-[#3525CD] ring-2 ring-white flex items-center justify-center text-[10px] text-white font-bold">
              AI
            </div>
          </div>

          <button
            onClick={() => setActiveView('new-project')}
            className="px-2.5 py-1 rounded-full border border-[#C7C4D8] text-[12px] font-medium text-[#131B2E] hover:bg-[#F2F3FF] transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px] text-[#3525CD]">add</span>
            New Project
          </button>

          <button
            onClick={() => setActiveView('prototype-flow')}
            className="px-3 py-1 rounded bg-[#283044] text-[#EEF0FF] text-[12px] font-medium flex items-center gap-1 hover:bg-[#131B2E] transition-colors shadow-xs whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[15px]">play_arrow</span>
            Present
          </button>

          <button
            onClick={() => alert('Exporting design specs & tokens...')}
            className="px-2.5 py-1 rounded hover:bg-[#F2F3FF] text-[#464555] hover:text-[#131B2E] text-[12px] font-medium transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">file_upload</span>
            Export
          </button>

          <div className="h-4 w-px bg-[#C7C4D8] mx-0.5"></div>

          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#3525CD] to-[#8792FE] text-white flex items-center justify-center font-bold text-[11px] ring-2 ring-[#4F46E5] cursor-pointer">
            PA
          </div>
        </div>
      </div>
    </header>
  );
};
