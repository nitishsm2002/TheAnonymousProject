'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4">
      
      {/* Top Right Submit */}
      <div className="absolute top-6 right-6">
        <Link 
          href="/send"
          className="bg-black text-white px-5 py-2 text-sm hover:bg-gray-800 transition"
        >
          Send
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-4">
        THE ANONYMOUS PROJECT
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 text-lg font-light mb-10">
        A secure, anonymous platform where individuals can voice their thoughts freely, fostering openness and emotional expression.
      </p>

      {/* Center Buttons */}
      <div className="flex flex-col gap-4 text-center">
        <Link
          href="/messages"
          className="text-black underline underline-offset-4 hover:text-gray-600"
        >
          View Messages →
        </Link>
      </div>
    </div>
  );
}
