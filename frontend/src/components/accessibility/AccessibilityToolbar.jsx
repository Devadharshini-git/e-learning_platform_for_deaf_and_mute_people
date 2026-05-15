import React from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';

const AccessibilityToolbar = () => {
  const {
    toggleHighContrast, highContrast,
    increaseFontSize, decreaseFontSize,
    toggleVoice, voiceEnabled
  } = useAccessibility();

  return (
    <div
      role="toolbar"
      aria-label="Accessibility controls"
      className="fixed top-0 right-0 z-50 flex gap-2 p-2 bg-gray-800 rounded-bl-lg"
    >
      <button
        onClick={toggleHighContrast}
        aria-pressed={highContrast}
        aria-label="Toggle high contrast mode"
        className="px-3 py-1 text-white bg-gray-600 rounded hover:bg-yellow-500 focus-visible:ring-2"
      >
        🌓 Contrast
      </button>

      <button
        onClick={increaseFontSize}
        aria-label="Increase font size"
        className="px-3 py-1 text-white bg-gray-600 rounded hover:bg-blue-500"
      >
        A+
      </button>

      <button
        onClick={decreaseFontSize}
        aria-label="Decrease font size"
        className="px-3 py-1 text-white bg-gray-600 rounded hover:bg-blue-500"
      >
        A-
      </button>

      <button
        onClick={toggleVoice}
        aria-pressed={voiceEnabled}
        aria-label={voiceEnabled ? 'Disable voice assistant' : 'Enable voice assistant'}
        className="px-3 py-1 text-white bg-gray-600 rounded hover:bg-green-500"
      >
        {voiceEnabled ? '🔊 Voice On' : '🔇 Voice Off'}
      </button>
    </div>
  );
};

export default AccessibilityToolbar;
