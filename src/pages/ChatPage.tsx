import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import fetchCompletion from "../utilities/inference";
import Skeleton from "./page-components/Skeleton";

type Chat = {
  id: number;
  content: string;
  sender: string;
};

function ChatPage() {
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [allChats, setChats] = useState<Chat[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true); // Assume this is fetched from your auth logic
  const divRef = useRef<HTMLDivElement>(null);
  const { query } = useParams();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Check if the user is logged in
  useEffect(() => {
    if (!query) {
      navigate("/"); // Redirect to sign-in page if not logged in
    }
  }, [query, navigate]);

  useEffect(() => {
    const initialize = () => {
      if (query && query.trim()) {
        const userChat: Chat = {
          id: allChats.length + 1,
          content: query,
          sender: "User",
        };

        fetchCompletion(
          query,
          "You're a ghanian private tutor. Preparing a student for their WASSCE exams."
        )
          .then((res) => {
            let aiResponse = res.choices[0].message.content;
            const aiChat: Chat = {
              id: crypto.randomUUID(),
              content: aiResponse,
              sender: "AI",
            };
            setChats((prev) => [userChat, aiChat]);
          })
          .catch((err) => {
            alert("There was an error");
          })
          .finally(() => {
            setNewMessage("");
          });
      }
    };
    initialize();
  }, [query]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const userChat: Chat = {
        id: allChats.length + 1,
        content: newMessage,
        sender: "User",
      };
      setChats((prev) => [...prev, userChat]);
      setNewMessage("");
      setLoading(true);
      setError(null);

      try {
        const res = await fetchCompletion(
          newMessage,
          `You're a ghanian private tutor. 
          Preparing a student for their WASSCE exams.
        format your results well with enough spacing and paragraphs,
        `
        );
        const aiMessage = res.choices[0].message.content;
        const aiChat: Chat = {
          id: allChats.length + 2,
          content: aiMessage,
          sender: "AI",
        };
        setChats((prev) => [...prev, aiChat]);
      } catch (err) {
        setError("Failed to fetch response. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // You can handle the file upload here
    }
  };

  // Scroll to the bottom of the chat whenever allChats changes
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [allChats]);

  if (!isLoggedIn) {
    return null; // Optionally render nothing if the user is not logged in and hasn't been redirected yet
  }

  return (
    <div className="w-full flex flex-wrap justify-center py-3">
      <div ref={divRef} className="w-[90%] h-96 max-h-96 overflow-y-auto transition-all">
        {allChats.map((each: Chat) => (
          <div
            key={each.id}
            className={`mb-3 mx-10 text-gray-700 ${
              each.sender === "User" ? "text-2xl font-light" : ""
            }`}
          >
            {each.sender === "AI" && (
              <div className="flex flex-row w-full my-3">
                <TbCircleLetterCFilled
                  className={`animate-bounce transition-all ${
                    loading ? "animate-spin" : ""
                  } duration-1000`}
                  size={30}
                  color="#808080"
                />
                <h1 className="font-thin text-xl mx-2">Answer</h1>
              </div>
            )}
            {each.content}
          </div>
        ))}
        {error && <div className="text-red-500 text-center">{error}</div>}
        {loading && <Skeleton />}
      </div>

      <div className="flex flex-row mx-8 w-4/5">
        <label className="rounded-full w-12 h-12">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
            required
          />
          <IoIosAttach
            className="mx-3 mt-5 p-1 transition-all rounded-full hover:cursor-pointer"
            size={35}
          />
        </label>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          id="search"
          className={`block w-full p-2 ps-10 my-4 text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-800 font-inter text-lg h-12`}
          placeholder="Message"
          required
          onKeyDown={handleKeyDown} // Attach event handler here
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
      {error && <div className="text-red-500 text-center w-full">{error}</div>}
    </div>
  );
}

export default ChatPage;
