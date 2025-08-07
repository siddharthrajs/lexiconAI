import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';

const ResultsDisplay = ({ result }) => {
  if (!result || !result.results) return null;

  const getDecisionColor = (decision) => {
    switch (decision.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDecisionIcon = (decision) => {
    switch (decision.toLowerCase()) {
      case 'approved':
        return <FiCheckCircle className="text-green-500" />;
      case 'rejected':
        return <FiAlertCircle className="text-red-500" />;
      default:
        return <FiInfo className="text-blue-500" />;
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Results</h2>
      <div className="space-y-6">
        {result.results.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.question}
                </h3>
                <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDecisionColor(item.response.decision)}`}>
                  {getDecisionIcon(item.response.decision)}
                  <span className="ml-1">{item.response.decision}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700 mb-2">Relevant Information:</h4>
                <ul className="space-y-2">
                  {item.top_chunks.map((chunk, chunkIndex) => (
                    <li 
                      key={chunkIndex} 
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span className="text-gray-600">{chunk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-gray-700 mb-2">Response:</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800">
                    <span className="font-medium">Justification:</span> {item.response.justification}
                  </p>
                  {item.response.amount_or_value !== "Not specified" && (
                    <p className="mt-2 text-gray-800">
                      <span className="font-medium">Amount/Value:</span> {item.response.amount_or_value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResultsDisplay;