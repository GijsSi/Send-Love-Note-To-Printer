'use client'


import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Home() {




  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [gifUrl, setGifUrl] = useState('');

  const sendMessage = async () => {
    try {
      await axios.post(process.env.NEXT_PUBLIC_PRINTER_ENDPOINT, { message });
      console.log('Message sent:', message)
      setMessage('');
      setIsSent(true);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  useEffect(() => {
    if (isSent) {
          axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&tag=love`)        
          .then(response => {
          setGifUrl(response.data.data.images.original.url);
        })
        .catch(error => {
          console.error('Failed to fetch GIF:', error);
        });
    }
  }, [isSent]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-rose-100">
      {isSent ? (
        <>
          <Image src={gifUrl} width={300} height={300} />
          <button
            onClick={() => setIsSent(false)}
            className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-md"
          >
            Back
          </button>
        </>
      ) : (
        <>
          <Image src="/baby-bear-brown.gif" width={300} height={300} />
          <h1 className="font-semibold">Send me a little note</h1>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="mt-4 p-2 border-2 border-rose-200 rounded-md text-black"
            rows="4"

          />
          <button
            onClick={sendMessage}
            className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-md"
          >
            Send
          </button>
        </>
      )}
    </main>
  );
}