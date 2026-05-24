import React, { useState } from 'react';
import api from '../../services/api';
import useVoiceAssistant from '../../hooks/useVoiceAssistant';

const AIExplainer = ({ concept, subject }) => {
  const { say } = useVoiceAssistant();
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    const data = await api.simplifyText(concept, subject);
    if (data?.simplified) {
      setExplanation(data);
      say(data.simplified);
    }
    setLoading(false);
  };

  return (
    <div className="mt-4">
      

      {explanation && (
        <div
          aria-live="polite"
          className="mt-3 bg-purple-50 border border-purple-200
            rounded-xl p-4 text-sm text-purple-800"
        >
          <p className="font-semibold mb-1">🤖 AI Says:</p>
          <p>{explanation.simplified}</p>
          {explanation.keywords?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {explanation.keywords.map(kw => (
                <span key={kw}
                  className="bg-purple-200 text-purple-800 px-2 py-0.5
                    rounded-full text-xs font-medium">
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIExplainer;