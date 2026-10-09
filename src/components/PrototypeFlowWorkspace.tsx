import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const PrototypeFlowWorkspace: React.FC = () => {
  const { document: doc } = useDocument();
  const [viewMode, setViewMode] = useState<'split' | 'flow-map' | 'device-only'>('split');
  const [isPlaying, setIsPlaying] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerDragY, setDrawerDragY] = useState(0);
  const [activeTab, setActiveTab] = useState<'interaction' | 'variables'>('interaction');
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportCodeTab, setExportCodeTab] = useState<'tailwind' | 'reanimated' | 'swift' | 'json'>('tailwind');

  // Physics state
  const [damping, setDamping] = useState(26);
  const [stiffness, setStiffness] = useState(380);
  const [rubberbandFactor, setRubberbandFactor] = useState(0.58);
  const [overshoot, setOvershoot] = useState(3.2);

  const resetDemo = () => {
    setDrawerOpen(false);
    setDrawerDragY(0);
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-48px)] bg-[#FAF8FF] select-none text-[#131B2E]">
      {/* Subheader / Flow Control Bar */}
      <div className="sticky top-12 z-30 flex items-center justify-between px-6 py-2 bg-white border-b border-[#EAEDFF] shadow-xs">
        <div className="flex items-center gap-4">
          {/* Flow Switcher Dropdown */}
          <div className="flex items-center gap-2 bg-[#F2F3FF] px-3 py-1.5 rounded-lg shadow-xs">
            <span className="material-symbols-outlined text-[#3525CD] text-[18px]">alt_route</span>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-bold text-[#131B2E]">
                  Flow 1: Quick Order to Checkout
                </span>
                <span className="px-1.5 py-0.2 rounded bg-[#E2E7FF] text-[#17228F] text-[10px] font-bold">
                  5 STEPS
                </span>
              </div>
              <span className="text-[10px] text-[#777587]">Default Start: 01 Discovery Screen</span>
            </div>
            <span className="material-symbols-outlined text-[16px] text-[#464555]">expand_more</span>
          </div>

          <div className="h-5 w-px bg-[#EAEDFF]"></div>

          {/* Playback Controls */}
          <div className="flex items-center gap-1 bg-[#F2F3FF] p-1 rounded-lg">
            <button
              onClick={resetDemo}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white text-[#131B2E] hover:text-[#3525CD] shadow-xs text-[11px] font-mono"
              title="Restart Flow (R)"
            >
              <span className="material-symbols-outlined text-[15px]">restart_alt</span>
              <span>R</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-7 h-7 flex items-center justify-center rounded bg-[#3525CD] text-white shadow-xs hover:bg-[#4F46E5] transition-colors"
              title="Play / Pause"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-7 h-7 flex items-center justify-center rounded text-[#464555] hover:bg-[#EAEDFF] hover:text-[#131B2E]"
              title="Step Next Frame"
            >
              <span className="material-symbols-outlined text-[16px]">skip_next</span>
            </button>
          </div>

          {/* Device Shell Selector */}
          <div className="flex items-center gap-1.5 bg-[#F2F3FF] px-2.5 py-1 rounded-lg text-[12px]">
            <span className="material-symbols-outlined text-[16px] text-[#464555]">phone_iphone</span>
            <span className="font-semibold text-[#131B2E]">Apple iPhone 16 Pro</span>
            <span className="font-mono text-[11px] text-[#777587]">393 × 852</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4EDEA3]/20 text-[#005338] text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span>8 Micro-interactions Synthesized</span>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#F2F3FF] p-0.5 rounded-lg">
            <button
              onClick={() => setViewMode('split')}
              className={`flex items-center gap-1 px-3 py-1 rounded text-[12px] font-medium transition-all ${
                viewMode === 'split' ? 'bg-white text-[#3525CD] font-bold shadow-xs' : 'text-[#464555]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">view_column</span>
              <span>Split View</span>
            </button>
            <button
              onClick={() => setViewMode('flow-map')}
              className={`flex items-center gap-1 px-3 py-1 rounded text-[12px] font-medium transition-all ${
                viewMode === 'flow-map' ? 'bg-white text-[#3525CD] font-bold shadow-xs' : 'text-[#464555]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">schema</span>
              <span>Flow Map</span>
            </button>
            <button
              onClick={() => setViewMode('device-only')}
              className={`flex items-center gap-1 px-3 py-1 rounded text-[12px] font-medium transition-all ${
                viewMode === 'device-only' ? 'bg-white text-[#3525CD] font-bold shadow-xs' : 'text-[#464555]'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">smartphone</span>
              <span>Device Only</span>
            </button>
          </div>

          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#3525CD] text-white hover:bg-[#4F46E5] text-[12px] font-semibold transition-colors shadow-xs"
          >
            <span className="material-symbols-outlined text-[15px]">code</span>
            <span>Export Physics &amp; Code</span>
          </button>
        </div>
      </div>

      {/* 3-Pane Body: Left Tree + Dual Canvas + Right Inspector */}
      <div className="flex w-full flex-1 overflow-hidden">
        {/* LEFT DRAWER: Hierarchy & Connected Triggers (260px) */}
        <aside className="w-72 flex-shrink-0 bg-white border-r border-[#EAEDFF] flex flex-col justify-between shadow-xs select-none">
          <div className="flex-1 overflow-y-auto">
            <div className="px-3 py-2 bg-[#F2F3FF] flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#777587]">
                FLOW PATHWAYS (3)
              </span>
              <span className="material-symbols-outlined text-[16px] text-[#3525CD] cursor-pointer">add_circle</span>
            </div>

            <div className="p-2 space-y-1">
              <div className="p-2 rounded-lg bg-[#E2E7FF]/70 cursor-pointer shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3525CD] animate-pulse"></span>
                    <span className="text-[12px] font-bold text-[#3525CD]">Flow 1: Core Order &amp; Checkout</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#3525CD] font-bold">ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 mt-1 ml-3 text-[11px] text-[#464555]">
                  <span>5 Screens</span>
                  <span>•</span>
                  <span>8 Trigger Noodles</span>
                  <span>•</span>
                  <span className="text-[#005338] font-semibold">Synced</span>
                </div>
              </div>

              <div className="p-2 rounded-lg hover:bg-[#F2F3FF] cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-[#131B2E]">Flow 2: Onboarding &amp; Biometrics</span>
                  <span className="font-mono text-[10px] text-[#777587]">3 Screens</span>
                </div>
              </div>

              <div className="p-2 rounded-lg hover:bg-[#F2F3FF] cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-[#131B2E]">Flow 3: Live Courier GPS Tracking</span>
                  <span className="font-mono text-[10px] text-[#777587]">2 Screens</span>
                </div>
              </div>
            </div>

            <div className="px-3 py-2 bg-[#F2F3FF] flex items-center justify-between mt-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#777587]">
                SCREEN NODES &amp; TRIGGERS
              </span>
              <span className="font-mono text-[10px] text-[#777587]">5 NODES</span>
            </div>

            <div className="p-2 space-y-1 text-[12px]">
              <div className="p-1.5 rounded hover:bg-[#F2F3FF] cursor-pointer flex items-center justify-between">
                <span>01 · Discovery &amp; Feed</span>
                <span className="text-[#777587] font-mono text-[10px]">→ 02</span>
              </div>

              {/* Node 02 Active with Triggers */}
              <div className="p-2 rounded-lg bg-[#E2DFFF]/40 border border-[#3525CD]/30 space-y-1.5">
                <div className="flex items-center justify-between text-[#3525CD] font-bold">
                  <span>02 · Restaurant Details</span>
                  <span className="font-mono text-[9px] bg-[#3525CD] text-white px-1 rounded">SIMULATING</span>
                </div>
                <div className="pl-2 border-l-2 border-[#3525CD] space-y-1.5 text-[11px]">
                  <div
                    onClick={() => setDrawerOpen(true)}
                    className="bg-white p-1.5 rounded shadow-xs cursor-pointer hover:bg-[#FAF8FF]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#3525CD]">On Tap "Add to Cart"</span>
                      <span className="material-symbols-outlined text-[13px] text-[#3525CD]">bolt</span>
                    </div>
                    <span className="text-[10px] text-[#464555]">→ Open Overlay: Cart Drawer (Spring 350ms)</span>
                  </div>
                  <div
                    onClick={() => setDrawerDragY(drawerDragY > 0 ? 0 : 148)}
                    className="p-1 rounded hover:bg-white cursor-pointer flex items-center justify-between"
                  >
                    <span>On Drag Down "Header Sheet"</span>
                    <span className="font-mono text-[10px] text-[#777587]">Dismiss</span>
                  </div>
                </div>
              </div>

              <div className="p-1.5 rounded hover:bg-[#F2F3FF] cursor-pointer flex items-center justify-between">
                <span>03 · Cart &amp; Upsell Drawer</span>
                <span className="text-[#777587] font-mono text-[10px]">→ 04</span>
              </div>
              <div className="p-1.5 rounded hover:bg-[#F2F3FF] cursor-pointer flex items-center justify-between">
                <span>04 · Checkout &amp; Apple Pay</span>
                <span className="text-[#777587] font-mono text-[10px]">→ 05</span>
              </div>
              <div className="p-1.5 rounded hover:bg-[#F2F3FF] cursor-pointer flex items-center justify-between">
                <span>05 · Live Tracking</span>
                <span className="text-[#005338] font-mono text-[10px]">End</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#F2F3FF] m-2 rounded-xl space-y-1 text-[11px]">
            <div className="flex items-center justify-between font-bold">
              <span className="flex items-center gap-1 text-[#005338]">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Flow Diagnostics
              </span>
              <span className="text-[#005338] font-mono">100% HEALTHY</span>
            </div>
            <p className="text-[#464555]">Zero dead ends or orphaned screens. Conforms to 44×44px iOS touch target guidelines.</p>
          </div>
        </aside>

        {/* DUAL CENTRAL CANVAS: Noodle Map + Simulator */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* FLOW GRAPH NOODLE MAP (Shows in split or flow-map mode) */}
          {(viewMode === 'split' || viewMode === 'flow-map') && (
            <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} h-full bg-[#EAEDFF]/40 relative overflow-hidden flex flex-col justify-between p-6 select-none border-r border-[#EAEDFF]`}>
              <div className="flex items-center justify-between z-10">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-[#EAEDFF] text-[11px] font-semibold text-[#131B2E]">
                  Flow Visualizer Canvas (Zoom: 74%)
                </div>
              </div>

              {/* Connected Bezier Noodle Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <path
                  d="M 140 220 C 200 220, 180 320, 240 320"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />
                <path
                  d="M 330 360 C 380 360, 360 220, 410 220"
                  fill="none"
                  stroke="#3525CD"
                  strokeWidth="3"
                />
                <circle cx="240" cy="320" r="4" fill="#4F46E5" />
                <circle cx="410" cy="220" r="4" fill="#3525CD" className="animate-ping" />
              </svg>

              {/* Artboard Nodes */}
              <div className="relative w-full h-full my-auto flex items-center justify-around py-4 z-20">
                {/* Node 01 */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[10px] text-[#777587] mb-1">01 · Discovery</span>
                  <div className="w-28 h-52 bg-white rounded-xl shadow-md overflow-hidden p-2 space-y-2 border border-[#EAEDFF]">
                    <div className="w-12 h-2 bg-[#EAEDFF] rounded"></div>
                    <div className="w-full h-10 bg-[#F2F3FF] rounded"></div>
                    <div className="w-full h-8 bg-[#4F46E5]/10 rounded flex items-center justify-center text-[8px] font-bold text-[#4F46E5]">
                      Poke Item
                    </div>
                  </div>
                </div>

                {/* Node 02 Active Node */}
                <div className="flex flex-col items-center scale-105">
                  <span className="font-mono text-[10px] text-[#3525CD] font-bold mb-1">02 · Restaurant Details</span>
                  <div className="w-32 h-60 bg-white rounded-xl shadow-xl overflow-hidden p-2 space-y-2 border-2 border-[#3525CD]">
                    <div className="w-full h-12 bg-cover bg-center rounded" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoTxPBF-TTkph9U5gVLins5NFzeyPbBkHOLBN4DbXrXxmvknG0d6irqriFReFVcc_lYRCli0Km-ZhW6h5VVkdcSs2nnPWFHZhPSvcC5OpWYAKiB-dqJhUzRP0xjT7rdu4RTgbkWTGknMbSEbo8DLm1D2-WLKnzhcyFs8pX8Pua1Y4T7TFxdzr8T5d5i9B3xhtPALyIpluB0Er72AzyqsE9eGE1cMKeJx27gDH9hQRxpQxxhQWw8bDN')" }}></div>
                    <div className="w-16 h-2 bg-[#131B2E] rounded"></div>
                    <button
                      onClick={() => setDrawerOpen(true)}
                      className="w-full py-1 rounded bg-[#4F46E5] text-white text-[8px] font-bold shadow-xs flex items-center justify-center gap-1"
                    >
                      <span>Add — $18.50</span>
                      <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Node 03 Overlay Node */}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-[10px] text-[#777587] mb-1">03 · Cart Overlay</span>
                  <div className="w-28 h-52 bg-white rounded-xl shadow-md overflow-hidden p-2 space-y-2 border border-[#EAEDFF]">
                    <div className="w-full h-14 bg-black/10 rounded-t"></div>
                    <div className="w-full h-20 bg-[#F2F3FF] rounded p-1 flex flex-col justify-between">
                      <span className="text-[8px] font-bold text-[#131B2E]">Your Bag</span>
                      <span className="text-[8px] text-[#005338] font-bold">$20.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="z-10 flex items-center justify-between text-[11px] text-[#777587] bg-white/80 backdrop-blur-md p-2 rounded-lg">
                <span>Click interactive noodles to inspect physics easing</span>
                <span className="font-mono text-[#3525CD] font-bold">Spring: 350ms (ζ = 0.67)</span>
              </div>
            </div>
          )}

          {/* RIGHT CANVAS: iPhone 16 Pro Live Interactive Sandbox */}
          {(viewMode === 'split' || viewMode === 'device-only') && (
            <div className={`${viewMode === 'split' ? 'w-1/2' : 'w-full'} h-full bg-[#FAF8FF] flex flex-col items-center justify-center p-6 relative overflow-hidden`}>
              {/* iPhone 16 Pro Realistic Chassis */}
              <div className="relative w-[360px] h-[730px] bg-black rounded-[52px] p-3 shadow-2xl shadow-indigo-950/20 ring-1 ring-black/10 select-none">
                <div className="w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col relative">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 w-24 h-6 bg-black rounded-full flex items-center justify-between px-2 cursor-pointer shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4EDEA3] animate-pulse"></span>
                      <span className="text-[9px] text-white font-mono">Delivery</span>
                    </div>
                  </div>

                  {/* iOS Status Bar */}
                  <div className="w-full h-10 pt-2 px-6 flex items-center justify-between text-[#131B2E] font-semibold text-[11px] z-30 bg-white/80 backdrop-blur-sm">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px]">signal_cellular_4_bar</span>
                      <span className="material-symbols-outlined text-[14px]">wifi</span>
                      <span className="material-symbols-outlined text-[16px]">battery_full</span>
                    </div>
                  </div>

                  {/* Screen Content: Restaurant Details */}
                  <div className="flex-1 overflow-y-auto flex flex-col justify-between relative pb-16">
                    <div>
                      {/* Hero Image */}
                      <div className="relative w-full h-48 bg-slate-100">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-RtFUo6Wbt2sj6pWux0ZH8Ceoj6PB2_fRtXw4HMxiONU9hpOdc84sIEkiT8lvXobm_-W4uxvbKLHhaBSePvtvakffYJ_bCecOCwJ7vNty51KhgRAMT20_G2hOWHKJW3WdakRzAPLEWZG-8vivC6N6kYjrzgwYSJSSVSvLdnaoR8vpTENloMGkppTeBFDYOtT91H5eDSVXN18tdgc_J48YgLoSh4BrIa-gQoC5e-qSXzMUsTJ1uz3r"
                          alt="Poke bowl hero"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-0 right-0 px-4 flex items-center justify-between">
                          <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-[16px] text-[#131B2E]">Spicy Salmon Poke Bowl</h3>
                            <p className="text-[11px] text-[#777587]">Sashimi grade salmon, ponzu glaze, edamame, avocado.</p>
                          </div>
                          <span className="font-bold text-[15px] text-[#3525CD]">$18.50</span>
                        </div>

                        {/* Customization Options */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-bold text-[#131B2E]">Choose Base Grain</span>
                          <label className="flex items-center justify-between p-2 rounded-lg bg-[#F2F3FF] cursor-pointer">
                            <div className="flex items-center gap-2">
                              <input type="radio" name="base" defaultChecked className="accent-[#3525CD]" />
                              <span className="text-[12px] font-medium text-[#131B2E]">Organic Brown Rice</span>
                            </div>
                            <span className="text-[10px] text-[#777587]">Included</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Sticky Add to Cart Trigger Zone */}
                    <div className="sticky bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md shadow-lg">
                      <div
                        onClick={() => setDrawerOpen(true)}
                        className="w-full py-3 px-4 rounded-xl bg-[#4F46E5] text-white font-bold text-[13px] flex items-center justify-between cursor-pointer hover:bg-[#3525CD] transition-all shadow-md relative"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-mono">1</span>
                          <span>Add to Cart</span>
                        </div>
                        <span className="font-mono">$18.50</span>
                        {/* Hotspot Pulse */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4EDEA3] animate-ping"></div>
                      </div>
                    </div>

                    {/* Interactive Animated Drawer Bottom Sheet Overlay */}
                    {drawerOpen && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex flex-col justify-end transition-all">
                        <div
                          className="w-full bg-white rounded-t-3xl p-4 shadow-2xl space-y-3 border-t border-[#EAEDFF] transition-transform duration-300"
                          style={{ transform: `translateY(${drawerDragY}px)` }}
                        >
                          {/* Pull Bar */}
                          <div
                            onClick={() => setDrawerDragY(drawerDragY === 0 ? 148 : 0)}
                            className="w-12 h-1.5 bg-[#C7C4D8] rounded-full mx-auto cursor-pointer hover:bg-[#3525CD] transition-colors"
                          ></div>

                          <div className="flex items-center justify-between pb-1 border-b border-[#F2F3FF]">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-[15px] text-[#131B2E]">Your Bag</h4>
                              <span className="px-2 py-0.5 rounded-full bg-[#E2E7FF] text-[#3525CD] font-mono text-[10px] font-bold">1 item</span>
                            </div>
                            <button
                              onClick={() => setDrawerOpen(false)}
                              className="w-6 h-6 rounded-full bg-[#F2F3FF] flex items-center justify-center text-[#131B2E] hover:bg-[#EAEDFF]"
                            >
                              <span className="material-symbols-outlined text-[15px]">close</span>
                            </button>
                          </div>

                          <div className="p-2.5 rounded-xl bg-[#F2F3FF] flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs838kxp9rzkqT_NQW_aaBdR0nyJtWQRFS_FZUP14i7nvnX0OdBtGdPuEmg5OXVdwrS7ulVQvJOIdp2n87dI1Y8011kHH7M9CYQOhWib-K8aJExWOQXxCFGpHHMZHkXSKDz07FxmMg4G3ioZpnchJ08N58o27pKiG2pwGuoROXJjxssWAJ9S8_OtDSG-1eIebsbjLGgrkSfss8mC6_iFOEynqog0GgK1GUX2zSdcXI1L5UQVbSItHj')" }}></div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-[12px] text-[#131B2E] truncate">Spicy Salmon Poke Bowl</div>
                              <div className="text-[10px] text-[#777587]">Organic Brown Rice, Truffle Ponzu (+$1.50)</div>
                              <div className="font-bold text-[12px] text-[#3525CD]">$20.00</div>
                            </div>
                          </div>

                          <div className="space-y-1 text-[11px]">
                            <div className="flex justify-between text-[#464555]">
                              <span>Subtotal</span>
                              <span className="font-bold text-[#131B2E] font-mono">$20.00</span>
                            </div>
                            <div className="flex justify-between text-[#464555]">
                              <span>Estimated Delivery</span>
                              <span className="font-bold text-[#005338]">20-30 min</span>
                            </div>
                          </div>

                          <button
                            onClick={() => alert('Proceeding to Checkout with Apple Pay...')}
                            className="w-full py-3 rounded-xl bg-[#4F46E5] text-white font-bold text-[13px] flex items-center justify-between px-4 shadow-md hover:bg-[#3525CD] transition-colors"
                          >
                            <span>Proceed to Checkout</span>
                            <span className="font-mono">$20.00</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* iOS Home Indicator */}
                  <div className="h-5 flex items-center justify-center bg-white flex-shrink-0 z-30">
                    <div className="w-32 h-1 bg-[#131B2E]/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Reset Micro Bar */}
              <div className="mt-4 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md text-[12px]">
                <button
                  onClick={resetDemo}
                  className="flex items-center gap-1 text-[#464555] hover:text-[#3525CD] font-medium"
                >
                  <span className="material-symbols-outlined text-[16px]">replay</span>
                  <span>Reset Demo</span>
                </button>
                <div className="h-3 w-px bg-[#EAEDFF]"></div>
                <button
                  onClick={() => setDrawerDragY(drawerDragY > 0 ? 0 : 148)}
                  className="flex items-center gap-1 text-[#3525CD] font-semibold"
                >
                  <span className="material-symbols-outlined text-[16px]">pan_tool</span>
                  <span>{drawerDragY > 0 ? 'Snap Back to 0px' : 'Simulate Drag +148px'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT DRAWER: High-Density Interaction & Transition Inspector (320px) */}
        <aside className="w-80 flex-shrink-0 bg-white border-l border-[#EAEDFF] flex flex-col justify-between shadow-xs select-none">
          <div className="flex-1 overflow-y-auto">
            {/* Tabs */}
            <div className="flex items-center bg-[#F2F3FF] p-0.5 border-b border-[#EAEDFF]">
              <button
                onClick={() => setActiveTab('interaction')}
                className={`flex-1 py-1.5 text-center text-[12px] font-semibold rounded transition-colors ${
                  activeTab === 'interaction' ? 'bg-white text-[#3525CD] shadow-xs' : 'text-[#464555]'
                }`}
              >
                Interaction Details
              </button>
              <button
                onClick={() => setActiveTab('variables')}
                className={`flex-1 py-1.5 text-center text-[12px] font-semibold rounded transition-colors ${
                  activeTab === 'variables' ? 'bg-white text-[#3525CD] shadow-xs' : 'text-[#464555]'
                }`}
              >
                Variables &amp; State
              </button>
            </div>

            {/* Interaction Summary Banner */}
            <div className="p-3 bg-[#F2F3FF] border-b border-[#EAEDFF] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[12px] text-[#131B2E]">
                  {drawerDragY > 0 ? 'State: Midway Dragging (Gesture Active)' : 'State: Resting Origin (0px)'}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#3525CD] text-white font-mono text-[9px] font-bold">
                  60fps Spring
                </span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-[#EAEDFF] space-y-1 font-mono text-[10px]">
                <div className="flex justify-between">
                  <span>Displacement:</span>
                  <strong className="text-[#3525CD]">+{drawerDragY}px</strong>
                </div>
                <div className="flex justify-between">
                  <span>Spring Restitution:</span>
                  <strong className="text-[#005338]">350ms duration</strong>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-4 space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#777587]">
                  TRIGGER EVENT
                </label>
                <div className="flex items-center justify-between bg-[#F2F3FF] px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#131B2E]">
                    <span className="material-symbols-outlined text-[16px] text-[#3525CD]">touch_app</span>
                    <span>On Tap / Click</span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-[#777587]">expand_more</span>
                </div>
              </div>

              {/* Physics Sliders */}
              <div className="space-y-2 pt-2 border-t border-[#EAEDFF]">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#777587]">
                    ANIMATION ENGINE
                  </label>
                  <span className="font-mono text-[11px] text-[#3525CD] font-bold">Underdamped Spring</span>
                </div>

                <div className="space-y-2.5 font-mono text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#464555]">STIFFNESS (k)</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="100"
                        max="600"
                        value={stiffness}
                        onChange={e => setStiffness(Number(e.target.value))}
                        className="w-24 accent-[#3525CD] cursor-pointer"
                      />
                      <span className="w-8 text-right font-bold text-[#131B2E]">{stiffness}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#464555]">DAMPING (c)</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="10"
                        max="50"
                        value={damping}
                        onChange={e => setDamping(Number(e.target.value))}
                        className="w-24 accent-[#3525CD] cursor-pointer"
                      />
                      <span className="w-8 text-right font-bold text-[#131B2E]">{damping}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#464555]">RESISTANCE</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.01"
                        value={rubberbandFactor}
                        onChange={e => setRubberbandFactor(Number(e.target.value))}
                        className="w-24 accent-[#3525CD] cursor-pointer"
                      />
                      <span className="w-8 text-right font-bold text-[#3525CD]">{rubberbandFactor}x</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Interaction Assistant Suggestion */}
              <div className="p-3 rounded-xl bg-[#E2DFFF]/40 border border-[#3525CD]/20 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[12px] text-[#3525CD] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
                    AI Interaction Suggestion
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-[#3525CD] text-white text-[9px] font-bold">
                    APPLIED
                  </span>
                </div>
                <p className="text-[11px] text-[#131B2E] leading-snug">
                  Elastic snap recoil physics tuned with underdamped restitution factor (ζ = 0.67, 350ms duration) mimics authentic iOS UIKit / SwiftUI sheet presentation.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-[#EAEDFF] bg-white flex items-center justify-between">
            <span className="text-[11px] text-[#005338] font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              Xcode &amp; React Native Validated
            </span>
            <button
              onClick={() => setShowExportModal(true)}
              className="px-3 py-1 rounded bg-[#E2E7FF] text-[#3525CD] text-[11px] font-bold hover:bg-[#DAE2FD]"
            >
              Copy JSON
            </button>
          </div>
        </aside>
      </div>

      {/* Export Motion Tokens & Physics Code Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
          <div className="w-full max-w-[920px] bg-white rounded-2xl shadow-2xl border border-[#EAEDFF] overflow-hidden flex flex-col">
            <div className="px-6 py-3 bg-white border-b border-[#EAEDFF] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3525CD]/10 text-[#3525CD] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">token</span>
                </div>
                <div>
                  <h3 className="font-bold text-[15px] text-[#131B2E]">Export Motion &amp; Animation Token Package</h3>
                  <p className="text-[11px] text-[#777587]">W3C DTCG 2025.1 Spec • Synchronized physics constants and gesture tokens</p>
                </div>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="w-8 h-8 rounded-full hover:bg-[#F2F3FF] flex items-center justify-center text-[#777587]"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Code Tabs */}
            <div className="px-6 py-2 bg-[#F2F3FF] border-b border-[#EAEDFF] flex items-center gap-2">
              <button
                onClick={() => setExportCodeTab('tailwind')}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-colors ${
                  exportCodeTab === 'tailwind' ? 'bg-white text-[#3525CD] shadow-xs' : 'text-[#464555]'
                }`}
              >
                CSS Variables / Tailwind
              </button>
              <button
                onClick={() => setExportCodeTab('reanimated')}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-colors ${
                  exportCodeTab === 'reanimated' ? 'bg-white text-[#3525CD] shadow-xs' : 'text-[#464555]'
                }`}
              >
                React Native / Reanimated 3
              </button>
              <button
                onClick={() => setExportCodeTab('swift')}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-colors ${
                  exportCodeTab === 'swift' ? 'bg-white text-[#3525CD] shadow-xs' : 'text-[#464555]'
                }`}
              >
                Swift / SwiftUI
              </button>
              <button
                onClick={() => setExportCodeTab('json')}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-colors ${
                  exportCodeTab === 'json' ? 'bg-white text-[#3525CD] shadow-xs' : 'text-[#464555]'
                }`}
              >
                JSON DTCG
              </button>
            </div>

            {/* Code Editor Preview */}
            <div className="grid grid-cols-12 max-h-[440px] overflow-hidden">
              <div className="col-span-8 bg-neutral-900 p-4 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-300">
                {exportCodeTab === 'tailwind' && (
                  <pre className="text-emerald-400">
{`/* 1. CSS Custom Properties Root Definitions */
:root {
  --spring-sheet-mass: 1.0;
  --spring-sheet-stiffness: ${stiffness}; /* k = ${stiffness} N/m */
  --spring-sheet-damping: ${damping};
  --ease-emphasized-decel: cubic-bezier(0.05, 0.7, 0.1, 1.0);
  --duration-settle: 350ms;
  --drag-rubberband: ${rubberbandFactor};
}

/* 2. Tailwind Plugin Extended Theme */
export default {
  theme: {
    extend: {
      transitionTimingFunction: {
        'emphasized-decel': 'var(--ease-emphasized-decel)',
      },
      animation: {
        'sheet-snap-recoil': 'sheetRecoil 350ms ease-out forwards',
      },
    },
  },
};`}
                  </pre>
                )}
                {exportCodeTab === 'reanimated' && (
                  <pre className="text-blue-300">
{`import { useSharedValue, withSpring } from 'react-native-reanimated';

export const SPRING_CONFIG = {
  damping: ${damping},
  stiffness: ${stiffness},
  mass: 1.0,
  overshootClamping: false,
};`}
                  </pre>
                )}
                {exportCodeTab === 'swift' && (
                  <pre className="text-amber-300">
{`import SwiftUI

extension Animation {
  static let foodflowSpring = Animation.interpolatingSpring(
    mass: 1.0,
    stiffness: ${stiffness}.0,
    damping: ${damping}.0
  )
}`}
                  </pre>
                )}
                {exportCodeTab === 'json' && (
                  <pre className="text-purple-300">
{JSON.stringify({
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "motion": {
    "spring": {
      "stiffness": { "value": stiffness },
      "damping": { "value": damping },
      "rubberband": { "value": rubberbandFactor }
    }
  }
}, null, 2)}
                  </pre>
                )}
              </div>

              <div className="col-span-4 bg-[#F2F3FF] p-4 border-l border-[#EAEDFF] space-y-3 font-mono text-[11px]">
                <span className="font-bold text-[10px] text-[#777587] uppercase tracking-wider">
                  PACKAGE METADATA
                </span>
                <div className="bg-white p-2.5 rounded-lg border border-[#EAEDFF] space-y-1">
                  <div>Version: <strong className="text-[#131B2E]">v2.4.0-rc1</strong></div>
                  <div>Audit: <strong className="text-[#005338]">100% DTCG Spec</strong></div>
                  <div>Platform: <strong className="text-[#3525CD]">iOS 18 / Web / React Native</strong></div>
                </div>
              </div>
            </div>

            <div className="px-6 py-3 bg-white border-t border-[#EAEDFF] flex items-center justify-between">
              <button
                onClick={() => alert('Download package bundle triggered')}
                className="px-3 py-1.5 rounded-lg bg-[#F2F3FF] hover:bg-[#EAEDFF] text-[12px] font-semibold flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">folder_zip</span>
                <span>Download Plugin (.ts)</span>
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="px-3 py-1.5 rounded-lg text-[#464555] hover:text-[#131B2E] text-[12px] font-medium"
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText?.(String(stiffness));
                    alert('Copied physics configuration to clipboard!');
                  }}
                  className="px-4 py-1.5 rounded-lg bg-[#3525CD] text-white hover:bg-[#4F46E5] text-[12px] font-bold shadow-xs flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>Copy Configuration</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
