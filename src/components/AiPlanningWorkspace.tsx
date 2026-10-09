import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const AiPlanningWorkspace: React.FC = () => {
  const { document: doc, setActiveView } = useDocument();
  const [isPaused, setIsPaused] = useState(false);
  const [activeEdgeCaseResolved, setActiveEdgeCaseResolved] = useState(false);

  const { projectBrief, competitiveIntelligence, screenNodes, agentStreamLogs } = doc.aiPlanning;

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-48px)] bg-[#FAF8FF] select-none text-[#131B2E]">
      {/* Top Generation HUD Bar */}
      <div className="w-full bg-white px-6 py-4 shadow-sm border-b border-[#EAEDFF]">
        <div className="flex flex-col gap-4 max-w-[1400px] mx-auto">
          {/* Breadcrumb & Global Action Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-1 text-[#464555] text-[13px]">
                <span className="hover:text-[#3525CD] cursor-pointer" onClick={() => setActiveView('design-editor')}>
                  Projects
                </span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="font-medium text-[#131B2E]">FoodFlow Delivery</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="px-2 py-0.5 rounded bg-[#EAEDFF] text-[#3525CD] font-semibold text-[12px]">
                  AI Generation &amp; Planning
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E2DFFF] text-[#3525CD] text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#3525CD] animate-ping"></span>
                Phase 4 of 5: Hi-Fi Component Assembly
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#4EDEA3] text-[#002113] font-bold">
                78% Complete
              </span>
            </div>

            {/* Pipeline Action CTAs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-[12px] font-medium transition-colors ${
                  isPaused ? 'bg-[#E2DFFF] text-[#3525CD]' : 'bg-[#F2F3FF] text-[#131B2E] hover:bg-[#EAEDFF]'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {isPaused ? 'play_circle' : 'pause_circle'}
                </span>
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <button
                onClick={() => alert('Canceling current generation phase...')}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#F2F3FF] text-[#BA1A1A] hover:bg-[#FFDAD6] text-[12px] font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">cancel</span>
                <span>Cancel</span>
              </button>

              <button
                onClick={() => alert('Exporting PRD, tokens & wireflow spec...')}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#F2F3FF] text-[#131B2E] hover:bg-[#EAEDFF] text-[12px] font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">download</span>
                <span>Export Spec</span>
              </button>

              <button
                onClick={() => setActiveView('design-editor')}
                className="flex items-center gap-1 px-4 py-1.5 rounded bg-[#4F46E5] text-white text-[12px] font-semibold shadow-sm hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-[15px]">space_dashboard</span>
                <span>Review &amp; Open in Canvas</span>
              </button>
            </div>
          </div>

          {/* Stepper Stages Progression */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <div className="flex items-center justify-between p-2 rounded bg-[#F2F3FF]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#005338] font-bold">check_circle</span>
                <span className="text-[11px] font-medium text-[#131B2E]">1. Brief &amp; PRD</span>
              </div>
              <span className="font-mono text-[11px] text-[#005338] font-bold">100%</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-[#F2F3FF]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#005338] font-bold">check_circle</span>
                <span className="text-[11px] font-medium text-[#131B2E]">2. Market Research</span>
              </div>
              <span className="font-mono text-[11px] text-[#005338] font-bold">100%</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-[#F2F3FF]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#005338] font-bold">check_circle</span>
                <span className="text-[11px] font-medium text-[#131B2E]">3. Sitemap &amp; IA</span>
              </div>
              <span className="font-mono text-[11px] text-[#005338] font-bold">100%</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-[#F2F3FF]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#005338] font-bold">check_circle</span>
                <span className="text-[11px] font-medium text-[#131B2E]">4. Wireflows</span>
              </div>
              <span className="font-mono text-[11px] text-[#005338] font-bold">100%</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-[#E2DFFF] shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#3525CD] animate-spin">cyclone</span>
                <span className="text-[11px] font-semibold text-[#3525CD]">5. Token &amp; Hi-Fi</span>
              </div>
              <span className="font-mono text-[11px] text-[#3525CD] font-bold">78%</span>
            </div>
          </div>

          {/* Telemetry Chips */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[#464555] font-mono text-[11px]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#005338]"></span>
                Latency: <strong className="text-[#131B2E]">42ms/token</strong>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3525CD]"></span>
                Tokens Compiled: <strong className="text-[#131B2E]">48/52</strong>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4953BC]"></span>
                Screens Generated: <strong className="text-[#131B2E]">6/8</strong>
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#464555]">
              <span className="text-[11px]">Active Agents:</span>
              <span className="px-1.5 py-0.5 rounded bg-[#E2E7FF] text-[#131B2E]">Research</span>
              <span className="px-1.5 py-0.5 rounded bg-[#E2E7FF] text-[#131B2E]">IA Node</span>
              <span className="px-1.5 py-0.5 rounded bg-[#E2E7FF] text-[#131B2E]">Design System</span>
              <span className="px-1.5 py-0.5 rounded bg-[#E2E7FF] text-[#3525CD] font-bold">Synthesizer (Live)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 3-Column Studio Workspace Grid */}
      <div className="w-full max-w-[1400px] mx-auto p-6 grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Brief, Research Insights & Design Tokens */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          {/* Synthesized Product Brief */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#3525CD]">description</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Synthesized Brief</h2>
              </div>
              <span className="font-mono text-[10px] text-[#005338] font-bold">{projectBrief.version}</span>
            </div>
            <p className="text-[12px] text-[#464555] mb-3 leading-relaxed">
              {projectBrief.summary}
            </p>
            <div className="space-y-1.5 text-[12px]">
              <div className="p-2 rounded bg-[#F2F3FF]">
                <p className="font-semibold text-[#131B2E] text-[11px]">Primary Target Persona</p>
                <p className="text-[#464555] text-[11px]">{projectBrief.targetPersona}</p>
              </div>
              <div className="p-2 rounded bg-[#F2F3FF]">
                <p className="font-semibold text-[#131B2E] text-[11px]">Core JTBD (Job To Be Done)</p>
                <p className="text-[#464555] text-[11px]">{projectBrief.coreJTBD}</p>
              </div>
              <div className="p-2 rounded bg-[#F2F3FF]">
                <p className="font-semibold text-[#131B2E] text-[11px]">Key Differentiator</p>
                <p className="text-[#464555] text-[11px]">{projectBrief.keyDifferentiator}</p>
              </div>
            </div>
          </div>

          {/* Autonomous Research & Verified Benchmarks */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#4953BC]">analytics</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Competitive Intelligence</h2>
              </div>
              <span className="text-[11px] text-[#777587]">3 Audits</span>
            </div>
            <div className="space-y-2">
              {competitiveIntelligence.map((item, idx) => (
                <div key={idx} className="rounded p-2 bg-[#F2F3FF]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-[#131B2E]">{item.title}</span>
                    <span className={`font-mono text-[11px] font-bold ${item.metricType === 'positive' ? 'text-[#005338]' : 'text-[#3525CD]'}`}>
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#464555] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design System & Token Compilation */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#4F46E5]">palette</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Bound Tokens</h2>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#4EDEA3] text-[#002113] font-bold">
                Auto-Bound
              </span>
            </div>
            <div className="space-y-1.5 mb-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#464555] font-mono">color-primary-electric</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-[#4F46E5]"></span>
                  <span className="font-mono text-[#131B2E] font-semibold">#4F46E5</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#464555] font-mono">color-accent-mint</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-[#10B981]"></span>
                  <span className="font-mono text-[#131B2E] font-semibold">#10B981</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#464555] font-mono">color-surface-base</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-white shadow-xs border border-[#C7C4D8]"></span>
                  <span className="font-mono text-[#131B2E] font-semibold">#FAF8FF</span>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-[#EAEDFF] space-y-1 text-[11px]">
              <div className="flex justify-between text-[#464555]">
                <span>Font Families</span>
                <strong className="text-[#131B2E]">Inter Display / Inter UI</strong>
              </div>
              <div className="flex justify-between text-[#464555]">
                <span>Grid Baseline</span>
                <strong className="text-[#131B2E]">8pt soft / 4pt subgrid</strong>
              </div>
              <div className="flex justify-between text-[#464555]">
                <span>Corner Radius</span>
                <strong className="text-[#131B2E]">0.5rem (Artboard base)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Screen Architecture, Wireflows & Live Agent Stream */}
        <div className="xl:col-span-5 flex flex-col gap-4">
          {/* Screen Architecture Map */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#3525CD]">account_tree</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Screen Architecture Map</h2>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#EAEDFF] font-mono text-[11px] text-[#131B2E]">
                8 Nodes
              </span>
            </div>
            <div className="bg-[#FAF8FF] p-3 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="p-2 rounded bg-white shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">01</span>
                    <span className="material-symbols-outlined text-[14px] text-[#005338]">check_circle</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#131B2E] truncate">Welcome &amp; Onboard</p>
                  <span className="text-[10px] text-[#777587]">3 Variants</span>
                </div>

                <div className="p-2 rounded bg-white shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">02</span>
                    <span className="material-symbols-outlined text-[14px] text-[#005338]">check_circle</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#131B2E] truncate">Auth / Quick Sign-In</p>
                  <span className="text-[10px] text-[#777587]">Biometrics</span>
                </div>

                <div className="p-2 rounded bg-white shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">03</span>
                    <span className="material-symbols-outlined text-[14px] text-[#005338]">check_circle</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#131B2E] truncate">Restaurant Feed</p>
                  <span className="text-[10px] text-[#777587]">Geo-aware</span>
                </div>

                <div className="p-2 rounded bg-white shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">04</span>
                    <span className="material-symbols-outlined text-[14px] text-[#005338]">check_circle</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#131B2E] truncate">Menu &amp; Builder</p>
                  <span className="text-[10px] text-[#777587]">Customizer</span>
                </div>

                <div className="p-2 rounded bg-white shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">05</span>
                    <span className="material-symbols-outlined text-[14px] text-[#005338]">check_circle</span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#131B2E] truncate">Cart Drawer</p>
                  <span className="text-[10px] text-[#777587]">Upsell row</span>
                </div>

                <div className="p-2 rounded bg-[#E2DFFF] shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#3525CD] font-bold">06</span>
                    <span className="material-symbols-outlined text-[14px] text-[#3525CD] animate-spin">autorenew</span>
                  </div>
                  <p className="text-[11px] font-bold text-[#3525CD] truncate">Checkout &amp; Pay</p>
                  <span className="text-[10px] text-[#3525CD] font-semibold">Compiling...</span>
                </div>

                <div className="p-2 rounded bg-[#EAEDFF] shadow-xs opacity-60 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">07</span>
                    <span className="material-symbols-outlined text-[14px] text-[#777587]">hourglass_empty</span>
                  </div>
                  <p className="text-[11px] font-medium text-[#131B2E] truncate">Live Tracking</p>
                  <span className="text-[10px] text-[#777587]">Queued</span>
                </div>

                <div className="p-2 rounded bg-[#EAEDFF] shadow-xs opacity-60 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#777587]">08</span>
                    <span className="material-symbols-outlined text-[14px] text-[#777587]">hourglass_empty</span>
                  </div>
                  <p className="text-[11px] font-medium text-[#131B2E] truncate">Account Profile</p>
                  <span className="text-[10px] text-[#777587]">Queued</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Wireflow Transitions */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#4F46E5]">alt_route</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Interactive Wireflow Transitions</h2>
              </div>
              <div className="flex items-center gap-1 bg-[#F2F3FF] px-2 py-0.5 rounded">
                <span className="font-mono text-[11px] text-[#131B2E]">100%</span>
              </div>
            </div>

            <div className="p-2 rounded bg-[#FAF8FF] relative overflow-hidden">
              <svg className="w-full h-24" fill="none" viewBox="0 0 540 90">
                <path d="M 50 45 L 170 45" stroke="#006E4B" strokeDasharray="3 3" strokeWidth="2"></path>
                <path d="M 170 45 L 300 45" stroke="#006E4B" strokeWidth="2"></path>
                <path d="M 300 45 L 430 45" stroke="#4F46E5" strokeDasharray="4 4" strokeWidth="2"></path>
                <circle cx="110" cy="45" r="4" fill="#006E4B"></circle>
                <circle cx="235" cy="45" r="4" fill="#006E4B"></circle>
                <circle cx="365" cy="45" r="4" fill="#3525CD" className="animate-pulse"></circle>

                <rect x="10" y="25" width="80" height="40" rx="4" fill="white" stroke="#EAEDFF"></rect>
                <text x="50" y="45" textAnchor="middle" className="text-[10px] font-semibold" fill="#131B2E">Feed Tap</text>
                <text x="50" y="57" textAnchor="middle" className="text-[8px]" fill="#777587">onClick</text>

                <rect x="130" y="25" width="80" height="40" rx="4" fill="white" stroke="#EAEDFF"></rect>
                <text x="170" y="45" textAnchor="middle" className="text-[10px] font-semibold" fill="#131B2E">Item Detail</text>
                <text x="170" y="57" textAnchor="middle" className="text-[8px]" fill="#777587">Slide Sheet</text>

                <rect x="260" y="25" width="80" height="40" rx="4" fill="white" stroke="#EAEDFF"></rect>
                <text x="300" y="45" textAnchor="middle" className="text-[10px] font-semibold" fill="#131B2E">Cart Drawer</text>
                <text x="300" y="57" textAnchor="middle" className="text-[8px]" fill="#777587">Bottom Sheet</text>

                <rect x="390" y="25" width="80" height="40" rx="4" fill="#E2DFFF" stroke="#3525CD"></rect>
                <text x="430" y="45" textAnchor="middle" className="text-[10px] font-bold" fill="#3525CD">Checkout</text>
                <text x="430" y="57" textAnchor="middle" className="text-[8px]" fill="#3525CD">Synthesizing</text>
              </svg>
              <div className="mt-1 flex items-center justify-between text-[11px] text-[#464555]">
                <span>Primary Transition: <strong className="text-[#131B2E] font-mono">Spring (350ms, mass: 1, damp: 28)</strong></span>
                <span className="text-[#005338] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005338]"></span>
                  Flow verified without orphans
                </span>
              </div>
            </div>
          </div>

          {/* Autonomous Agent Terminal Stream */}
          <div className="rounded-xl bg-[#283044] text-[#EEF0FF] p-4 shadow-sm font-mono border border-slate-700">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#4EDEA3]">terminal</span>
                <span className="text-[11px] font-bold tracking-wider text-slate-300">AUTONOMOUS AGENT STREAM</span>
              </div>
              <span className="text-[10px] text-slate-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4EDEA3] animate-ping"></span>
                LIVE 42ms
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] leading-relaxed max-h-40 overflow-y-auto">
              {agentStreamLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-300">
                  <span className="text-[#E0E0FF] font-bold">[{log.timestamp}]</span>
                  <span className="text-[#4EDEA3]">[{log.agent}]</span>
                  <span>{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Artboard Synthesis Matrix & Quality Guard */}
        <div className="xl:col-span-4 flex flex-col gap-4">
          {/* Artboard Synthesis Matrix (8 Artboards) */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#3525CD]">view_quilt</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Artboard Synthesis Matrix</h2>
              </div>
              <span className="font-mono text-[11px] text-[#131B2E] font-semibold">6 / 8 Generated</span>
            </div>
            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
              {screenNodes.map(screen => (
                <div
                  key={screen.id}
                  onClick={() => setActiveView('design-editor')}
                  className={`p-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                    screen.status === 'compiling'
                      ? 'bg-[#E2DFFF] border border-[#3525CD]/30'
                      : 'bg-[#F2F3FF] hover:bg-[#EAEDFF]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-white shadow-xs">
                      {screen.thumbUrl ? (
                        <img
                          src={screen.thumbUrl}
                          alt={screen.thumbAlt}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#EAEDFF] flex items-center justify-center text-[#3525CD]">
                          <span className="material-symbols-outlined text-[18px]">
                            {screen.status === 'compiling' ? 'autorenew' : 'hourglass_empty'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-[#131B2E] truncate">{screen.title}</p>
                      <p className="text-[11px] text-[#777587]">
                        {screen.status === 'ready'
                          ? `${screen.layersCount} layers • ${screen.componentsCount} components`
                          : screen.status === 'compiling'
                          ? 'Synthesizing payment gateways...'
                          : 'Queued in pipeline'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {screen.status === 'ready' && (
                      <span className="px-2 py-0.5 rounded bg-[#4EDEA3] text-[#002113] font-mono text-[10px] font-bold">
                        100% Ready
                      </span>
                    )}
                    {screen.status === 'compiling' && (
                      <span className="px-2 py-0.5 rounded bg-[#3525CD] text-white font-mono text-[10px] font-bold">
                        85% Live
                      </span>
                    )}
                    {screen.status === 'queued' && (
                      <span className="font-mono text-[10px] text-[#777587]">~8s ETA</span>
                    )}
                    <span className="material-symbols-outlined text-[16px] text-[#777587] hover:text-[#3525CD]">
                      visibility
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Autonomous Quality Guard & Edge Case Resolver */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-[#EAEDFF]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px] text-[#005338]">verified_user</span>
                <h2 className="text-[14px] font-bold text-[#131B2E]">Autonomous Quality Guard</h2>
              </div>
              <span className="font-mono text-[11px] text-[#005338] font-bold">98.4% Score</span>
            </div>

            <div className="p-3 rounded-lg bg-[#F2F3FF] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#131B2E] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-[#4953BC]">tips_and_updates</span>
                  Detected Edge Case
                </span>
                <span className="font-mono text-[10px] text-[#777587]">Checkout Flow</span>
              </div>
              <p className="text-[11px] text-[#464555] leading-relaxed">
                Guest checkout without phone verification detected. Auto-resolving with SMS OTP step.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setActiveEdgeCaseResolved(true)}
                  className={`px-3 py-1 rounded text-white text-[11px] font-semibold transition-colors ${
                    activeEdgeCaseResolved ? 'bg-[#005338]' : 'bg-[#4F46E5] hover:opacity-90'
                  }`}
                >
                  {activeEdgeCaseResolved ? 'Resolved ✓' : 'Accept Solution'}
                </button>
                <button
                  onClick={() => alert('Customizing edge case parameters...')}
                  className="px-3 py-1 rounded bg-white text-[#131B2E] text-[11px] hover:bg-[#EAEDFF] transition-colors border border-[#C7C4D8]"
                >
                  Customize
                </button>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#EAEDFF] flex items-center justify-between text-[11px] text-[#464555]">
              <span>Accessibility: <strong className="text-[#131B2E]">WCAG AAA</strong></span>
              <span>Tokens: <strong className="text-[#005338]">0 Missing</strong></span>
              <span>Auto-Layout: <strong className="text-[#131B2E]">100%</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
