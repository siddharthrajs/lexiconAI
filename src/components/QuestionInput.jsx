import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

const QuestionInput = ({ questions, setQuestions }) => {
  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const removeQuestion = (index) => {
    if (questions.length <= 1) return;
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-800">Questions</h3>
        <button
          onClick={addQuestion}
          className="flex items-center text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors"
        >
          <FiPlus className="mr-1" />
          Add Question
        </button>
      </div>

      <div className="space-y-3">
        {questions.map((q, i) => (
          <div key={i} className="flex items-center">
            <input
              type="text"
              placeholder={`Question ${i + 1}`}
              value={q}
              onChange={(e) => handleQuestionChange(i, e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            {questions.length > 1 && (
              <button
                onClick={() => removeQuestion(i)}
                className="ml-2 p-3 text-gray-500 hover:text-red-500 transition-colors"
              >
                <FiTrash2 />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionInput;