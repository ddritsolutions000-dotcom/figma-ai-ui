import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const PropertyInspector: React.FC = () => {
  const { selectedNode, updateNodeProperty, updateAutoLayout } = useDocument();
  const [activeTab, setActiveTab] = useState<'design' | 'prototype' | 'inspect'>('design');

  if (!selectedNode) {
    return (
      <aside className="w-[290px] h-full flex flex-col bg-white border-l border-[#EAEDFF] flex-shrink-0 z-20 p-4 text-[#777587] text-[12px]">
        Select an artboard or layer to inspect properties.
      </aside>
    );
  }

  return (
    <aside className="w-[290px] h-full flex flex-col bg-white border-l border-[#EAEDFF] flex-shrink-0 z-20 overflow-y-auto select-none">
      {/* Inspector Tabs */}
      <div className="flex items-center justify-around border-b border-[#F2F3FF] px-3 pt-2">
        <button
          onClick={() => setActiveTab('design')}
          className={`px-3 py-1.5 text-[12px] font-semibold transition-colors ${
            activeTab === 'design' ? 'text-[#3525CD] border-b-2 border-[#3525CD]' : 'text-[#464555] hover:text-[#131B2E]'
          }`}
        >
          Design
        </button>
        <button
          onClick={() => setActiveTab('prototype')}
          className={`px-3 py-1.5 text-[12px] font-semibold transition-colors ${
            activeTab === 'prototype' ? 'text-[#3525CD] border-b-2 border-[#3525CD]' : 'text-[#464555] hover:text-[#131B2E]'
          }`}
        >
          Prototype
        </button>
        <button
          onClick={() => setActiveTab('inspect')}
          className={`px-3 py-1.5 text-[12px] font-semibold transition-colors ${
            activeTab === 'inspect' ? 'text-[#3525CD] border-b-2 border-[#3525CD]' : 'text-[#464555] hover:text-[#131B2E]'
          }`}
        >
          Inspect
        </button>
      </div>

      {/* Selected Node Header */}
      <div className="p-3 border-b border-[#F2F3FF] flex items-center justify-between">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="material-symbols-outlined text-[16px] text-[#3525CD]">crop_free</span>
          <span className="text-[13px] font-semibold text-[#131B2E] truncate">
            {selectedNode.name}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[#464555]">
          <button
            onClick={() => updateNodeProperty(selectedNode.id, 'isLocked', !selectedNode.isLocked)}
            className="p-1 rounded hover:bg-[#EAEDFF] text-[#777587] hover:text-[#131B2E]"
            title={selectedNode.isLocked ? 'Unlock' : 'Lock'}
          >
            <span className="material-symbols-outlined text-[15px]">
              {selectedNode.isLocked ? 'lock' : 'lock_open'}
            </span>
          </button>
          <button
            onClick={() => updateNodeProperty(selectedNode.id, 'isVisible', !selectedNode.isVisible)}
            className="p-1 rounded hover:bg-[#EAEDFF] text-[#777587] hover:text-[#131B2E]"
            title={selectedNode.isVisible ? 'Hide' : 'Show'}
          >
            <span className="material-symbols-outlined text-[15px]">
              {selectedNode.isVisible ? 'visibility' : 'visibility_off'}
            </span>
          </button>
        </div>
      </div>

      {/* Alignment Tools Strip */}
      <div className="px-3 py-2 border-b border-[#F2F3FF] flex items-center justify-between">
        <button
          onClick={() => updateNodeProperty(selectedNode.id, 'x', 60)}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Align Left"
        >
          <span className="material-symbols-outlined text-[16px]">align_horizontal_left</span>
        </button>
        <button
          onClick={() => updateNodeProperty(selectedNode.id, 'x', 480)}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Align Horizontal Center"
        >
          <span className="material-symbols-outlined text-[16px]">align_horizontal_center</span>
        </button>
        <button
          onClick={() => updateNodeProperty(selectedNode.id, 'x', 900)}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Align Right"
        >
          <span className="material-symbols-outlined text-[16px]">align_horizontal_right</span>
        </button>
        <div className="w-px h-3.5 bg-[#C7C4D8]"></div>
        <button
          onClick={() => updateNodeProperty(selectedNode.id, 'y', 120)}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Align Top"
        >
          <span className="material-symbols-outlined text-[16px]">align_vertical_top</span>
        </button>
        <button
          onClick={() => updateNodeProperty(selectedNode.id, 'y', 200)}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Align Vertical Center"
        >
          <span className="material-symbols-outlined text-[16px]">align_vertical_center</span>
        </button>
        <button
          onClick={() => updateNodeProperty(selectedNode.id, 'y', 400)}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Align Bottom"
        >
          <span className="material-symbols-outlined text-[16px]">align_vertical_bottom</span>
        </button>
        <button
          onClick={() => alert('Distribute spacing')}
          className="p-1 rounded text-[#464555] hover:bg-[#F2F3FF] hover:text-[#131B2E]"
          title="Distribute Horizontally"
        >
          <span className="material-symbols-outlined text-[16px]">distribute_horizontal</span>
        </button>
      </div>

      {/* Geometry / Transform Panel */}
      <div className="p-3 border-b border-[#F2F3FF] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#777587] uppercase tracking-wider">
            Frame Dimensions
          </span>
          <span className="material-symbols-outlined text-[14px] text-[#777587]">tune</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* X & Y */}
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="text-[11px] font-semibold text-[#777587] w-4 cursor-col-resize">X</span>
            <input
              type="number"
              value={selectedNode.x}
              onChange={e => updateNodeProperty(selectedNode.id, 'x', Number(e.target.value))}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none"
            />
          </div>
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="text-[11px] font-semibold text-[#777587] w-4 cursor-col-resize">Y</span>
            <input
              type="number"
              value={selectedNode.y}
              onChange={e => updateNodeProperty(selectedNode.id, 'y', Number(e.target.value))}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none"
            />
          </div>

          {/* W & H */}
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="text-[11px] font-semibold text-[#777587] w-4 cursor-col-resize">W</span>
            <input
              type="number"
              value={selectedNode.width}
              onChange={e => updateNodeProperty(selectedNode.id, 'width', Number(e.target.value))}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none"
            />
          </div>
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF] relative">
            <span className="text-[11px] font-semibold text-[#777587] w-4 cursor-col-resize">H</span>
            <input
              type="number"
              value={selectedNode.height}
              onChange={e => updateNodeProperty(selectedNode.id, 'height', Number(e.target.value))}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none"
            />
            <span className="material-symbols-outlined text-[12px] text-[#3525CD] absolute right-1.5 cursor-pointer">
              link
            </span>
          </div>

          {/* Corner Radius & Rotation */}
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="material-symbols-outlined text-[13px] text-[#777587] w-4">rounded_corner</span>
            <input
              type="number"
              value={selectedNode.borderRadius || 44}
              onChange={e => updateNodeProperty(selectedNode.id, 'borderRadius', Number(e.target.value))}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none"
            />
          </div>
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="material-symbols-outlined text-[13px] text-[#777587] w-4">rotate_right</span>
            <input
              type="text"
              value={`${selectedNode.rotation || 0}°`}
              onChange={e => updateNodeProperty(selectedNode.id, 'rotation', Number(e.target.value.replace('°', '')) || 0)}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Auto Layout Panel */}
      <div className="p-3 border-b border-[#F2F3FF] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#777587] uppercase tracking-wider">
            Auto Layout
          </span>
          <span
            onClick={() => updateAutoLayout(selectedNode.id, { direction: 'vertical' })}
            className="material-symbols-outlined text-[16px] text-[#3525CD] cursor-pointer"
          >
            add
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#F2F3FF] p-1 rounded">
          <button
            onClick={() => updateAutoLayout(selectedNode.id, { direction: 'horizontal' })}
            className={`flex-1 py-1 rounded flex items-center justify-center transition-colors ${
              selectedNode.autoLayout?.direction === 'horizontal'
                ? 'bg-white text-[#3525CD] shadow-xs font-bold'
                : 'text-[#777587] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
          <button
            onClick={() => updateAutoLayout(selectedNode.id, { direction: 'vertical' })}
            className={`flex-1 py-1 rounded flex items-center justify-center transition-colors ${
              selectedNode.autoLayout?.direction === 'vertical'
                ? 'bg-white text-[#3525CD] shadow-xs font-bold'
                : 'text-[#777587] hover:text-[#131B2E]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
          </button>
          <button
            onClick={() => updateAutoLayout(selectedNode.id, { direction: 'none' })}
            className="flex-1 py-1 rounded text-[#777587] hover:text-[#131B2E] flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[15px]">wrap_text</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="material-symbols-outlined text-[13px] text-[#777587] w-4">space_dashboard</span>
            <input
              type="text"
              value={`${selectedNode.autoLayout?.gap || 16} px`}
              onChange={e => {
                const val = parseInt(e.target.value) || 0;
                updateAutoLayout(selectedNode.id, { gap: val });
              }}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none pl-1"
            />
          </div>
          <div className="flex items-center px-2 py-1 rounded bg-[#F2F3FF]">
            <span className="material-symbols-outlined text-[13px] text-[#777587] w-4">padding</span>
            <input
              type="text"
              value={`${selectedNode.autoLayout?.paddingX || 16}, ${selectedNode.autoLayout?.paddingY || 20}`}
              onChange={e => {
                const parts = e.target.value.split(',').map(s => parseInt(s.trim()) || 0);
                updateAutoLayout(selectedNode.id, { paddingX: parts[0] || 16, paddingY: parts[1] || 20 });
              }}
              className="w-full bg-transparent text-[11px] text-[#131B2E] font-medium focus:outline-none pl-1"
            />
          </div>
        </div>
      </div>

      {/* Fill Panel */}
      <div className="p-3 border-b border-[#F2F3FF] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#777587] uppercase tracking-wider">
            Fill
          </span>
          <span className="material-symbols-outlined text-[16px] text-[#777587] cursor-pointer">add</span>
        </div>
        <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#F2F3FF]">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded border border-[#C7C4D8] shadow-xs"
              style={{ backgroundColor: selectedNode.fill || '#FFFFFF' }}
            ></div>
            <input
              type="text"
              value={selectedNode.fill || '#FFFFFF'}
              onChange={e => updateNodeProperty(selectedNode.id, 'fill', e.target.value)}
              className="w-20 bg-transparent text-[11px] font-semibold text-[#131B2E] focus:outline-none"
            />
            <span className="text-[11px] text-[#777587]">100%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#777587] cursor-pointer">visibility</span>
            <span className="material-symbols-outlined text-[13px] text-[#777587] cursor-pointer">remove</span>
          </div>
        </div>
      </div>

      {/* Stroke Panel */}
      <div className="p-3 border-b border-[#F2F3FF] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#777587] uppercase tracking-wider">
            Stroke
          </span>
          <span className="material-symbols-outlined text-[16px] text-[#777587] cursor-pointer">add</span>
        </div>
        <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#F2F3FF]">
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded border border-[#C7C4D8]"
              style={{ backgroundColor: selectedNode.stroke || '#E2E8F0' }}
            ></div>
            <input
              type="text"
              value={selectedNode.stroke || '#E2E8F0'}
              onChange={e => updateNodeProperty(selectedNode.id, 'stroke', e.target.value)}
              className="w-20 bg-transparent text-[11px] font-semibold text-[#131B2E] focus:outline-none"
            />
            <span className="text-[11px] text-[#777587]">{selectedNode.strokeWidth || 1}px Inside</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#777587] cursor-pointer">visibility</span>
            <span className="material-symbols-outlined text-[13px] text-[#777587] cursor-pointer">remove</span>
          </div>
        </div>
      </div>

      {/* Effects Panel */}
      <div className="p-3 border-b border-[#F2F3FF] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#777587] uppercase tracking-wider">
            Effects
          </span>
          <span className="material-symbols-outlined text-[16px] text-[#777587] cursor-pointer">add</span>
        </div>
        <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[#F2F3FF]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[15px] text-[#777587]">blur_on</span>
            <span className="text-[11px] text-[#131B2E]">Drop shadow</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-[#777587] cursor-pointer">tune</span>
            <span className="material-symbols-outlined text-[13px] text-[#777587] cursor-pointer">visibility</span>
          </div>
        </div>
      </div>

      {/* Export Panel */}
      <div className="p-3 space-y-2 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#777587] uppercase tracking-wider">
            Export
          </span>
          <span className="material-symbols-outlined text-[16px] text-[#777587] cursor-pointer">add</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-[#F2F3FF] text-[11px] font-semibold text-[#131B2E]">1x</span>
            <span className="px-2 py-0.5 rounded bg-[#F2F3FF] text-[11px] font-semibold text-[#131B2E]">PNG</span>
          </div>
          <button
            onClick={() => alert(`Exported frame: ${selectedNode.name}`)}
            className="px-3 py-1 rounded bg-[#3525CD] text-white text-[12px] font-semibold hover:bg-[#4F46E5] shadow-xs"
          >
            Export Frame
          </button>
        </div>
      </div>
    </aside>
  );
};
