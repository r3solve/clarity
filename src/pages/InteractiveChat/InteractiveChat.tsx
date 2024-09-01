import React, { useState } from 'react'

import { FaArrowAltCircleUp } from 'react-icons/fa';
import { TbCircleLetterCFilled } from 'react-icons/tb';


type Chat = {
  id: number;
  content: string;
  sender: string;
};

const initialChats: Chat[] = [
  {
    id: 1,
    content: "Hello, how can I help you today?",
    sender: "AI",
  },
  {
    id: 2,
    content: "I'm trying to learn how to use environment variables in Vite.",
    sender: "User",
  },
  {
    id: 3,
    content:
      "That's great! You can use a `.env` file for that. Want me to show you how?",
    sender: "AI",
  },
  {
    id: 4,
    content: "Yes, please!",
    sender: "User",
  },
  {
    id: 5,
    content:
      "Sure! Just create a `.env` file in the root of your project and prefix your variable names with `VITE_`. For example, `VITE_API_KEY=your_api_key_here`.",
    sender: "AI",
  },
];

function InteractiveChat() {
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [allChats, setAllChats] = useState(initialChats)

    const handleSendMessage =() => {
        return 
    }

  return (
    <div className="w-full h-96 max-h-96 overflow-y-auto">
      <div className="w-full h-96 max-h-96 overflow-y-auto">
        {allChats.map((each: Chat) => (
          <div
            key={each.id}
            className={`mb-3 mx-10 text-gray-700 ${
              each.sender === "User" ? "text-2xl font-light" : ""
            }`}
          >
            {each.sender === "AI" && (
              <div className="flex flex-row w-full">
                <TbCircleLetterCFilled
                  className={` animate-bounce transition-all ${
                    loading ? "animate-spin" : ""
                  } duration-1000`}
                  size={30}
                  color="#808080"
                />
                <h1 className="font-thin text-xl mx-2 ">Answer</h1>
              </div>
            )}
            {each.content}
          </div>
        ))}
        {error && <div className="text-red-500 text-center">{error}</div>}
      </div>

      <div className="flex flex-row mx-8 w-4/5">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          id="search"
          className={`block w-full p-2 ps-10 my-4 text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-800 font-inter text-lg h-12`}
          placeholder="Message"
          required
        />
        <button
          onClick={handleSendMessage}
          className="rounded-full"
          disabled={loading}
        >
          <FaArrowAltCircleUp
            className={`mx-3 rounded-full ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
            }`}
            size={35}
          />
        </button>
      </div>
    </div>
  );
}

export default InteractiveChat