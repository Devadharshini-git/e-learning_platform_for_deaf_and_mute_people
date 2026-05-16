import React from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';

const AccessibilityToolbar = () => {
  const {
    toggleHighContrast,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    toggleVoice,
    voiceEnabled,
  } = useAccessibility();

  return (
    <div
      role="toolbar"
      aria-label="Accessibility controls"
      className="fixed top-5 right-5 z-50"
    >
      <div
        className="flex items-center gap-3 bg-white/80 backdrop-blur-2xl
        border border-white/40 shadow-2xl rounded-2xl px-4 py-3"
      >

        {/* Contrast */}
        <button
          onClick={toggleHighContrast}
          aria-pressed={highContrast}
          aria-label="Toggle high contrast mode"
          className={`group flex items-center gap-2 px-4 py-2 rounded-xl
            font-semibold text-sm transition-all duration-300
            hover:scale-105 focus-visible:outline-none
            focus-visible:ring-4 focus-visible:ring-yellow-400
            ${
              highContrast
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
        >
          <span className="text-base">
            {highContrast ? '🌕' : '🌗'}
          </span>

          <span>
            Contrast
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-slate-200" />

        {/* Font Controls */}
        <div className="flex items-center gap-2">

          <button
            onClick={decreaseFontSize}
            aria-label="Decrease font size"
            className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700
              font-black text-sm hover:bg-slate-200 hover:scale-105
              transition-all duration-300 shadow-sm
              focus-visible:outline-none focus-visible:ring-4
              focus-visible:ring-blue-400"
          >
            A-
          </button>

          <button
            onClick={increaseFontSize}
            aria-label="Increase font size"
            className="w-10 h-10 rounded-xl bg-gradient-to-r
              from-blue-600 to-purple-600 text-white font-black
              text-sm hover:scale-105 transition-all duration-300
              shadow-lg focus-visible:outline-none
              focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            A+
          </button>

        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-slate-200" />

        {/* Voice Assistant */}
        <button
          onClick={toggleVoice}
          aria-pressed={voiceEnabled}
          aria-label={
            voiceEnabled
              ? 'Disable voice assistant'
              : 'Enable voice assistant'
          }
          className={`flex items-center gap-2 px-4 py-2 rounded-xl
            font-semibold text-sm transition-all duration-300
            hover:scale-105 shadow-sm focus-visible:outline-none
            focus-visible:ring-4 focus-visible:ring-green-400
            ${
              voiceEnabled
                ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
        >
          <span className="text-base">
            {voiceEnabled ? '🔊' : '🔇'}
          </span>

          <span>
            {voiceEnabled ? 'Voice On' : 'Voice Off'}
          </span>
        </button>

      </div>
    </div>
  );
};

export default AccessibilityToolbar;