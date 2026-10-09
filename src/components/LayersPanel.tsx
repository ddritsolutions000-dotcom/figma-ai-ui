import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const LayersPanel: React.FC = () => {
  const { document: doc, selectedNodeId, selectNode } = useDocument();
  const [activeTab, setActiveTab] = useState<'layers' | 'pages' | 'assets'>('layers');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'frame-02': true,
    'sticky-header': true,
    'menu-categories': true,
    'item-card-truffle-bowl': true,
  });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNodes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="w-[260px] h-full flex flex-col bg-white border-r border-[#EAEDFF] flex-shrink-0 z-20 select-none">
      {/* Switcher Tabs */}
      <div className="flex items-center px-3 pt-2 border-b border-[#F2F3FF] gap-1">
        <button
          onClick={() => setActiveTab('layers')}
          className={`px-3 py-1.5 text-[12px] font-semibold transition-colors ${
            activeTab === 'layers'
              ? 'text-[#3525CD] border-b-2 border-[#3525CD]'
              : 'text-[#464555] hover:text-[#131B2E]'
          }`}
        >
          Layers
        </button>
        <button
          onClick={() => setActiveTab('pages')}
          className={`px-3 py-1.5 text-[12px] font-medium transition-colors ${
            activeTab === 'pages'
              ? 'text-[#3525CD] border-b-2 border-[#3525CD]'
              : 'text-[#464555] hover:text-[#131B2E]'
          }`}
        >
          Pages ({doc.pages.length})
        </button>
        <button
          onClick={() => setActiveTab('assets')}
          className={`px-3 py-1.5 text-[12px] font-medium transition-colors ${
            activeTab === 'assets'
              ? 'text-[#3525CD] border-b-2 border-[#3525CD]'
              : 'text-[#464555] hover:text-[#131B2E]'
          }`}
        >
          Assets
        </button>
      </div>

      {/* Quick Search */}
      <div className="p-2 border-b border-[#F2F3FF]">
        <div className="flex items-center gap-1 px-2 py-1 bg-[#F2F3FF] rounded">
          <span className="material-symbols-outlined text-[15px] text-[#777587]">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search layers (⌘F)"
            className="w-full bg-transparent text-[12px] text-[#131B2E] placeholder-[#777587] focus:outline-none"
          />
          <span className="text-[10px] text-[#777587] px-1 rounded bg-[#E2E7FF] font-semibold">⌘F</span>
        </div>
      </div>

      {/* Tree Content */}
      <div className="flex-1 overflow-y-auto px-1 py-1.5 space-y-0.5">
        {/* FRAME 02 Active Selection */}
        <div
          onClick={() => selectNode('frame-02')}
          className={`group rounded px-1.5 py-1 flex items-center justify-between cursor-pointer transition-colors ${
            selectedNodeId === 'frame-02'
              ? 'bg-[#E2E7FF]/90 text-[#3525CD]'
              : 'hover:bg-[#F2F3FF] text-[#131B2E]'
          }`}
        >
          <div className="flex items-center gap-1 min-w-0">
            <span
              onClick={e => toggleExpand('frame-02', e)}
              className="material-symbols-outlined text-[14px] text-[#3525CD] cursor-pointer"
            >
              {expandedNodes['frame-02'] ? 'arrow_drop_down' : 'arrow_right'}
            </span>
            <span className="material-symbols-outlined text-[15px] text-[#3525CD]">crop_free</span>
            <span className="text-[12px] font-semibold truncate text-[#3525CD]">
              02 · Restaurant Details
            </span>
          </div>
          <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100">
            <span className="material-symbols-outlined text-[13px] text-[#3525CD] hover:text-[#4F46E5]">lock_open</span>
            <span className="material-symbols-outlined text-[13px] text-[#3525CD] hover:text-[#4F46E5]">visibility</span>
          </div>
        </div>

        {/* Children of Frame 2 */}
        {expandedNodes['frame-02'] && (
          <div className="pl-4 space-y-0.5 border-l border-[#3525CD]/20 ml-2.5">
            {/* Sticky Header */}
            <div
              onClick={() => selectNode('sticky-header')}
              className="group rounded hover:bg-[#F2F3FF] px-1.5 py-0.5 flex items-center justify-between text-[#464555] cursor-pointer"
            >
              <div className="flex items-center gap-1 min-w-0">
                <span
                  onClick={e => toggleExpand('sticky-header', e)}
                  className="material-symbols-outlined text-[13px] text-[#777587]"
                >
                  {expandedNodes['sticky-header'] ? 'arrow_drop_down' : 'arrow_right'}
                </span>
                <span className="material-symbols-outlined text-[14px] text-[#4953BC]">crop_free</span>
                <span className="text-[12px] truncate text-[#131B2E] font-medium">Sticky Header</span>
              </div>
              <span className="material-symbols-outlined text-[13px] text-[#777587] opacity-0 group-hover:opacity-100">visibility</span>
            </div>

            {expandedNodes['sticky-header'] && (
              <div className="pl-4 space-y-0.5 border-l border-[#EAEDFF] ml-2.5">
                <div
                  onClick={() => selectNode('header-title')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#777587]">title</span>
                  <span className="text-[12px] truncate text-[#131B2E]">"Artisan Bistro &amp; Bowls"</span>
                </div>
                <div
                  onClick={() => selectNode('rating-badge')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#4953BC]">token</span>
                  <span className="text-[12px] truncate text-[#4953BC] font-medium">RatingBadge (4.8 ★)</span>
                </div>
                <div
                  onClick={() => selectNode('back-icon')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#777587]">polyline</span>
                  <span className="text-[12px] truncate">Vector: BackIcon</span>
                </div>
              </div>
            )}

            {/* Menu Categories */}
            <div
              onClick={() => selectNode('menu-categories')}
              className="group rounded hover:bg-[#F2F3FF] px-1.5 py-0.5 flex items-center justify-between text-[#464555] cursor-pointer"
            >
              <div className="flex items-center gap-1 min-w-0">
                <span
                  onClick={e => toggleExpand('menu-categories', e)}
                  className="material-symbols-outlined text-[13px] text-[#777587]"
                >
                  {expandedNodes['menu-categories'] ? 'arrow_drop_down' : 'arrow_right'}
                </span>
                <span className="material-symbols-outlined text-[14px] text-[#4953BC]">crop_free</span>
                <span className="text-[12px] truncate text-[#131B2E] font-medium">Menu Categories</span>
              </div>
              <span className="material-symbols-outlined text-[13px] text-[#777587] opacity-0 group-hover:opacity-100">visibility</span>
            </div>

            {expandedNodes['menu-categories'] && (
              <div className="pl-4 space-y-0.5 border-l border-[#EAEDFF] ml-2.5">
                <div
                  onClick={() => selectNode('pill-filter-row')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#4953BC]">token</span>
                  <span className="text-[12px] truncate text-[#4953BC] font-medium">PillFilterRow (Popular...)</span>
                </div>
              </div>
            )}

            {/* Item Card */}
            <div
              onClick={() => selectNode('item-card-truffle-bowl')}
              className="group rounded hover:bg-[#F2F3FF] px-1.5 py-0.5 flex items-center justify-between text-[#464555] cursor-pointer"
            >
              <div className="flex items-center gap-1 min-w-0">
                <span
                  onClick={e => toggleExpand('item-card-truffle-bowl', e)}
                  className="material-symbols-outlined text-[13px] text-[#777587]"
                >
                  {expandedNodes['item-card-truffle-bowl'] ? 'arrow_drop_down' : 'arrow_right'}
                </span>
                <span className="material-symbols-outlined text-[14px] text-[#4953BC]">crop_free</span>
                <span className="text-[12px] truncate text-[#131B2E] font-medium">Item Card - Truffle Bowl</span>
              </div>
              <span className="material-symbols-outlined text-[13px] text-[#777587] opacity-0 group-hover:opacity-100">visibility</span>
            </div>

            {expandedNodes['item-card-truffle-bowl'] && (
              <div className="pl-4 space-y-0.5 border-l border-[#EAEDFF] ml-2.5">
                <div
                  onClick={() => selectNode('dish-thumb')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#777587]">image</span>
                  <span className="text-[12px] truncate">Image: DishThumb</span>
                </div>
                <div
                  onClick={() => selectNode('dish-name')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#777587]">title</span>
                  <span className="text-[12px] truncate text-[#131B2E]">"Spicy Salmon Poke Bowl"</span>
                </div>
                <div
                  onClick={() => selectNode('dish-price')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#005338]">monetization_on</span>
                  <span className="text-[12px] truncate font-medium text-[#005338]">$18.50</span>
                </div>
                <div
                  onClick={() => selectNode('btn-add-to-cart')}
                  className="flex items-center gap-1 px-1.5 py-0.5 text-[#464555] hover:bg-[#F2F3FF] rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[13px] text-[#4953BC]">token</span>
                  <span className="text-[12px] truncate text-[#4953BC] font-medium">AddToCartBtn</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Collapsed Frame 1 */}
        <div
          onClick={() => selectNode('frame-01')}
          className="group rounded hover:bg-[#F2F3FF] px-1.5 py-1 flex items-center justify-between text-[#131B2E] cursor-pointer mt-1"
        >
          <div className="flex items-center gap-1 min-w-0">
            <span className="material-symbols-outlined text-[14px] text-[#777587]">arrow_right</span>
            <span className="material-symbols-outlined text-[15px] text-[#777587]">crop_free</span>
            <span className="text-[12px] font-medium truncate">01 · Home Discovery</span>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            <span className="material-symbols-outlined text-[13px] text-[#777587] hover:text-[#131B2E]">lock_open</span>
            <span className="material-symbols-outlined text-[13px] text-[#777587] hover:text-[#131B2E]">visibility</span>
          </div>
        </div>

        {/* Collapsed Frame 3 */}
        <div
          onClick={() => selectNode('frame-03')}
          className="group rounded hover:bg-[#F2F3FF] px-1.5 py-1 flex items-center justify-between text-[#131B2E] cursor-pointer"
        >
          <div className="flex items-center gap-1 min-w-0">
            <span className="material-symbols-outlined text-[14px] text-[#777587]">arrow_right</span>
            <span className="material-symbols-outlined text-[15px] text-[#777587]">crop_free</span>
            <span className="text-[12px] font-medium truncate">03 · Real-time Tracking</span>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            <span className="material-symbols-outlined text-[13px] text-[#777587] hover:text-[#131B2E]">lock_open</span>
            <span className="material-symbols-outlined text-[13px] text-[#777587] hover:text-[#131B2E]">visibility</span>
          </div>
        </div>

        {/* Collapsed Frame 4 */}
        <div
          onClick={() => selectNode('frame-04')}
          className="group rounded hover:bg-[#F2F3FF] px-1.5 py-1 flex items-center justify-between text-[#131B2E] cursor-pointer"
        >
          <div className="flex items-center gap-1 min-w-0">
            <span className="material-symbols-outlined text-[14px] text-[#777587]">arrow_right</span>
            <span className="material-symbols-outlined text-[15px] text-[#777587]">crop_free</span>
            <span className="text-[12px] font-medium truncate">04 · Checkout &amp; Payment</span>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            <span className="material-symbols-outlined text-[13px] text-[#777587] hover:text-[#131B2E]">lock_open</span>
            <span className="material-symbols-outlined text-[13px] text-[#777587] hover:text-[#131B2E]">visibility</span>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-3 py-2 border-t border-[#F2F3FF] bg-white flex items-center justify-between">
        <button
          onClick={() => alert('Add Frame action')}
          className="flex items-center gap-1 px-2 py-1 rounded bg-[#F2F3FF] hover:bg-[#EAEDFF] text-[#131B2E] text-[11px] font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-[14px]">add</span>
          Frame
        </button>
        <button
          onClick={() => alert('Create Master Component')}
          className="flex items-center gap-1 px-2 py-1 rounded bg-[#F2F3FF] hover:bg-[#EAEDFF] text-[#131B2E] text-[11px] font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-[14px]">token</span>
          Component
        </button>
        <button
          className="p-1 rounded hover:bg-[#EAEDFF] text-[#777587] hover:text-[#131B2E] transition-colors"
          title="Export Assets"
        >
          <span className="material-symbols-outlined text-[16px]">folder_zip</span>
        </button>
      </div>
    </aside>
  );
};
