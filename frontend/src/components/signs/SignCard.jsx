import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useVoiceAssistant from '../../hooks/useVoiceAssistant';

const SignCard = ({ sign, index }) => {
  const { say } = useVoiceAssistant();
  const [practiced, setPracticed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleLearn = () => {
    say(`${sign.word}. ${sign.instruction}. Tip: ${sign.tip}`);
  };

  const handlePracticed = () => {
    setPracticed(true);
    say(`Great job! You practiced ${sign.word}`);
  };

  return (
    <div
      ref={ref}
      role="article"
      aria-label={`Sign for ${sign.word}`}
      className={`bg-white rounded-2xl shadow-md p-6 border-2 transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${practiced ? 'border-success' : 'border-gray-100 hover:border-primary'}
      `}
    >
      {/* Sign emoji display */}
      <div className="text-center mb-4">
        <span
          className="text-7xl block mb-2"
          role="img"
          aria-label={`${sign.word} sign emoji`}
        >
          {sign.emoji}
        </span>
        <h3 className="text-2xl font-bold text-gray-800">{sign.word}</h3>
      </div>

      {/* Hand animation placeholder */}
      <div
        aria-label={`Hand gesture animation for ${sign.word}`}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6
          text-center mb-4 border border-dashed border-blue-200"
      >
        <div className="text-6xl mb-2 animate-bounce">🤟</div>
        <p className="text-xs text-gray-400">Hand gesture animation</p>
      </div>

      {/* Instruction */}
      <div className="mb-3">
        <p className="text-sm font-semibold text-gray-600 mb-1">📋 How to sign:</p>
        <p className="text-gray-700 text-sm">{sign.instruction}</p>
      </div>

      {/* Tip */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
        <p className="text-xs font-semibold text-yellow-700">💡 Tip:</p>
        <p className="text-sm text-yellow-800">{sign.tip}</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleLearn}
          aria-label={`Hear instructions for ${sign.word}`}
          className="flex-1 bg-primary text-white py-2 rounded-lg text-sm
            hover:bg-blue-700 transition-colors focus-visible:ring-4 focus-visible:ring-yellow-400"
        >
          🔊 Hear It
        </button>
        <button
          onClick={handlePracticed}
          aria-label={`Mark ${sign.word} as practiced`}
          className={`flex-1 py-2 rounded-lg text-sm transition-colors
            focus-visible:ring-4 focus-visible:ring-yellow-400
            ${practiced
              ? 'bg-success text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
        >
          {practiced ? '✅ Done!' : '🤟 Practiced'}
        </button>
      </div>
    </div>
  );
};

export default SignCard;