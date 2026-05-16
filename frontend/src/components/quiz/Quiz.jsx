import React, { useState, useEffect } from 'react';
import useVoiceAssistant from '../../hooks/useVoiceAssistant';
import api from '../../services/api';

const Quiz = ({ subject, topic, onClose }) => {
  const { say } = useVoiceAssistant();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      const data = await api.getQuiz(subject, topic);
      if (data?.questions) {
        setQuestions(data.questions);
        say('Quiz time! Listen to the question and pick the right answer!');
      }
      setLoading(false);
    };
    fetchQuiz();
  }, []);

  const question = questions[current];

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    const correct = index === question.correct_index;
    if (correct) {
      setScore(prev => prev + 1);
      say(`Correct! ${question.explanation}`);
    } else {
      say(`Not quite! ${question.explanation}`);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
      say(`Quiz finished! You got ${score + (selected === question.correct_index ? 1 : 0)} out of ${questions.length}. Great job!`);
    }
  };

  if (loading) return (
    <div className="text-center py-12">
      <div className="text-5xl animate-bounce mb-4">🤔</div>
      <p className="text-gray-500">Loading quiz...</p>
    </div>
  );

  if (finished) return (
    <div className="text-center py-8">
      <div className="text-7xl mb-4">🏆</div>
      <h2 className="text-3xl font-bold text-primary mb-2">Quiz Done!</h2>
      <p className="text-xl text-gray-600 mb-6">
        You got <strong className="text-success">{score}</strong> out of <strong>{questions.length}</strong>!
      </p>
      <button
        onClick={onClose}
        className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-blue-700"
      >
        Back to Lesson 📚
      </button>
    </div>
  );

  if (!question) return null;

  return (
    <div className="py-4">
      {/* Progress */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Question {current + 1} of {questions.length}</span>
        <span>⭐ Score: {score}</span>
      </div>

      {/* Question */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white
        rounded-2xl p-6 mb-6 text-center">
        <p className="text-xl font-bold">{question.question}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {question.options.map((option, index) => {
          let style = 'bg-gray-50 border-2 border-gray-200 hover:border-primary';
          if (selected !== null) {
            if (index === question.correct_index) {
              style = 'bg-green-100 border-2 border-success text-success font-bold';
            } else if (index === selected) {
              style = 'bg-red-100 border-2 border-danger text-danger';
            }
          }
          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selected !== null}
              aria-label={`Option ${index + 1}: ${option}`}
              className={`p-4 rounded-xl text-center text-lg transition-all
                focus-visible:ring-4 focus-visible:ring-yellow-400 ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {selected !== null && (
        <div aria-live="polite"
          className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4 text-center">
          <p className="text-yellow-800 text-sm">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {selected !== null && (
        <button
          onClick={handleNext}
          className="w-full bg-primary text-white py-4 rounded-xl text-lg
            font-bold hover:bg-blue-700 transition-all"
        >
          {current < questions.length - 1 ? 'Next Question →' : 'See Results 🏆'}
        </button>
      )}
    </div>
  );
};

export default Quiz;