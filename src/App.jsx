import React from 'react';
import NewsForm from './components/NewsForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          📰 Fake News Detector
        </h1>
        <NewsForm />
      </div>
    </div>
  );
};

export default App;
