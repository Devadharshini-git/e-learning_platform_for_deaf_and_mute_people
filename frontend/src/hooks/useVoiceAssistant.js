import { useAccessibility } from '../context/AccessibilityContext';

const useVoiceAssistant = () => {
  const { voiceEnabled } = useAccessibility();

  const say = (text) => {
    if (!voiceEnabled) return; // ✅ stops speaking when voice is off
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  return { say, stopSpeaking };
};

export default useVoiceAssistant;