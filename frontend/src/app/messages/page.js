'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getFeedback } from '../../../lib/cap';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadMsgs();
  }, []);

  const loadMsgs = async () => {
    const data = await getFeedback();
    setMessages(data);
  };

  const filtered = messages.filter(msg =>
    (msg.toName || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">

      {/* Top Right Submit */}
      <div className="flex justify-between mb-10">
        <Link href="/" className="text-gray-700 hover:text-black">← Home</Link>
        <Link href="/send" className="bg-black text-white px-5 py-2 text-sm">SUBMIT</Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-light text-center mb-2">Messages</h1>

      <p className="text-center text-gray-600 mb-8">
        {filtered.length} posts found
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search for a name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl border border-gray-300 px-4 py-3 focus:outline-none"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid gap-10"
           style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

        {filtered.map((msg) => (
          <div
            key={msg.ID}
            className="border border-black p-4"
            style={{ background: msg.color || '#E3E8FF' }}
          >
            {/* Header */}
            <div className="flex justify-between text-xs font-bold mb-3">
              <span>ABC</span>
              <span>✉︎</span>
            </div>

            <p className="text-sm mb-3">
              To: {msg.toName || 'Someone'}
            </p>

            <p className="whitespace-pre-wrap text-base leading-relaxed mb-6">
              {msg.message}
            </p>

            <div className="flex justify-between text-xs">
              <span>#theanonymousproject</span>
              <span>Built on SAP CAP</span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
