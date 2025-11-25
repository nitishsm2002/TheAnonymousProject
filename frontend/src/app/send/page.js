'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createFeedback } from '../../../lib/cap';

export default function SendPage() {
  const router = useRouter();

  const [message, setMessage] = useState('');
  const [toName, setToName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      message: message.trim(),
      category: 'General',
      toName: toName.trim() || null
    };

    await createFeedback(payload);
    router.push('/messages');
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      
      {/* Top bar */}
      <div className="flex justify-between mb-10">
        <Link href="/" className="text-gray-700 hover:text-black">
          ← Back
        </Link>

        <Link href="/messages" className="text-gray-700 hover:text-black">
          View Messages
        </Link>
      </div>

      <h1 className="text-4xl font-light mb-6">Submit Your Message</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">

        <input
          type="text"
          placeholder="Recipient (optional)"
          value={toName}
          onChange={(e) => setToName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 focus:outline-none"
        />

        <textarea
          placeholder="Your message..."
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 focus:outline-none resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
