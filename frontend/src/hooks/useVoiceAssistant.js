import { useSpeech } from 'react-text-to-speech';

const useVoiceAssistant = () => {
  const { speak, stop, isSpeaking } = useSpeech({ text: '' });

  const say = (text) => {
    stop();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  return { say, stopSpeaking, isSpeaking };
};

export default useVoiceAssistant;
