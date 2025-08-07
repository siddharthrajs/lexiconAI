import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiFile, FiX } from 'react-icons/fi';

const FileUploader = ({ files, setFiles }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    },
    multiple: true
  });

  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
          isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <FiUpload className="mx-auto text-3xl text-gray-400 mb-3" />
        {isDragActive ? (
          <p className="text-lg font-medium text-gray-700">Drop the files here...</p>
        ) : (
          <>
            <p className="text-lg font-medium text-gray-700">Drag & drop files here</p>
            <p className="text-gray-500 mt-1">or click to browse files</p>
            <p className="text-sm text-gray-400 mt-2">Supports PDF, DOC, TXT and other document formats</p>
          </>
        )}
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">Selected Files:</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {files.map((file, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center">
                  <FiFile className="text-gray-400 mr-2" />
                  <span className="text-sm font-medium text-gray-700 truncate max-w-xs">
                    {file.name}
                  </span>
                </div>
                <button 
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;