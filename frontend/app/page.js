'use client'
import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const sendMessage = async () => {
    try {
      // Send the message to the backend API to print it out - USE YOUR OWN URL/IP address
      await axios.post('https://XXX.XXXX.XXXX/print', { message });
      setMessage('');
      setIsSent(true);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

return (
  <main className="flex min-h-screen flex-col items-center p-24 bg-rose-100">
    {isSent ? (
      <Image src="/love-you-i-love-you.gif" width={300} height={300} />
    ) : (
      <>
        <Image src="/baby-bear-brown.gif" width={300} height={300} />
        <h1 className="font-semibold">Send me a little note</h1>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="mt-4 p-2 border-2 pb-8 border-rose-200 rounded-md"
        />
        <button
          onClick={sendMessage}
          className="mt-4 px-4 py-2  bg-rose-500 text-white rounded-md"
        >
          Send
        </button>
      </>
    )}
  </main>
);
}