'use client';

import React, { useState } from 'react';

export default function MainPage() {
  const [topic, setTopic] = useState('');
  const [script, setScript] = useState('');
  const [voice, setVoice] = useState('elevenlabs');
  const [audioUrl, setAudioUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateScript = async () => {
    setLoading(true);
    setScript('');
    setAudioUrl('');

    try {
      const response = await fetch('http://localhost:5678/webhook-test/generate-podcast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, voice }),
      });
    
      if (!response.ok) {
        throw new Error('Failed to generate podcast');
      }
    
      const data = await response.json();
      const audioUrl = data.audio_url;
    
      if (!audioUrl) {
        throw new Error('No audio URL returned');
      }
    
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error('Error generating podcast:', error);
      setScript('⚠️ Failed to generate podcast. Please try again.');
    } finally {
      setLoading(false);
    }
    
  };

  const handleVoiceChange = (e) => {
    setVoice(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <TakeInput topic={topic} setTopic={setTopic} />
      <ChoseVoice voice={voice} handleVoiceChange={handleVoiceChange} />

      <button
        onClick={handleGenerateScript}
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition duration-300"
        disabled={loading || !topic}
      >
        {loading ? 'Generating...' : 'Generate Podcast'}
      </button>

      {(script || audioUrl) && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">

          {audioUrl && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">🎧 Generated Audio:</h2>
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TakeInput({ topic, setTopic }) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">🎙️ Podcast Generator</h1>
      <div className="mb-6">
        <label htmlFor="topic" className="block text-lg font-medium mb-2">
          Enter Topic or Sentence:
        </label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a topic..."
        />
      </div>
    </>
  );
}

function ChoseVoice({ voice, handleVoiceChange }) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">Select AI Voice:</label>
      <select
        value={voice}
        onChange={handleVoiceChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="elevenlabs">ElevenLabs</option>
        <option value="deepgram">Deepgram</option>
      </select>
    </div>
  );
}
