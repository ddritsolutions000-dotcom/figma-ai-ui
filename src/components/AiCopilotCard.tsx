import React, { useState } from 'react';
import { useDocument } from '../context/DocumentContext';

export const AiCopilotCard: React.FC = () => {
  const { applyAiSuggestion, isAiGenerating, aiProgress, selectedNode } = useDocument();
  const [promptText, setPromptText] = useState('Add dietary filter tags (Gluten-Free, Vegan)');
  const [isDismissed, setIsDismissed] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed right-72 top-16 z-40 px-3 py-1.5 rounded-full bg-white shadow-lg border border-[#3525CD]/30 flex items-center gap-1.5 text-[12px] font-semibold text-[#3525CD] hover:bg-[#F2F3FF] transition-all"
      >
        <span className="material-symbols-outlined text-[16px]">neurology</span>
        <span>Open AI Product Designer</span>
      </button>
    );
  }

  const handleApply = () => {
    setIsApplied(true);
    applyAiSuggestion(promptText);
    setTimeout(() => setIsApplied(false), 2000);
  };

  return (
    <div className="fixed right-74 top-16 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#3525CD]/20 p-4 z-40 space-y-3 select-none">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#3525CD] text-white flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-[15px]">neurology</span>
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-[#131B2E] leading-none">AI Product Designer</h4>
            <span className="text-[10px] text-[#005338] font-semibold">Autonomous Co-Pilot</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[#777587]">
          <button className="p-1 rounded hover:bg-[#F2F3FF] hover:text-[#131B2E]" title="Pin Card">
            <span className="material-symbols-outlined text-[15px]">push_pin</span>
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded hover:bg-[#F2F3FF] hover:text-[#131B2E]"
            title="Dismiss Card"
          >
            <span className="material-symbols-outlined text-[15px]">close</span>
          </button>
        </div>
      </div>

      {/* Prompt Input Bar */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F2F3FF] border border-[#C7C4D8]/40">
        <input
          type="text"
          value={promptText}
          onChange={e => setPromptText(e.target.value)}
          placeholder="Describe layout changes or actions..."
          className="w-full bg-transparent text-[12px] text-[#131B2E] focus:outline-none"
        />
        <button
          onClick={handleApply}
          disabled={isAiGenerating}
          className="text-[#3525CD] hover:text-[#4F46E5] disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-[16px]">
            {isAiGenerating ? 'autorenew' : 'send'}
          </span>
        </button>
      </div>

      {/* Autonomous Pipeline Status */}
      <div className="space-y-1.5 p-2 rounded-xl bg-[#F2F3FF]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#131B2E] font-semibold">Agent Workflow</span>
          <span className="text-[#3525CD] font-bold">{aiProgress}% Complete</span>
        </div>
        <div className="w-full h-1 bg-[#DAE2FD] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3525CD] rounded-full transition-all duration-300"
            style={{ width: `${aiProgress}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] text-[#777587] text-center">
          <span className="text-[#005338] flex items-center justify-center gap-0.5">
            <span className="material-symbols-outlined text-[10px]">check</span> Context
          </span>
          <span className="text-[#005338] flex items-center justify-center gap-0.5">
            <span className="material-symbols-outlined text-[10px]">check</span> Wireframe
          </span>
          <span className="text-[#3525CD] font-bold animate-pulse">● Hi-Fi UI</span>
        </div>
      </div>

      {/* Contextual Suggestion Banner */}
      <div className="p-2.5 rounded-xl bg-[#E2DFFF]/40 border border-[#3525CD]/20 space-y-2">
        <p className="text-[11px] text-[#131B2E] leading-snug">
          💡 <strong>Opportunity:</strong> Adding dietary filter tags to the sticky header can elevate user checkout conversion by <strong>~18%</strong> based on FoodFlow benchmark data.
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleApply}
            className={`px-2.5 py-1 rounded text-white text-[11px] font-semibold shadow-xs transition-colors ${
              isApplied ? 'bg-[#005338]' : 'bg-[#3525CD] hover:bg-[#4F46E5]'
            }`}
          >
            {isApplied ? 'Applied ✓' : 'Apply to Frame'}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            className="px-2 py-1 rounded bg-[#EAEDFF] text-[#131B2E] text-[11px] hover:bg-[#E2E7FF]"
          >
            Dismiss
          </button>
        </div>
      </div>

      {/* Quick Action Suggestion Chips */}
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        <button
          onClick={() => setPromptText('Add Empty State for empty dish items')}
          className="px-2 py-0.5 rounded-full bg-[#F2F3FF] hover:bg-[#EAEDFF] text-[#464555] text-[10px]"
        >
          + Empty State
        </button>
        <button
          onClick={() => setPromptText('Generate Dark Mode token variant')}
          className="px-2 py-0.5 rounded-full bg-[#F2F3FF] hover:bg-[#EAEDFF] text-[#464555] text-[10px]"
        >
          + Dark Mode
        </button>
        <button
          onClick={() => setPromptText('Generate User Journey flow from Discovery to Checkout')}
          className="px-2 py-0.5 rounded-full bg-[#F2F3FF] hover:bg-[#EAEDFF] text-[#464555] text-[10px]"
        >
          Generate Flow
        </button>
      </div>
    </div>
  );
};
