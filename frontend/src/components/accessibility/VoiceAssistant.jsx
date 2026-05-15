import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSpeechInput from '../../hooks/useSpeechInput';
import useVoiceAssistant from '../../hooks/useVoiceAssistant';

const VoiceAssistant = () => {
  const navigate = useNavigate();
  const { say, stopSpeaking } = useVoiceAssistant();
  const [lastCommand, setLastCommand] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleCommand = (type, value) => {
    if (type === 'navigate') {
      setLastCommand(`Navigating to ${value}`);
      say(`Navigating to ${value}`);
      navigate(value);
    } else if (type === 'stop') {
      stopSpeaking();
      setLastCommand('Stopped');
    } else if (type === 'next') {
      setLastCommand('Next');
      say('Going to next');
    } else if (type === 'repeat') {
      setLastCommand('Repeating');
      say('Repeating last content');
    }
  };

  const {
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechInput(handleCommand);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm">
        ⚠️ Browser does not support speech recognition
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded panel */}
      {isOpen && (
        <div
          role="region"
          aria-label="Voice assistant panel"
          className="mb-4 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 w-72"
        >
          <h2 className="font-bold text-primary text-lg mb-2">🎤 Voice Assistant</h2>

          <p className="text-sm text-gray-500 mb-3">
            Say: <strong>"Go to lessons"</strong>, <strong>"Open Math"</strong>, <strong>"Next"</strong>, <strong>"Repeat"</strong>
          </p>

          {/* Transcript */}
          <div
            aria-live="polite"
            aria-label="Speech transcript"
            className="bg-gray-50 rounded-lg p-3 text-sm min-h-12 mb-3"
          >
            {transcript || <span className="text-gray-400">Listening...</span>}
          </div>

          {/* Last command */}
          {lastCommand && (
            <div aria-live="assertive" className="text-xs text-green-600 mb-3">
              ✅ {lastCommand}
            </div>
          )}

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => { startListening(); resetTranscript(); }}
              disabled={listening}
              aria-label="Start listening"
              className="flex-1 bg-primary text-white py-2 rounded-lg text-sm
                hover:bg-blue-700 disabled:opacity-50"
            >
              {listening ? '🔴 Listening...' : '🎤 Start'}
            </button>
            <button
              onClick={stopListening}
              aria-label="Stop listening"
              className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-300"
            >
              ⏹ Stop
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => {
          setIsOpen(prev => !prev);
          say(isOpen ? 'Voice assistant closed' : 'Voice assistant opened. Say a command.');
        }}
        aria-label={isOpen ? 'Close voice assistant' : 'Open voice assistant'}
        aria-expanded={isOpen}
        className="w-16 h-16 rounded-full bg-primary text-white text-2xl shadow-lg
          hover:bg-blue-700 transition-all focus-visible:ring-4 focus-visible:ring-yellow-400
          flex items-center justify-center"
      >
        🎤
      </button>
    </div>
  );
};

export default VoiceAssistant;