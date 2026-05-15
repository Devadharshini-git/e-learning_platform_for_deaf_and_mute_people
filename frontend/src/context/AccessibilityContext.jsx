import React, { createContext, useState, useContext } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [language, setLanguage] = useState('en');

  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleVoice = () => setVoiceEnabled(prev => !prev);
  const increaseFontSize = () => setFontSize(prev =>
    prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'xlarge'
  );
  const decreaseFontSize = () => setFontSize(prev =>
    prev === 'xlarge' ? 'large' : prev === 'large' ? 'normal' : 'normal'
  );

  return (
    <AccessibilityContext.Provider value={{
      fontSize, highContrast, voiceEnabled, language,
      toggleHighContrast, toggleVoice, increaseFontSize,
      decreaseFontSize, setLanguage
    }}>
      <div className={`
        ${highContrast ? 'bg-black text-white' : 'bg-white text-gray-900'}
        ${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'}
        min-h-screen transition-all duration-300
      `}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
