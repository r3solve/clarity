import React, { Fragment, useState } from "react";
import FileUpload from "../../components/FileUpload";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { TbCircleLetterCFilled } from "react-icons/tb";
import fetchCompletion from "../../utilities/inference";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

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

function TeachMeComponent() {
  const [allChats, setChats] = useState<Chat[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Handle the Enter key press
      handleSendMessage()
    }
  };

  const handleSendMessage = async () => {
    const uuid = crypto.randomUUID()
    navigate(`/ask/${uuid}/${newMessage}`)
    
  };

  return (
    <div className="w-full flex flex-wrap justify-center">
      {allChats.length === 0 ? (
        <>
          <FileUpload />
          <div className="flex flex-wrap justify-center sm:mx-10">
            {/* Example links */}
            <Link to={`ask/${crypto.randomUUID()}/Photosynthesis products?`}
              href="#"
              className="flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-50 bg-gray-100 rounded-md py-1 transition duration-200 w-5/12"
            >
              <span className="text-sm px-1.5 font-familjen-grotesk">
                Photosynthesis products? 🌱
              </span>
            </Link>
            <a
              href="#"
              className="flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-50 bg-gray-100 rounded-md py-2 transition duration-200 w-5/12"
            >
              <span className="text-sm px-1.5 font-familjen-grotesk">
                Role of chlorophyll? 🍃
              </span>
            </a>
            <a
              href="#"
              className="flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-70 bg-gray-300 rounded-md py-2 transition duration-200 w-5/12"
            >
              <span className="text-sm mx-1 px-4 font-familjen-grotesk">
                Mitosis vs. meiosis? 🔄
              </span>
            </a>
            <a
              href="#"
              className="flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-70 bg-gray-300 rounded-md py-2 transition duration-200 w-5/12"
            >
              <span className="text-sm px-1.5 font-familjen-grotesk">
                Daughter cells produced? 👶
              </span>
            </a>
          </div>
        </>
      ) : (
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
                    <h1 className="font-thin text-xl mx-2 ">
                    Answer
                    </h1>

                </div>
              )}
              {each.content}
            </div> 
          ))}
          {error && <div className="text-red-500 text-center">{error}</div>}
        </div>
      )}
      <div className="flex flex-row mx-8 w-4/5">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          id="search"
          className={`block w-full p-2 ps-10 my-4 text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-800 font-inter text-lg h-12`}
          placeholder="Message"
          required
          onKeyDown={handleKeyDown}
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

export default TeachMeComponent;
