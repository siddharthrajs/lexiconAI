import React from 'react';
import { FiSend, FiLoader } from 'react-icons/fi';

const SubmitButton = ({ onSubmit, loading }) => {
  return (
    <button
      onClick={onSubmit}
      disabled={loading}
      className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center ${
        loading
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
      }`}
    >
      {loading ? (
        <>
          <FiLoader className="animate-spin mr-2" />
          Processing...
        </>
      ) : (
        <>
          <FiSend className="mr-2" />
          Submit Query
        </>
      )}
    </button>
  );
};

export default SubmitButton;