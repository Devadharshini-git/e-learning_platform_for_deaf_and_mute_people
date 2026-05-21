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
      className="w-full bg-gray-900 text-white flex items-center justify-end
        gap-2 px-6 py-2 text-sm z-50"
    >
      

      <button
        onClick={toggleHighContrast}
        aria-pressed={highContrast}
        aria-label="Toggle high contrast mode"
        className={`flex items-center gap-1 px-3 py-1 rounded-lg font-semibold transition-all
          ${highContrast
            ? 'bg-amber-400 text-gray-900'
            : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
      >
        {highContrast ? '🌕' : '🌗'} Contrast
      </button>

      <button
        onClick={decreaseFontSize}
        aria-label="Decrease font size"
        className="w-9 h-9 bg-gray-700 text-white rounded-lg font-black
          hover:bg-gray-600 transition-all"
      >
        A-
      </button>

      <button
        onClick={increaseFontSize}
        aria-label="Increase font size"
        className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600
          text-white rounded-lg font-black hover:opacity-90 transition-all"
      >
        A+
      </button>

      <button
        onClick={toggleVoice}
        aria-pressed={voiceEnabled}
        aria-label={voiceEnabled ? 'Disable voice assistant' : 'Enable voice assistant'}
        className={`flex items-center gap-1 px-3 py-1 rounded-lg font-semibold transition-all
          ${voiceEnabled
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
      >
        {voiceEnabled ? '🔊 Voice On' : '🔇 Voice Off'}
      </button>
    </div>
  );
};

export default AccessibilityToolbar;