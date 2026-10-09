import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';
import { LayersPanel } from './LayersPanel';
import { PropertyInspector } from './PropertyInspector';
import { CanvasToolbar } from './CanvasToolbar';
import { AiCopilotCard } from './AiCopilotCard';

export const DesignEditorWorkspace: React.FC = () => {
  const { document: doc, selectedNodeId, selectNode } = useDocument();
  const [filterCategory, setFilterCategory] = useState<'Popular' | 'Bowls' | 'Salads' | 'Drinks' | 'Sides'>('Popular');
  const [cartCount, setCartCount] = useState(2);
  const [rulerVisible, setRulerVisible] = useState(true);
  const [gridVisible, setGridVisible] = useState(true);

  return (
    <div className="flex w-full h-[calc(100vh-48px)] overflow-hidden select-none bg-[#F2F3FF] text-[#131B2E]">
      {/* LEFT DOCKED SIDEBAR: HIERARCHY & EXPLORER (260px) */}
      <LayersPanel />

      {/* CENTER INFINITE CANVAS VIEWPORT */}
      <main className="flex-1 relative overflow-auto bg-[#F4F4F6] flex flex-col items-center justify-start p-10 cursor-default">
        {/* Ambient Grid Background Pattern */}
        {gridVisible && (
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(circle, #777587 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>
        )}

        {/* Top Floating Viewport Control Bar */}
        <div className="fixed top-14 z-30 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-[#C7C4D8]/30">
          <button className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-[#E2E7FF] text-[#131B2E] text-[11px] font-semibold font-mono">
            <span>100%</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </button>
          <div className="w-px h-3.5 bg-[#C7C4D8] mx-0.5"></div>
          <button
            onClick={() => setRulerVisible(!rulerVisible)}
            className={`p-1 rounded transition-colors ${rulerVisible ? 'text-[#3525CD]' : 'text-[#464555]'} hover:bg-[#E2E7FF]`}
            title="Rulers (Shift+R)"
          >
            <span className="material-symbols-outlined text-[16px]">straighten</span>
          </button>
          <button
            onClick={() => setGridVisible(!gridVisible)}
            className={`p-1 rounded transition-colors ${gridVisible ? 'text-[#3525CD]' : 'text-[#464555]'} hover:bg-[#E2E7FF]`}
            title="Layout Grids"
          >
            <span className="material-symbols-outlined text-[16px]">grid_4x4</span>
          </button>
          <button className="p-1 rounded text-[#464555] hover:bg-[#E2E7FF] transition-colors" title="Pixel Grid">
            <span className="material-symbols-outlined text-[16px]">view_comfy</span>
          </button>
          <button className="p-1 rounded text-[#464555] hover:bg-[#E2E7FF] transition-colors" title="Pixel Preview">
            <span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
          </button>
          <div className="w-px h-3.5 bg-[#C7C4D8] mx-0.5"></div>
          <div className="flex items-center gap-1 text-[#005338] px-1.5 py-0.5 bg-[#4EDEA3]/20 rounded text-[11px] font-medium">
            <span className="material-symbols-outlined text-[13px]">bolt</span>
            <span>Autonomous Co-Pilot Live</span>
          </div>
        </div>

        {/* Dynamic Canvas Container with 48px Smart Distance Guides */}
        <div className="relative w-full max-w-[1280px] flex items-start justify-center gap-[48px] pt-12 pb-24">
          {/* FRAME 1: HOME DISCOVERY */}
          <div
            onClick={() => selectNode('frame-01')}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          >
            <div className="flex items-center justify-between w-[375px] mb-2 px-1 text-[#464555]">
              <span className="text-[12px] font-semibold text-[#777587]">01 · Home Discovery</span>
              <span className="text-[11px] font-mono text-[#777587]">375 × 812</span>
            </div>

            {/* iPhone 16 Frame Body */}
            <div className={`w-[375px] h-[812px] bg-white rounded-[44px] shadow-xl overflow-hidden relative border ${selectedNodeId === 'frame-01' ? 'border-[#3525CD] ring-2 ring-[#3525CD]/30' : 'border-[#C7C4D8]/40'} flex flex-col`}>
              {/* iOS Status Bar */}
              <div className="h-11 px-7 flex items-center justify-between bg-white flex-shrink-0 z-20">
                <span className="text-[12px] font-semibold font-mono text-[#131B2E]">9:41</span>
                <div className="w-28 h-5 bg-[#131B2E] rounded-full mx-auto"></div>
                <div className="flex items-center gap-1.5 text-[#131B2E]">
                  <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[14px]">wifi</span>
                  <span className="material-symbols-outlined text-[14px]">battery_full</span>
                </div>
              </div>

              {/* Frame Inner Content: Home Discovery */}
              <div className="flex-1 overflow-y-auto px-4 pb-16 space-y-4">
                {/* Location header */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#777587] uppercase font-semibold">Delivery Address</span>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span className="text-[14px] font-bold text-[#131B2E]">742 Evergreen Terrace</span>
                      <span className="material-symbols-outlined text-[16px] text-[#3525CD]">expand_more</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#EAEDFF] flex items-center justify-center text-[#131B2E]">
                    <span className="material-symbols-outlined text-[18px]">notifications</span>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-[#F2F3FF]">
                  <span className="material-symbols-outlined text-[18px] text-[#777587]">search</span>
                  <span className="text-[13px] text-[#777587] flex-1">Dishes, grocers, cravings...</span>
                  <span className="material-symbols-outlined text-[18px] text-[#3525CD]">mic</span>
                </div>

                {/* Promo Banner Card */}
                <div className="relative rounded-2xl bg-gradient-to-r from-[#3525CD] to-[#4953BC] p-4 text-white overflow-hidden shadow-sm">
                  <div className="relative z-10 w-2/3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold">
                      SUMMER CHEF PROMO
                    </span>
                    <p className="text-[16px] font-bold mt-1 leading-snug">30% OFF Artisan Bowls</p>
                    <p className="text-[12px] text-white/80 mt-0.5">Use code BOWLFRESH at checkout</p>
                  </div>
                  <div className="absolute -right-3 -bottom-4 w-28 h-28 rounded-full bg-[#4F46E5]/40"></div>
                </div>

                {/* Category Bubbles */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-[#131B2E]">Top Categories</span>
                    <span className="text-[11px] text-[#3525CD] font-semibold">See all</span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-hidden">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#E0E0FF]/40 flex items-center justify-center text-[#3525CD]">
                        <span className="material-symbols-outlined text-[24px]">lunch_dining</span>
                      </div>
                      <span className="text-[11px] text-[#131B2E] font-medium">Burgers</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#6FFBBE]/30 flex items-center justify-center text-[#005338]">
                        <span className="material-symbols-outlined text-[24px]">local_pizza</span>
                      </div>
                      <span className="text-[11px] text-[#131B2E] font-medium">Healthy</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#E2E7FF] flex items-center justify-center text-[#4953BC]">
                        <span className="material-symbols-outlined text-[24px]">ramen_dining</span>
                      </div>
                      <span className="text-[11px] text-[#131B2E] font-medium">Asian</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#E2DFFF]/50 flex items-center justify-center text-[#3525CD]">
                        <span className="material-symbols-outlined text-[24px]">restaurant</span>
                      </div>
                      <span className="text-[11px] text-[#131B2E] font-medium">Italian</span>
                    </div>
                  </div>
                </div>

                {/* Restaurant Feed Item */}
                <div className="rounded-2xl overflow-hidden bg-[#F2F3FF] shadow-sm">
                  <div
                    className="h-28 w-full bg-cover bg-center relative"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSflX-dlfoqGEPJgWMLAbqjOaAFHdyLC9LJm0jUcc2_zUC5JVWndEjbLW9_Gx4unhV8KEVtP1vo9viyO6bDZq0EwHfqffYByOcgc4urXCL7ciUgX9xS8qDrWGAcYc-mFEoHtpJVN73wzGcN0GNMflu_bzmtguw5bfXLbnBUe6UTjgoiacF9qhFi1J6ig80iGSwK-hkDDwUV_0Ij3ZsU66_DSZsIdGjQTdIHROZhACTy251S615ovR_')",
                    }}
                  >
                    <span className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 rounded-full text-[11px] font-bold text-[#131B2E] flex items-center gap-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[13px] text-amber-500">star</span> 4.9
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-bold text-[#131B2E]">Artisan Bistro &amp; Bowls</p>
                      <span className="text-[11px] text-[#005338] font-semibold">Free Delivery</span>
                    </div>
                    <p className="text-[11px] text-[#777587] mt-0.5">Poke · Organic Salads · Japanese Modern</p>
                    <div className="flex items-center gap-3 mt-2 text-[#464555] text-[11px]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> 15-25 min
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">local_shipping</span> $0.00 fee
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* iOS Home Bottom Indicator */}
              <div className="h-5 flex items-center justify-center bg-white flex-shrink-0">
                <div className="w-32 h-1 bg-[#131B2E]/40 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* DISTANCE GUIDE 1-2 (48px indicator) */}
          <div className="flex flex-col items-center justify-center self-stretch pointer-events-none -mx-4">
            <div className="h-full border-l border-dashed border-pink-400 flex items-center justify-center relative">
              <span className="bg-pink-500 text-white font-mono text-[10px] px-1 py-0.5 rounded shadow-sm z-10">
                48px
              </span>
            </div>
          </div>

          {/* FRAME 2: CENTER ACTIVE SELECTED (RESTAURANT DETAILS) */}
          <div
            onClick={() => selectNode('frame-02')}
            className="flex flex-col items-center flex-shrink-0 relative cursor-pointer"
          >
            {/* Selection Tag Header */}
            <div className="flex items-center justify-between w-[375px] mb-2 px-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3525CD] animate-pulse"></span>
                <span className="text-[12px] font-bold text-[#3525CD]">02 · Restaurant Details &amp; Menu</span>
              </div>
              <span className="text-[11px] font-semibold text-[#3525CD] bg-[#E2DFFF] px-1.5 py-0.5 rounded font-mono">
                W: 375 &nbsp; H: 812
              </span>
            </div>

            {/* Figma Selection Box Layer Outer Outline with 8 Canonical Resize Handles */}
            <div className="relative p-[1.5px] rounded-[46px] bg-[#3525CD] shadow-2xl">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-[1.5px] border-[#3525CD] rounded-xs shadow-sm z-40"></div>

              {/* Actual Mobile Artboard */}
              <div className="w-[375px] h-[812px] bg-white rounded-[44px] overflow-hidden relative flex flex-col">
                {/* iOS Status Bar (Hero Overlay) */}
                <div className="h-11 px-7 flex items-center justify-between text-white absolute top-0 inset-x-0 z-30 bg-gradient-to-b from-black/60 to-transparent">
                  <span className="font-mono text-[12px] font-semibold">9:41</span>
                  <div className="w-28 h-5 bg-black rounded-full mx-auto"></div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                    <span className="material-symbols-outlined text-[14px]">wifi</span>
                    <span className="material-symbols-outlined text-[14px]">battery_full</span>
                  </div>
                </div>

                {/* Restaurant Hero Banner */}
                <div
                  className="h-44 w-full bg-cover bg-center relative flex-shrink-0"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlZeP_LYcW3RpnAHRDoq2X3ZuRodcU5IMvsW1qpLWejAm2GTQyB-vS4J-coYbDmf0U3V_xM-kngRQrgI1m6tdJrHpicnIasX6RgQBgC60_9_EZ6-_8k6-Sp1NLFmX_CBjYjgl9YVVr87KLYjM6MqNS27eRL4ixruvLMMv_m8ICFR6IJuqCMdmQ4jRsdntTP29CPBeUcc8TDvQZSZ1M1ByDAUU_jtQAZEsZeHHIu8Fpz3B29qVFbejU')",
                  }}
                >
                  <div className="absolute top-11 inset-x-4 flex items-center justify-between z-20">
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#131B2E] shadow-md">
                      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#131B2E] shadow-md">
                        <span className="material-symbols-outlined text-[18px]">share</span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#BA1A1A] shadow-md">
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Main Scrollable Restaurant Details */}
                <div className="flex-1 overflow-y-auto px-4 pt-3 pb-20 space-y-4 bg-white">
                  {/* Restaurant Title & Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[18px] font-bold text-[#131B2E] leading-tight">
                        Artisan Bistro &amp; Bowls
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-[#4EDEA3]/30 text-[#005338] text-[11px] font-bold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[13px]">star</span> 4.9 (1.2k+)
                      </span>
                    </div>
                    <p className="text-[12px] text-[#777587]">
                      Organic Healthy · Japanese Poke Bowls · Vegan Friendly
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[#464555] text-[11px]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#005338]">schedule</span> 15-25 min
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#3525CD]">delivery_dining</span> Free Delivery
                      </span>
                      <span>•</span>
                      <span className="text-[#005338] font-semibold">Open Now</span>
                    </div>
                  </div>

                  {/* Category Segmented Filters */}
                  <div className="flex items-center gap-1.5 border-b border-[#EAEDFF] pb-2 overflow-x-hidden">
                    {(['Popular', 'Bowls', 'Salads', 'Drinks', 'Sides'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                          filterCategory === cat
                            ? 'bg-[#3525CD] text-white shadow-sm'
                            : 'bg-[#F2F3FF] text-[#464555] hover:text-[#131B2E]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Menu Item 1 (Highlighted Active Component) */}
                  <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F2F3FF] border border-[#3525CD]/20 shadow-sm relative">
                    <div
                      className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs838kxp9rzkqT_NQW_aaBdR0nyJtWQRFS_FZUP14i7nvnX0OdBtGdPuEmg5OXVdwrS7ulVQvJOIdp2n87dI1Y8011kHH7M9CYQOhWib-K8aJExWOQXxCFGpHHMZHkXSKDz07FxmMg4G3ioZpnchJ08N58o27pKiG2pwGuoROXJjxssWAJ9S8_OtDSG-1eIebsbjLGgrkSfss8mC6_iFOEynqog0GgK1GUX2zSdcXI1L5UQVbSItHj')",
                      }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="px-1.5 py-0.2 rounded bg-[#6FFBBE] text-[#006E4B] text-[9px] font-bold">
                          BESTSELLER
                        </span>
                      </div>
                      <p className="text-[13px] font-bold text-[#131B2E] truncate mt-0.5">
                        Spicy Salmon Poke Bowl
                      </p>
                      <p className="text-[11px] text-[#777587] line-clamp-1">
                        Wild salmon, edamame, ponzu truffle dressing
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[13px] font-bold text-[#3525CD]">$18.50</span>
                        <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full shadow-xs">
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              setCartCount(Math.max(1, cartCount - 1));
                            }}
                            className="text-[#3525CD] font-bold text-[14px] leading-none"
                          >
                            -
                          </button>
                          <span className="font-mono text-[11px] font-bold text-[#131B2E]">
                            {cartCount}
                          </span>
                          <button
                            onClick={e => {
                              e.stopPropagation();
                              setCartCount(cartCount + 1);
                            }}
                            className="text-[#3525CD] font-bold text-[14px] leading-none"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Item 2 */}
                  <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F2F3FF] shadow-xs">
                    <div
                      className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFFezW5aMocOsMFqc2kwppI-zO-Vdupal5Kw7QAfyjmjZijMBpCtVYY9w-EgZ9YMvNPu__Q0j8nmcySNf68Jl6L_6BDnDpKI-iC42cDv1WAg-LUNE0sSdD_9kuhtBmxd6vB1Ky2fAxC-yWwFUFXE-6J5GvwwwNGIJwfPSxvBKYS41HdfgpjXxy4e7WvaIys7FAxv_6UMkkW47L6rbvSvkdFkdc4hmoD6_RiXuekDsGO0CFmrLPIOPZ')",
                      }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <span className="px-1.5 py-0.2 rounded bg-[#E0E0FF] text-[#4953BC] text-[9px] font-bold">
                        VEGAN
                      </span>
                      <p className="text-[13px] font-bold text-[#131B2E] truncate mt-0.5">
                        Golden Tofu Crunch Bowl
                      </p>
                      <p className="text-[11px] text-[#777587] line-clamp-1">
                        Smoked tofu, quinoa, crisp radish, ginger drizzle
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[13px] font-bold text-[#3525CD]">$16.00</span>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            setCartCount(cartCount + 1);
                          }}
                          className="w-6 h-6 rounded-full bg-[#3525CD] text-white flex items-center justify-center shadow-xs"
                        >
                          <span className="material-symbols-outlined text-[14px]">add</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Menu Item 3 */}
                  <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F2F3FF] shadow-xs">
                    <div
                      className="w-20 h-20 rounded-xl bg-cover bg-center flex-shrink-0"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDhBbTMhmnsM0VfLCFhWHNJzHT_4jVqSW5icCPX01SJbMaLAIclKebND2-y9w89DQSG6Obhd6yMA0QxiLzhl1lqtOAU-3gzQL5Mb1zWQDQjiQ5h7GwCg-gG18q4QBadO1smbzMiZ3fqRkDgK_8kUEwP7EZ_i9ASyQWkwvko93RbdeHGN1KbHfoTPmliJ9Y8o6Cl0WAquvSeDpusO4QZburntjDjE8RLopZSEhkscDp_-4Gc0GFrHL8')",
                      }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-[#131B2E] truncate">
                        Hibiscus Cold Brew Infusion
                      </p>
                      <p className="text-[11px] text-[#777587] line-clamp-1">
                        Fresh botanical brew, lime zest, agave
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[13px] font-bold text-[#3525CD]">$5.50</span>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            setCartCount(cartCount + 1);
                          }}
                          className="w-6 h-6 rounded-full bg-[#3525CD] text-white flex items-center justify-center shadow-xs"
                        >
                          <span className="material-symbols-outlined text-[14px]">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sticky Floating Cart Button */}
                <div className="absolute bottom-5 inset-x-4 z-30">
                  <div className="w-full bg-[#131B2E] text-[#EEF0FF] rounded-2xl p-3 shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#3525CD] text-white text-[11px] font-bold flex items-center justify-center">
                        {cartCount}
                      </span>
                      <span className="text-[13px] font-semibold">View Order Cart</span>
                    </div>
                    <span className="text-[13px] font-bold text-[#4EDEA3]">
                      ${(cartCount * 17.25).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* iOS Home Indicator */}
                <div className="h-5 flex items-center justify-center bg-white flex-shrink-0 z-30">
                  <div className="w-32 h-1 bg-[#131B2E]/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* DISTANCE GUIDE 2-3 (48px indicator) */}
          <div className="flex flex-col items-center justify-center self-stretch pointer-events-none -mx-4">
            <div className="h-full border-l border-dashed border-pink-400 flex items-center justify-center relative">
              <span className="bg-pink-500 text-white font-mono text-[10px] px-1 py-0.5 rounded shadow-sm z-10">
                48px
              </span>
            </div>
          </div>

          {/* FRAME 3: REAL-TIME TRACKING */}
          <div
            onClick={() => selectNode('frame-03')}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          >
            <div className="flex items-center justify-between w-[375px] mb-2 px-1 text-[#464555]">
              <span className="text-[12px] font-semibold text-[#777587]">03 · Real-time Tracking</span>
              <span className="text-[11px] font-mono text-[#777587]">375 × 812</span>
            </div>

            {/* iPhone 16 Frame Body */}
            <div className={`w-[375px] h-[812px] bg-white rounded-[44px] shadow-xl overflow-hidden relative border ${selectedNodeId === 'frame-03' ? 'border-[#3525CD] ring-2 ring-[#3525CD]/30' : 'border-[#C7C4D8]/40'} flex flex-col`}>
              {/* iOS Status Bar */}
              <div className="h-11 px-7 flex items-center justify-between bg-white flex-shrink-0 z-20">
                <span className="text-[12px] font-semibold font-mono text-[#131B2E]">9:41</span>
                <div className="w-28 h-5 bg-[#131B2E] rounded-full mx-auto"></div>
                <div className="flex items-center gap-1.5 text-[#131B2E]">
                  <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[14px]">wifi</span>
                  <span className="material-symbols-outlined text-[14px]">battery_full</span>
                </div>
              </div>

              {/* Real-time Map & Delivery */}
              <div className="flex-1 relative flex flex-col">
                <div
                  className="w-full h-80 bg-cover bg-center relative"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA47XQnv0cWGEHeD4G-JGXNmK8XUdDavey0wqXsyuJR9y-e_WddH3obwjw--ySMHvSKR2O2zEtYpg8OwO-xC7ZtPtZoEanUZxPKgoJWb-DrmL-MACeuayM5W9RRl6iM3sgAIulMC6N19eUIN4ZmK-ryNeS6sp5TkzEjpFIIr5Frg3xuHzGIkrgMG-0wP9XvpVtOTwPOvRPDHNN4wBFd27pvz12a_80VvZH_DTOds2c8V0TjXInqNnhV')",
                  }}
                >
                  <div className="absolute inset-0 bg-[#3525CD]/10"></div>
                  {/* Courier Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#3525CD]/20 animate-ping absolute"></div>
                    <div className="w-10 h-10 rounded-full bg-[#3525CD] text-white shadow-lg flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-[20px]">two_wheeler</span>
                    </div>
                  </div>
                  {/* Destination Pin */}
                  <div className="absolute bottom-6 right-10 flex flex-col items-center">
                    <div className="px-2 py-0.5 rounded bg-[#131B2E] text-white text-[10px] font-bold shadow-md">
                      You
                    </div>
                    <span className="material-symbols-outlined text-[#3525CD] text-[24px]">location_on</span>
                  </div>
                </div>

                {/* Courier Tracking Drawer */}
                <div className="flex-1 bg-white -mt-4 rounded-t-3xl shadow-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-1 bg-[#EAEDFF] rounded-full mx-auto mb-3"></div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#777587] font-semibold">
                          Estimated Arrival
                        </span>
                        <h3 className="text-[20px] font-bold text-[#131B2E]">
                          12:42 PM <span className="text-[#005338] text-[14px] font-medium">(8 mins away)</span>
                        </h3>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-[#4EDEA3]/30 text-[#005338] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">electric_moped</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 space-y-2">
                      <div className="w-full h-1.5 bg-[#EAEDFF] rounded-full overflow-hidden flex">
                        <div className="w-3/4 bg-[#3525CD] rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#777587]">
                        <span className="text-[#3525CD] font-bold">Confirmed</span>
                        <span className="text-[#3525CD] font-bold">Prepared</span>
                        <span className="text-[#3525CD] font-bold">On the way</span>
                        <span>Delivered</span>
                      </div>
                    </div>

                    {/* Courier Bio */}
                    <div className="mt-5 p-3 rounded-2xl bg-[#F2F3FF] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYEdHE5FAcs0bAON9Z9ILJLwJRd9lp4TRvUgk4rs8IGGZQEuzg9fNt1XV5gc471YlZ5LNtneMmVX3NfHizjym_faGWIVoxPfXxSds_DdOAmNpY3im5hZwaSB9xxt1SR0evFqBIJm3C7ruIAYN88EYOAzDDyP2SgTikV1QBex5lmHOxTw6f55II0TU-cq-FBXfzgM6AUTGtpBxpKAhB-B584CuBx4VveBkBtNki9lrULCwhEqwgcb64')",
                          }}
                        ></div>
                        <div>
                          <p className="text-[13px] font-bold text-[#131B2E]">Marco V.</p>
                          <p className="text-[11px] text-[#777587]">Vespa Sprint · Grey (4.9 ★)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-white text-[#3525CD] shadow-xs flex items-center justify-center">
                          <span className="material-symbols-outlined text-[16px]">call</span>
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#3525CD] text-white shadow-xs flex items-center justify-center">
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#E2E7FF]/50 flex items-center gap-2 text-[#464555] text-[11px]">
                    <span className="material-symbols-outlined text-[16px] text-[#3525CD]">security</span>
                    <span>Contactless PIN verification required: <strong className="text-[#131B2E] font-mono">8291</strong></span>
                  </div>
                </div>

                {/* iOS Home Indicator */}
                <div className="h-5 flex items-center justify-center bg-white flex-shrink-0">
                  <div className="w-32 h-1 bg-[#131B2E]/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING BOTTOM CANVAS TOOLBAR */}
        <CanvasToolbar />

        {/* DOCKABLE AI PRODUCT DESIGNER FLOATING CO-PILOT CARD */}
        <AiCopilotCard />
      </main>

      {/* RIGHT INSPECTOR SIDEBAR (290px) */}
      <PropertyInspector />
    </div>
  );
};
