import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import QuestionInput from './components/QuestionInput';
import ResultsDisplay from './components/ResultsDisplay';
import SubmitButton from './components/SubmitButton';

function App() {
  const [files, setFiles] = useState([]);
  const [questions, setQuestions] = useState(['']);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (files.length === 0 || questions.filter(q => q.trim() !== '').length === 0) {
      alert('Please upload at least one file and enter at least one question.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    questions.forEach(q => formData.append('questions', q));

    try {
      const res = await fetch('https://hackrx-llm-api-sj2g.onrender.com/api/query', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error('Error submitting query:', error);
      alert('An error occurred while processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">🧠 LLM Document Query</h1>
          <p className="text-lg text-gray-600">
            Upload documents and ask questions to get AI-powered insights
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Documents</h2>
              <FileUploader files={files} setFiles={setFiles} />
            </div>

            <div className="mb-8">
              <QuestionInput questions={questions} setQuestions={setQuestions} />
            </div>

            <div className="mb-6">
              <SubmitButton onSubmit={submit} loading={loading} />
            </div>
          </div>
        </div>

        {result && (
          <ResultsDisplay result={result} />
        )}
      </div>
    </div>
  );
}

export default App;
