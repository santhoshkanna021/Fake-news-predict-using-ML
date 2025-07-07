import React, { useState } from 'react';
import axios from 'axios';

const NewsForm = () => {
  const [newsText, setNewsText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!newsText.trim()) {
      setResult("❗ Please enter some news content");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('https://fake-news-predict-using-ml-bk-2.onrender.com', {
        text: newsText,
      });
      const prediction = res.data.prediction;
      setResult(prediction === 'FAKE' ? '❌ Fake News' : '✅ Real News');
    } catch (error) {
      console.error(error);
      setResult('⚠️ Something went wrong. Try again!');
    }
    setLoading(false);
  };

  return (
    <>
      <textarea
        rows="6"
        placeholder="Paste news content here..."
        value={newsText}
        onChange={(e) => setNewsText(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
      />
      <button
        onClick={handleCheck}
        className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Checking...' : 'Check Authenticity'}
      </button>
      {result && (
        <div className="mt-4 text-center text-lg font-semibold">
          {result}
        </div>
      )}
    </>
  );
};

export default NewsForm;
