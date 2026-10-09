import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const DesignSystemWorkspace: React.FC = () => {
  const { document: doc } = useDocument();
  const [activeCategory, setActiveCategory] = useState<'buttons' | 'inputs' | 'badges' | 'cards' | 'nav' | 'modals'>('buttons');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [buttonSize, setButtonSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [buttonHierarchy, setButtonHierarchy] = useState<'filled' | 'subtle' | 'ghost'>('filled');
  const [buttonLabel, setButtonLabel] = useState('Add to Cart — $18.50');
  const [hasLeadingIcon, setHasLeadingIcon] = useState(true);
  const [hasTrailingBadge, setHasTrailingBadge] = useState(false);

  const { colors, typography } = doc.tokens;

  return (
    <div className="flex flex-col w-full h-[calc(100vh-48px)] bg-[#FAF8FF] select-none text-[#131B2E]">
      {/* Sub-header Breadcrumb & Design Ops Status Bar */}
      <div className="h-10 bg-white px-6 flex items-center justify-between border-b border-[#EAEDFF] shadow-xs z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined text-[#3525CD] text-[18px]">category</span>
          <div className="flex items-center gap-1.5 text-[12px] text-[#777587]">
            <span>Projects</span>
            <span>/</span>
            <span className="text-[#131B2E] font-medium">FoodFlow Delivery</span>
            <span>/</span>
            <span className="text-[#3525CD] font-semibold">Design System &amp; Tokens</span>
          </div>
          <div className="h-3.5 w-px bg-[#EAEDFF] mx-1"></div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E2E7FF] text-[#3525CD] font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4EDEA3]"></span>
            <span>{doc.tokens.version}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#F2F3FF] px-3 py-1 rounded text-[#464555] text-[11px]">
            <span className="material-symbols-outlined text-[15px] text-[#005338]">verified</span>
            <span className="font-semibold text-[#131B2E]">84</span> Components
            <span>•</span>
            <span className="font-semibold text-[#131B2E]">128</span> Tokens
            <span>•</span>
            <span className="text-[#005338] font-semibold">WCAG AAA</span>
          </div>
          <button
            onClick={() => alert('Publishing 3 uncommitted design system tokens to repository branch...')}
            className="flex items-center gap-1 px-3 py-1 rounded bg-[#3525CD] text-white text-[12px] font-semibold hover:bg-[#4F46E5] transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[16px]">publish</span>
            <span>Publish Updates (3 uncommitted)</span>
          </button>
        </div>
      </div>

      {/* 3-Pane Body: Left Directory + Center Spec Canvas + Right Variant Inspector */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT PANEL: Token & Component Directory (260px) */}
        <aside className="w-64 bg-white border-r border-[#EAEDFF] flex flex-col flex-shrink-0 shadow-xs z-10">
          <div className="p-3">
            <div className="relative flex items-center bg-[#F2F3FF] rounded px-2 py-1">
              <span className="material-symbols-outlined text-[16px] text-[#777587] mr-1">search</span>
              <input
                type="text"
                placeholder="Search tokens &amp; components..."
                className="w-full bg-transparent text-[12px] text-[#131B2E] placeholder-[#777587] focus:outline-none"
              />
              <span className="text-[10px] text-[#777587] bg-[#E2E7FF] px-1 py-0.5 rounded font-mono font-bold">
                ⌘F
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2 space-y-3">
            {/* Foundations */}
            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[#777587] text-[10px] font-bold uppercase tracking-wider">
                <span>Foundations</span>
                <span className="font-mono">5</span>
              </div>
              <div className="space-y-0.5 mt-0.5">
                <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[#F2F3FF] text-left text-[12px] text-[#464555]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4953BC]">palette</span>
                    <span>Color Tokens</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">42</span>
                </button>
                <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[#F2F3FF] text-left text-[12px] text-[#464555]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4953BC]">format_size</span>
                    <span>Typography Scale</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">18</span>
                </button>
                <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[#F2F3FF] text-left text-[12px] text-[#464555]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4953BC]">space_dashboard</span>
                    <span>Spacing (8pt Grid)</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">16</span>
                </button>
              </div>
            </div>

            {/* Core Components */}
            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[#777587] text-[10px] font-bold uppercase tracking-wider">
                <span>Core Components</span>
                <span className="font-mono">6</span>
              </div>
              <div className="space-y-0.5 mt-0.5">
                <button
                  onClick={() => setActiveCategory('buttons')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-[12px] font-medium transition-colors ${
                    activeCategory === 'buttons'
                      ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                      : 'text-[#464555] hover:bg-[#F2F3FF]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">smart_button</span>
                    <span>Buttons &amp; Actions</span>
                  </span>
                  <span className="font-mono text-[10px] bg-[#3525CD] text-white px-1.5 py-0.2 rounded-full">
                    18
                  </span>
                </button>

                <button
                  onClick={() => setActiveCategory('inputs')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-[12px] font-medium transition-colors ${
                    activeCategory === 'inputs'
                      ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                      : 'text-[#464555] hover:bg-[#F2F3FF]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">edit_note</span>
                    <span>Inputs &amp; Form Fields</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">12</span>
                </button>

                <button
                  onClick={() => setActiveCategory('badges')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-[12px] font-medium transition-colors ${
                    activeCategory === 'badges'
                      ? 'bg-[#E2E7FF] text-[#3525CD] font-semibold'
                      : 'text-[#464555] hover:bg-[#F2F3FF]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">new_label</span>
                    <span>Badges &amp; Status Pills</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">9</span>
                </button>
              </div>
            </div>

            {/* FoodFlow Domain Components */}
            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[#777587] text-[10px] font-bold uppercase tracking-wider">
                <span>FoodFlow Domain</span>
                <span className="font-mono">5</span>
              </div>
              <div className="space-y-0.5 mt-0.5">
                <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[#F2F3FF] text-left text-[12px] text-[#464555]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#005338]">restaurant_menu</span>
                    <span>Dish Card / Item Row</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">6</span>
                </button>
                <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[#F2F3FF] text-left text-[12px] text-[#464555]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#005338]">eco</span>
                    <span>Dietary Tag Pills</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">8</span>
                </button>
                <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[#F2F3FF] text-left text-[12px] text-[#464555]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#005338]">shopping_bag</span>
                    <span>Cart Subtotal Bar</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#777587]">3</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#F2F3FF] flex items-center gap-2">
            <button
              onClick={() => alert('Add Component modal')}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded bg-white text-[#131B2E] text-[11px] font-semibold hover:bg-white/80 shadow-xs"
            >
              <span className="material-symbols-outlined text-[14px]">add</span>
              <span>New Component</span>
            </button>
          </div>
        </aside>

        {/* CENTER SPEC CANVAS: Foundations & Deep Matrix */}
        <main className="flex-1 flex flex-col bg-[#FAF8FF] overflow-y-auto min-w-0">
          {/* Top Controls Strip */}
          <div className="h-12 px-6 bg-white flex items-center justify-between border-b border-[#EAEDFF] sticky top-0 z-10 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#F2F3FF] p-0.5 rounded">
                <button className="px-3 py-1 rounded bg-white text-[#3525CD] text-[12px] font-semibold shadow-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">grid_view</span>
                  <span>Gallery Grid</span>
                </button>
                <button className="px-3 py-1 rounded text-[#464555] hover:text-[#131B2E] text-[12px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">table_rows</span>
                  <span>Table Spec</span>
                </button>
                <button className="px-3 py-1 rounded text-[#464555] hover:text-[#131B2E] text-[12px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">terminal</span>
                  <span>Code (Tailwind / Swift)</span>
                </button>
              </div>
              <span className="text-[12px] text-[#777587]">
                Scope: <strong className="text-[#3525CD]">Buttons &amp; Actions (v2.1)</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Light / Dark Preview Switch */}
              <div className="flex items-center gap-1 bg-[#F2F3FF] p-0.5 rounded-full">
                <button
                  onClick={() => setThemeMode('light')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                    themeMode === 'light' ? 'bg-white text-[#131B2E] shadow-xs' : 'text-[#464555]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px] text-[#4953BC]">light_mode</span>
                  <span>Light Canvas</span>
                </button>
                <button
                  onClick={() => setThemeMode('dark')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                    themeMode === 'dark' ? 'bg-white text-[#131B2E] shadow-xs' : 'text-[#464555]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">dark_mode</span>
                  <span>Dark Canvas</span>
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Content */}
          <div className="p-6 space-y-6">
            {/* SECTION 1: Semantic Foundations Ribbon */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#EAEDFF] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#3525CD] text-[18px]">tune</span>
                  <span className="text-[15px] font-bold text-[#131B2E]">
                    Foundations — Live Token Spectrum
                  </span>
                  <span className="text-[12px] text-[#777587]">
                    Synced to W3C Design Tokens Community Spec
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-[#3525CD] hover:underline cursor-pointer">
                  View All 128 Tokens →
                </span>
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {colors.map(col => (
                  <div key={col.id} className="bg-[#F2F3FF] p-2.5 rounded-lg flex flex-col gap-1.5">
                    <div
                      className="h-10 w-full rounded flex items-end justify-between p-1 shadow-inner"
                      style={{ backgroundColor: col.value }}
                    >
                      <span className="font-mono text-[9px] text-white bg-black/40 px-1 rounded">
                        {col.contrastGrade}
                      </span>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#131B2E] truncate">{col.name}</p>
                      <p className="font-mono text-[10px] text-[#777587] truncate">{col.variable}</p>
                      <p className="font-mono text-[10px] text-[#3525CD] font-medium">
                        {col.value} • {col.ratio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Typography Scale Ribbon */}
              <div className="pt-2 border-t border-[#EAEDFF]">
                <div className="flex items-center gap-3 overflow-x-auto pb-1 text-[#131B2E]">
                  {typography.map(t => (
                    <div
                      key={t.id}
                      className="flex items-baseline gap-2 px-3 py-1.5 rounded bg-[#F2F3FF] whitespace-nowrap"
                    >
                      <span className="text-[11px] text-[#777587]">{t.name}</span>
                      <span className="font-bold text-[14px]">{t.sampleText}</span>
                      <span className="font-mono text-[10px] text-[#777587]">{t.fontSize}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 2: Master Component Matrix Showcase */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-[#EAEDFF] space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#E0E0FF] text-[#17228F] font-mono text-[11px] font-semibold">
                      ❖ Master Component
                    </span>
                    <h3 className="text-[18px] font-bold text-[#131B2E]">Button / Action Controls</h3>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#6FFBBE] text-[#002113] font-bold">
                      18 Variants Ready
                    </span>
                  </div>
                  <p className="text-[12px] text-[#777587] mt-1">
                    Primary trigger component optimized for high-conversion FoodFlow checkout flows, cart triggers, and delivery CTA actions.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert('TSX component code copied to clipboard!')}
                    className="px-3 py-1.5 rounded bg-[#E2E7FF] text-[#3525CD] text-[12px] font-semibold hover:bg-[#DAE2FD] transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[15px]">code</span>
                    <span>Copy TSX</span>
                  </button>
                  <button
                    onClick={() => alert('Generating new responsive button variant with AI...')}
                    className="px-3 py-1.5 rounded bg-[#3525CD] text-white text-[12px] font-semibold hover:bg-[#4F46E5] transition-colors flex items-center gap-1 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[15px]">auto_fix_high</span>
                    <span>Generate Variant</span>
                  </button>
                </div>
              </div>

              {/* Multi-Variant Interactive Matrix Grid */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[12px]">
                  <thead>
                    <tr className="bg-[#F2F3FF] text-[#777587] font-mono text-[11px]">
                      <th className="p-3 rounded-l">HIERARCHY / STYLE</th>
                      <th className="p-3">DEFAULT (RESTING)</th>
                      <th className="p-3">HOVER STATE</th>
                      <th className="p-3">FOCUSED (A11Y)</th>
                      <th className="p-3">DISABLED</th>
                      <th className="p-3 rounded-r">LOADING / SPINNER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAEDFF]">
                    {/* Primary Filled Row */}
                    <tr>
                      <td className="p-3 align-middle">
                        <p className="font-semibold text-[#131B2E]">Primary Filled</p>
                        <p className="font-mono text-[10px] text-[#777587]">variant="primary"</p>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#4F46E5] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-sm hover:scale-[1.01] transition-transform">
                          {hasLeadingIcon && <span className="material-symbols-outlined text-[16px]">shopping_bag</span>}
                          <span>{buttonLabel}</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#3525CD] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-md">
                          {hasLeadingIcon && <span className="material-symbols-outlined text-[16px]">shopping_bag</span>}
                          <span>{buttonLabel}</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#4F46E5] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_0_0_3px_rgba(79,70,229,0.35)]">
                          {hasLeadingIcon && <span className="material-symbols-outlined text-[16px]">shopping_bag</span>}
                          <span>{buttonLabel}</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#EAEDFF] text-[#777587] text-[12px] font-semibold flex items-center gap-1.5 cursor-not-allowed opacity-60">
                          {hasLeadingIcon && <span className="material-symbols-outlined text-[16px]">shopping_bag</span>}
                          <span>{buttonLabel}</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#4F46E5] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-sm">
                          <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                          <span>Updating Order...</span>
                        </button>
                      </td>
                    </tr>

                    {/* Secondary Surface Row */}
                    <tr>
                      <td className="p-3 align-middle">
                        <p className="font-semibold text-[#131B2E]">Secondary Surface</p>
                        <p className="font-mono text-[10px] text-[#777587]">variant="secondary"</p>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#E2E7FF] text-[#3525CD] text-[12px] font-semibold flex items-center gap-1.5 shadow-xs">
                          <span className="material-symbols-outlined text-[16px]">tune</span>
                          <span>Custom Ingredients</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#DAE2FD] text-[#3525CD] text-[12px] font-semibold flex items-center gap-1.5 shadow-xs">
                          <span className="material-symbols-outlined text-[16px]">tune</span>
                          <span>Custom Ingredients</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#E2E7FF] text-[#3525CD] text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_0_0_3px_rgba(135,146,254,0.4)]">
                          <span className="material-symbols-outlined text-[16px]">tune</span>
                          <span>Custom Ingredients</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#EAEDFF] text-[#777587] text-[12px] font-semibold flex items-center gap-1.5 cursor-not-allowed opacity-50">
                          <span className="material-symbols-outlined text-[16px]">tune</span>
                          <span>Custom Ingredients</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#E2E7FF] text-[#3525CD] text-[12px] font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                          <span>Loading Items...</span>
                        </button>
                      </td>
                    </tr>

                    {/* Destructive Variant Row */}
                    <tr>
                      <td className="p-3 align-middle">
                        <p className="font-semibold text-[#131B2E]">Destructive Action</p>
                        <p className="font-mono text-[10px] text-[#777587]">variant="destructive"</p>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#FFDAD6] text-[#93000A] text-[12px] font-semibold flex items-center gap-1.5 shadow-xs">
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                          <span>Remove Item</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#BA1A1A] text-white text-[12px] font-semibold flex items-center gap-1.5 shadow-sm">
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                          <span>Remove Item</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#FFDAD6] text-[#93000A] text-[12px] font-semibold flex items-center gap-1.5 shadow-[0_0_0_3px_rgba(186,26,26,0.25)]">
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                          <span>Remove Item</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#EAEDFF] text-[#777587] text-[12px] font-semibold flex items-center gap-1.5 opacity-50 cursor-not-allowed">
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                          <span>Remove Item</span>
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="h-10 px-4 rounded-full bg-[#FFDAD6] text-[#93000A] text-[12px] font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                          <span>Removing...</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Dual Render Spec Comparison: Light vs Dark Theme */}
              <div className="pt-4 border-t border-[#EAEDFF]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#777587]">
                    Cross-Theme Rendering Sandbox (Contrast Verified)
                  </span>
                  <span className="font-mono text-[11px] text-[#3525CD]">
                    Live CSS Variables: Token Resolver 3.2.0
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Light Theme Card Preview */}
                  <div className="bg-[#F2F3FF] p-4 rounded-xl flex flex-col gap-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold text-[#131B2E] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#4953BC]">light_mode</span>
                        <span>Light Mode Render</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#005338] font-bold">Contrast: 8.4:1 (Pass AAA)</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJf4Ktvq-g4wCXdOFo0ZVNQyNWVNURbpzuurxMjelpJ53QkmrKQkbchFXp3EeatXUM6spQ2Fqk0gHrx8gRS_UyiA13o_4XNdjC1UaHUWiEM_ezoUz2XYl72H4TIRNnzlBdHRJhGntU3gHry6Djte8kYEMpklWOO0NsU6LpDWK4iOaqWj3z15j4oVV7dm3m3OuU1uCEi3TwLxLMkdxhYQsoEej7g1c-xrA1zifQeCe4wtnnUS52ZMY3"
                        alt="Truffle pasta thumbnail"
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[14px] text-[#131B2E] truncate">Truffle Fettuccine</p>
                        <p className="text-[11px] text-[#777587] truncate">Handmade egg pasta, black summer truffle butter</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[13px] font-bold text-[#3525CD]">$22.00</span>
                          <button className="h-7 px-3 rounded-full bg-[#4F46E5] text-white text-[11px] font-bold flex items-center gap-1 shadow-xs">
                            <span className="material-symbols-outlined text-[14px]">add</span>
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dark Theme Card Preview */}
                  <div className="bg-[#283044] p-4 rounded-xl flex flex-col gap-3 shadow-xs text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold text-white flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#C3C0FF]">dark_mode</span>
                        <span>Dark Mode Render</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#4EDEA3] font-bold">Contrast: 9.1:1 (Pass AAA)</span>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg shadow-sm flex items-center gap-3">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKT7c7CjIQFRnYcn8f14qG7hZHjDI6t2gEHqKjSZyfpCehsk9eLVs3ha0yxphOwbNilUY_4xd4A9Wjn2iWwV5aOwyATK3fkjwquxlyi-fdj8pUYaG0PccyOhMB_Qte0uAWrmaGxy6D0ViNCJ8uP4PFjy6-fOKPqRjKtNCeD6kESxR1OZx60BJeywB-FYARU9G86acIkL1b9-itHzRLrgPdVSYIo7dzaQLJowhsbSHtNVluamEl6t0f"
                        alt="Tonkotsu ramen thumbnail"
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[14px] text-white truncate">Tokyo Tonkotsu Ramen</p>
                        <p className="text-[11px] text-slate-400 truncate">24hr slow-simmered pork bone broth with chashu</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[13px] font-bold text-[#C3C0FF]">$19.50</span>
                          <button className="h-7 px-3 rounded-full bg-[#4F46E5] text-white text-[11px] font-bold flex items-center gap-1 shadow-xs">
                            <span className="material-symbols-outlined text-[14px]">add</span>
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT PANEL: Token & Variant Inspector Sidebar (290px) */}
        <aside className="w-72 bg-white border-l border-[#EAEDFF] flex flex-col flex-shrink-0 shadow-xs z-10 overflow-y-auto">
          <div className="p-4 bg-[#F2F3FF]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#777587]">
              SELECTED INSTANCE
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#3525CD] text-[20px]">smart_button</span>
              <div>
                <p className="font-bold text-[13px] text-[#131B2E]">Button / Primary</p>
                <p className="font-mono text-[10px] text-[#777587]">Component ID: ff-core-btn-01</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase text-[#777587]">Component Properties</span>
              <span className="font-mono text-[10px] text-[#3525CD] cursor-pointer hover:underline">+ Property</span>
            </div>

            {/* Size Segmented Control */}
            <div className="space-y-1">
              <label className="text-[11px] text-[#464555] flex items-center justify-between">
                <span>Size</span>
                <span className="font-mono text-[10px] text-[#777587]">{buttonSize} (40px)</span>
              </label>
              <div className="grid grid-cols-3 gap-1 bg-[#F2F3FF] p-0.5 rounded">
                {(['sm', 'md', 'lg'] as const).map(sz => (
                  <button
                    key={sz}
                    onClick={() => setButtonSize(sz)}
                    className={`py-1 rounded text-center text-[11px] font-medium transition-colors ${
                      buttonSize === sz ? 'bg-white text-[#3525CD] font-bold shadow-xs' : 'text-[#464555]'
                    }`}
                  >
                    {sz} ({sz === 'sm' ? 32 : sz === 'md' ? 40 : 48})
                  </button>
                ))}
              </div>
            </div>

            {/* Style Variant */}
            <div className="space-y-1">
              <label className="text-[11px] text-[#464555] flex items-center justify-between">
                <span>Style Hierarchy</span>
                <span className="font-mono text-[10px] text-[#777587]">{buttonHierarchy}</span>
              </label>
              <div className="grid grid-cols-3 gap-1 bg-[#F2F3FF] p-0.5 rounded">
                {(['filled', 'subtle', 'ghost'] as const).map(h => (
                  <button
                    key={h}
                    onClick={() => setButtonHierarchy(h)}
                    className={`py-1 rounded text-center text-[11px] font-medium capitalize transition-colors ${
                      buttonHierarchy === h ? 'bg-white text-[#3525CD] font-bold shadow-xs' : 'text-[#464555]'
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

            {/* Boolean Toggles */}
            <div className="space-y-2 pt-1 border-t border-[#EAEDFF]">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#131B2E]">Has Leading Icon</span>
                <button
                  onClick={() => setHasLeadingIcon(!hasLeadingIcon)}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center px-0.5 ${
                    hasLeadingIcon ? 'bg-[#3525CD]' : 'bg-[#C7C4D8]'
                  }`}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full shadow-xs transition-transform ${
                      hasLeadingIcon ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#131B2E]">Has Trailing Badge</span>
                <button
                  onClick={() => setHasTrailingBadge(!hasTrailingBadge)}
                  className={`w-8 h-4 rounded-full transition-colors relative flex items-center px-0.5 ${
                    hasTrailingBadge ? 'bg-[#3525CD]' : 'bg-[#C7C4D8]'
                  }`}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full shadow-xs transition-transform ${
                      hasTrailingBadge ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            {/* Label Content Input */}
            <div className="space-y-1 pt-1">
              <label className="text-[11px] text-[#464555]">Label Content</label>
              <div className="bg-[#F2F3FF] px-3 py-1.5 rounded flex items-center justify-between">
                <input
                  type="text"
                  value={buttonLabel}
                  onChange={e => setButtonLabel(e.target.value)}
                  className="w-full bg-transparent text-[12px] text-[#131B2E] focus:outline-none"
                />
                <span className="material-symbols-outlined text-[14px] text-[#777587]">edit</span>
              </div>
            </div>

            {/* Bound Design Tokens */}
            <div className="pt-2 border-t border-[#EAEDFF] space-y-2">
              <span className="text-[10px] font-bold uppercase text-[#777587]">
                Bound Design Tokens
              </span>
              <div className="space-y-1.5 text-[11px]">
                <div className="bg-[#F2F3FF] p-2 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#4F46E5]"></span>
                    <span>color.brand.primary</span>
                  </div>
                  <span className="font-mono text-[#3525CD]">#4F46E5</span>
                </div>
                <div className="bg-[#F2F3FF] p-2 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-[#777587]">text_fields</span>
                    <span>typography.button.medium</span>
                  </div>
                  <span className="font-mono text-[#777587]">Inter 14 Med</span>
                </div>
                <div className="bg-[#F2F3FF] p-2 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-[#777587]">rounded_corner</span>
                    <span>radius.full</span>
                  </div>
                  <span className="font-mono text-[#777587]">9999px</span>
                </div>
              </div>
            </div>

            {/* AI Auditor Callout */}
            <div className="bg-[#E2E7FF] rounded-xl p-3 space-y-2 mt-4 shadow-xs">
              <div className="flex items-center gap-1.5 text-[#3525CD] text-[12px] font-bold">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                <span>AI Token &amp; A11y Auditor</span>
              </div>
              <p className="text-[11px] text-[#131B2E] leading-snug">
                All 18 button variations satisfy <strong>WCAG 2.2 AAA</strong> touch-target dimensions (≥44×44px hit-box) and minimum 4.5:1 contrast standards.
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[10px] text-[#005338] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span>
                  <span>0 Detached Styles</span>
                </span>
                <button
                  onClick={() => alert('Auditing completed. Zero detached tokens found.')}
                  className="text-[11px] text-[#3525CD] hover:underline font-semibold"
                >
                  Re-scan
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
