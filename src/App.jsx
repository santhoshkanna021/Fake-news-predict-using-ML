import React from 'react';
import NewsForm from './components/NewsForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-2xl animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 drop-shadow-lg">
          📰 Fake News Detector
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Paste any news content below and check if it's real or fake using Machine Learning!
        </p>
        <NewsForm />
        <p className="mt-8 text-center text-sm text-gray-500">
          Built with 🧠 ML, 🔥 React, and ⚙️ Flask
        </p>
      </div>
    </div>
  );
};

export default App;
