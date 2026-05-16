const BASE_URL = 'http://localhost:8000/api';

const api = {
  // NLP
  simplifyText: async (text, subject = 'general') => {
    const res = await fetch(`${BASE_URL}/nlp/simplify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, subject, age_group: '5-10' }),
    });
    return res.json();
  },

  // Lessons
  generateLesson: async (subject, topic, concept) => {
    const res = await fetch(`${BASE_URL}/lessons/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, topic, concept }),
    });
    return res.json();
  },

  getQuiz: async (subject, topic, num_questions = 3) => {
    const res = await fetch(`${BASE_URL}/lessons/quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, topic, num_questions }),
    });
    return res.json();
  },

  // Voice
  processVoiceCommand: async (text) => {
    const res = await fetch(`${BASE_URL}/voice/command`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    return res.json();
  },
};

export default api;