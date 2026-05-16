import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import api from '../services/api';

const useSpeechInput = (onCommand) => {
  const [isListening, setIsListening] = useState(false);

  const commands = [
    { command: 'go to lessons', callback: () => onCommand('navigate', '/lessons') },
    { command: 'go to home', callback: () => onCommand('navigate', '/') },
    { command: 'go to practice', callback: () => onCommand('navigate', '/practice') },
    { command: 'go to progress', callback: () => onCommand('navigate', '/progress') },
    { command: 'open math', callback: () => onCommand('navigate', '/lessons/math') },
    { command: 'open science', callback: () => onCommand('navigate', '/lessons/science') },
    { command: 'open english', callback: () => onCommand('navigate', '/lessons/english') },
    { command: 'next', callback: () => onCommand('next', null) },
    { command: 'back', callback: () => onCommand('previous', null) },
    { command: 'repeat', callback: () => onCommand('repeat', null) },
    { command: 'stop', callback: () => onCommand('stop', null) },
    { command: 'start quiz', callback: () => onCommand('quiz', null) },
    {
      command: ':text',
      callback: async ({ text }) => {
        const result = await api.processVoiceCommand(text);
        if (result?.action && result.action !== 'unknown') {
          onCommand(result.action, result.target);
        }
      },
    },
  ];

  const {
    transcript, listening, resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  return {
    transcript, listening, isListening,
    startListening, stopListening, resetTranscript,
    browserSupportsSpeechRecognition,
  };
};

export default useSpeechInput;