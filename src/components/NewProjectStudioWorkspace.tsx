import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const NewProjectStudioWorkspace: React.FC = () => {
  const { setActiveView, applyAiSuggestion } = useDocument();
  const [promptText, setPromptText] = useState(
    'An on-demand food delivery app named FoodFlow with real-time courier tracking, allergy-safe menu filtering, dynamic bowl builder, and unified checkout drawer with instant Apple Pay...'
  );
  const [selectedFormat, setSelectedFormat] = useState<'mobile' | 'saas' | 'ecommerce' | 'landing'>('mobile');
  const [selectedMood, setSelectedMood] = useState<'minimal' | 'electric' | 'dark' | 'fintech'>('minimal');
  const [selectedDevicePreset, setSelectedDevicePreset] = useState('iPhone 16 Pro (393 × 852)');
  const [interactivePlanningMode, setInteractivePlanningMode] = useState(true);
  const [isOrchestrating, setIsOrchestrating] = useState(false);
  const [orchestratingStep, setOrchestratingStep] = useState(1);

  const startGeneration = () => {
    setIsOrchestrating(true);
    setOrchestratingStep(1);
    setTimeout(() => setOrchestratingStep(2), 700);
    setTimeout(() => setOrchestratingStep(3), 1400);
    setTimeout(() => {
      setIsOrchestrating(false);
      applyAiSuggestion(promptText);
      setActiveView('design-editor');
    }, 2200);
  };

  return (
    <div className="relative w-full px-6 py-6 flex flex-col gap-6 max-w-[1240px] mx-auto select-none text-[#131B2E]">
      {/* Top Breadcrumb & Status Ribbon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#464555] text-[12px]">
          <span onClick={() => setActiveView('design-editor')} className="hover:text-[#3525CD] cursor-pointer">
            Projects
          </span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-[#3525CD] cursor-pointer">Autonomous Suite</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#131B2E] font-semibold">New Project Initiation</span>
        </div>
        <div className="flex items-center gap-2 bg-[#E2E7FF] px-3 py-1 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EDEA3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005338]"></span>
          </span>
          <span className="font-mono text-[11px] uppercase text-[#131B2E] font-bold tracking-wider">
            Engine: Neural Design Graph v2.4
          </span>
        </div>
      </div>

      {/* Onboarding Header Banner */}
      <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-[#EAEDFF]">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#E2DFFF]/40 via-[#4D44E3]/10 to-transparent blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#E2DFFF] text-[#3525CD] text-[11px] uppercase font-bold tracking-wider">
                New Project Studio
              </span>
              <span className="text-[11px] text-[#464555]">Setup Phase: Intent &amp; Tokens</span>
            </div>
            <h1 className="text-[22px] font-bold text-[#131B2E] tracking-tight">
              New Project with AI Designer
            </h1>
            <p className="text-[13px] text-[#464555] leading-relaxed">
              Describe your product vision in natural language. Figma AI will research, architect flows, construct design systems, and generate production-ready editable vector frames.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 bg-[#F2F3FF] p-2.5 rounded-lg border border-[#EAEDFF]">
            <div className="w-10 h-10 rounded bg-[#4F46E5] flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#131B2E]">Auto-Layout 5.0 Synced</span>
              <span className="text-[11px] text-[#464555]">Variables, Design Tokens &amp; React Nodes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Central Generative Prompt Input Module */}
      <section className="rounded-xl bg-white p-6 shadow-sm border border-[#EAEDFF] flex flex-col gap-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#3525CD] text-[20px]">psychology</span>
            <h2 className="text-[16px] font-bold text-[#131B2E]">What do you want to build?</h2>
          </div>
          <div className="flex items-center gap-1 text-[#464555] text-[11px]">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            <span>Context Level: Deep Product Modeling</span>
          </div>
        </div>

        {/* Textarea Shell */}
        <div className="relative rounded-lg bg-[#F2F3FF] p-3 transition-all focus-within:bg-white focus-within:shadow-md border border-[#EAEDFF]">
          <textarea
            rows={4}
            value={promptText}
            onChange={e => setPromptText(e.target.value)}
            className="w-full bg-transparent text-[14px] text-[#131B2E] placeholder-[#777587] focus:outline-none resize-none leading-relaxed"
            placeholder="Describe your product vision in detail..."
          />
          <div className="mt-2 pt-1 flex items-center justify-between border-t border-[#EAEDFF]/60">
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('Brand mockups PDF attachment')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#E2E7FF] text-[#131B2E] text-[11px] font-medium hover:bg-[#DAE2FD]"
              >
                <span className="material-symbols-outlined text-[15px] text-[#3525CD]">attachment</span>
                <span>Attach Mockups / Brand PDF</span>
              </button>
              <button
                onClick={() => alert('Voice dictation active')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#E2E7FF] text-[#131B2E] text-[11px] font-medium hover:bg-[#DAE2FD]"
              >
                <span className="material-symbols-outlined text-[15px] text-[#3525CD]">mic</span>
                <span>Voice Dictation</span>
              </button>
              <button
                onClick={() => alert('Token palette extraction completed')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#E2E7FF] text-[#131B2E] text-[11px] font-medium hover:bg-[#DAE2FD]"
              >
                <span className="material-symbols-outlined text-[15px] text-[#005338]">palette</span>
                <span>Extract Token Palette</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#777587]">{promptText.length} / 1200 chars</span>
              <button
                onClick={() =>
                  setPromptText(
                    promptText +
                      ' Include dynamic allergy filtration drawer, real-time courier geo-tracking with map, and custom bowl builder.'
                  )
                }
                className="flex items-center gap-1 px-3 py-1 rounded bg-[#3525CD] text-white text-[12px] font-semibold hover:bg-[#4F46E5] shadow-xs"
              >
                <span className="material-symbols-outlined text-[15px]">magic_button</span>
                <span>Enhance Prompt</span>
              </button>
            </div>
          </div>
        </div>

        {/* Blueprints Chips */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] uppercase tracking-wider text-[#777587] font-semibold">
            Or start with proven autonomous blueprints:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'FoodFlow Delivery Mobile App', color: 'bg-[#3525CD]', text: 'Design FoodFlow Delivery Mobile App with live courier tracking map, nutrition filter drawer, and single-tap checkout.' },
              { label: 'SaaS Analytics & Billing Dashboard', color: 'bg-[#4953BC]', text: 'SaaS Analytics & Billing Dashboard with MRR forecasting, churn cohorts, seat management, and modular KPI bento layout.' },
              { label: 'B2B AI Workflow Automation Tool', color: 'bg-[#005338]', text: 'B2B AI Workflow Automation Tool featuring canvas graph orchestration, agent memory nodes, and telemetry inspector.' },
              { label: 'Travel & Boutique Hotel Booking', color: 'bg-[#4F46E5]', text: 'Luxury Boutique Hotel Booking & Concierge app with 3D room preview, dates stepper, and private driver coordination.' },
              { label: 'Health & Habit Tracker with Widgets', color: 'bg-[#4EDEA3]', text: 'Health & Habit Tracker mobile application featuring streak rings, hydration tracker, Apple Watch complications, and lockscreen widgets.' },
            ].map(bp => (
              <button
                key={bp.label}
                onClick={() => setPromptText(bp.text)}
                className="px-3 py-1 rounded-full bg-[#F2F3FF] hover:bg-[#E2E7FF] text-[#131B2E] text-[11px] font-medium transition-all flex items-center gap-1.5 border border-[#EAEDFF]"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${bp.color}`}></span>
                <span>{bp.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Format & Aesthetic Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Format & Presets (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="rounded-xl bg-white p-5 shadow-sm border border-[#EAEDFF] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#3525CD]">layers</span>
                <span className="text-[15px] font-bold text-[#131B2E]">1. Product Format</span>
              </div>
              <span className="text-[11px] text-[#777587]">Select primary design target</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'mobile', title: 'Mobile Application', desc: 'iOS Human Interface & Android Material 3 mobile native viewports.', tag1: 'iOS 18', tag2: 'Safe Area', icon: 'smartphone' },
                { id: 'saas', title: 'Responsive Web / SaaS', desc: 'Desktop dashboards, multi-pane navigation, and data density views.', tag1: '1440px Grid', tag2: 'Data Tables', icon: 'dashboard' },
                { id: 'ecommerce', title: 'E-Commerce Storefront', desc: 'Curated catalog, sticky cart bars, conversion reviews & order summary.', tag1: 'Stripe/Pay', tag2: 'SKU Drawer', icon: 'storefront' },
                { id: 'landing', title: 'Marketing Landing Page', desc: 'Editorial typography, hero conversion blocks, social proof & pricing.', tag1: 'SEO Head', tag2: 'CTA Bento', icon: 'web' },
              ].map(fmt => (
                <div
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id as any)}
                  className={`p-3 rounded-xl cursor-pointer transition-all border ${
                    selectedFormat === fmt.id
                      ? 'bg-[#E2E7FF] border-[#3525CD] shadow-sm'
                      : 'bg-[#F2F3FF] border-[#EAEDFF] hover:bg-[#EAEDFF]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-8 h-8 rounded bg-[#3525CD] text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">{fmt.icon}</span>
                    </div>
                    {selectedFormat === fmt.id && (
                      <span className="material-symbols-outlined text-[#3525CD] text-[18px]">check_circle</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[13px] text-[#131B2E] mt-2">{fmt.title}</h3>
                  <p className="text-[11px] text-[#464555] mt-0.5">{fmt.desc}</p>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-white text-[#3525CD]">{fmt.tag1}</span>
                    <span className="px-1.5 py-0.5 rounded bg-white text-[#777587]">{fmt.tag2}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Presets */}
            <div className="pt-2 border-t border-[#EAEDFF] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#777587]">
                Device Viewport Presets:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  'iPhone 16 Pro (393 × 852)',
                  'iPad Pro 11″ (834 × 1194)',
                  'Desktop (1440 × 900)',
                  'Responsive Frame Set',
                ].map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedDevicePreset(p)}
                    className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                      selectedDevicePreset === p
                        ? 'bg-[#3525CD] text-white font-bold shadow-xs'
                        : 'bg-[#F2F3FF] text-[#131B2E] hover:bg-[#EAEDFF]'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Aesthetic & Tokens (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="rounded-xl bg-white p-5 shadow-sm border border-[#EAEDFF] space-y-4 h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#3525CD]">palette</span>
                <span className="text-[15px] font-bold text-[#131B2E]">2. Aesthetic &amp; Tokens</span>
              </div>
              <span className="text-[11px] text-[#005338] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Auto-Tokens
              </span>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-medium text-[#464555]">Target User Persona</label>
              <div className="rounded bg-[#F2F3FF] px-3 py-2 flex items-center gap-2 border border-[#EAEDFF]">
                <span className="material-symbols-outlined text-[16px] text-[#777587]">group</span>
                <input
                  type="text"
                  defaultValue="Busy urban foodies, working professionals seeking fast healthy dining"
                  className="w-full bg-transparent text-[12px] text-[#131B2E] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-medium text-[#464555]">Visual Design Mood</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'minimal', label: 'Clean Minimal', color: 'bg-[#3525CD]' },
                  { id: 'electric', label: 'Playful Electric', color: 'bg-[#005338]' },
                  { id: 'dark', label: 'Dark Luxury', color: 'bg-[#283044]' },
                  { id: 'fintech', label: 'High-Trust Fintech', color: 'bg-[#4953BC]' },
                ].map(m => (
                  <div
                    key={m.id}
                    onClick={() => setSelectedMood(m.id as any)}
                    className={`p-2 rounded-lg cursor-pointer flex items-center justify-between transition-colors border ${
                      selectedMood === m.id
                        ? 'bg-[#E2E7FF] border-[#3525CD]'
                        : 'bg-[#F2F3FF] border-[#EAEDFF] hover:bg-[#EAEDFF]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${m.color}`}></span>
                      <span className="text-[12px] font-medium text-[#131B2E]">{m.label}</span>
                    </div>
                    {selectedMood === m.id && (
                      <span className="material-symbols-outlined text-[#3525CD] text-[14px]">check</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* System Variables Sync */}
            <div className="rounded-lg bg-[#F2F3FF] p-3 space-y-1.5 border border-[#EAEDFF]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#131B2E] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#3525CD]">token</span>
                  Figma Variables &amp; Layout Engine
                </span>
                <span className="px-1.5 py-0.2 rounded bg-[#006E4B] text-white font-mono text-[9px] font-bold">
                  W3C Tokens
                </span>
              </div>
              <p className="text-[11px] text-[#464555]">
                Auto-binds semantic radius (sm, md, lg), 8pt typography ramp, and WCAG AAA contrast pairs ready for code export.
              </p>
              <div className="pt-1 flex items-center justify-between font-mono text-[10px] text-[#464555]">
                <span>Sync: Tailwind v4 Tokens</span>
                <span className="text-[#005338] font-bold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">check_circle</span>
                  Valid Spec
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action & Launch Control Bar */}
      <div className="sticky bottom-4 z-40 rounded-xl bg-white p-4 shadow-xl border border-[#EAEDFF] flex flex-col sm:flex-row items-center justify-between gap-4">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={interactivePlanningMode}
            onChange={e => setInteractivePlanningMode(e.target.checked)}
            className="w-4 h-4 accent-[#3525CD] rounded cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#131B2E]">Interactive Planning Mode</span>
            <span className="text-[11px] text-[#777587]">Pause after wireframe stage for prompt adjustment</span>
          </div>
        </label>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={() => setActiveView('design-system')}
            className="px-4 py-2 rounded bg-[#F2F3FF] text-[#131B2E] text-[12px] font-semibold hover:bg-[#EAEDFF]"
          >
            Browse Starter Kits
          </button>
          <button
            onClick={startGeneration}
            className="px-6 py-2 rounded bg-[#3525CD] text-white text-[12px] font-bold hover:bg-[#4F46E5] shadow-md flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[17px]">auto_awesome</span>
            <span>Start Autonomous Generation</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Generating Overlay Simulation */}
      {isOrchestrating && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#3525CD] animate-spin text-[20px]">sync</span>
                <span className="text-[16px] font-bold text-[#131B2E]">Autonomous Engine Orchestrating</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#F2F3FF] font-mono text-[11px] text-[#777587]">
                Step {orchestratingStep} of 5
              </span>
            </div>
            <p className="text-[12px] text-[#464555]">
              Synthesizing user research, generating component variables, and drafting 7 native iOS 18 auto-layout frames...
            </p>
            <div className="w-full bg-[#EAEDFF] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#3525CD] h-full transition-all duration-500"
                style={{ width: `${orchestratingStep * 33}%` }}
              ></div>
            </div>
            <div className="bg-[#F2F3FF] p-3 rounded font-mono text-[11px] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#005338]">
                <span className="material-symbols-outlined text-[14px]">check</span>
                <span>Product specs verified: FoodFlow Mobile Application</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#3525CD]">
                <span className="material-symbols-outlined text-[14px] animate-spin">refresh</span>
                <span>Scaffolding 8pt spacing tokens &amp; Color variables</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#777587]">
                <span className="material-symbols-outlined text-[14px]">pending</span>
                <span>Synthesizing vector components &amp; interactive states</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
