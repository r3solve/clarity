import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Draggable from "react-draggable";
import { IoPencilSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { SiQuizlet } from "react-icons/si";

type FlashCard = {
  id: string;
  question: string;
  answer: string;
  color: string; // Hex Color Code
};

const flashCardsData: FlashCard[] = [
  {
    id: crypto.randomUUID(),
    question: "What is Newton's First Law?",
    answer:
      "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by a net external force.",
    color: "#FF5733",
  },
  {
    id: crypto.randomUUID(),
    question: "What is the atomic number of hydrogen?",
    answer: "The atomic number of hydrogen is 1.",
    color: "#33FF57",
  },
  {
    id: crypto.randomUUID(),
    question: "What is photosynthesis?",
    answer:
      "Photosynthesis is the process by which green plants use sunlight to synthesize foods with the help of chlorophyll.",
    color: "#3357FF",
  },
  {
    id: crypto.randomUUID(),
    question: "What does Einstein's Theory of Relativity state?",
    answer:
      "Time and space are linked, and the laws of physics are the same for all observers.",
    color: "#FF33A1",
  },
  // Add more flashcards as needed
];

function NotesPage() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/notes" && (
        <div className="w-full h-full">
          <div className="flex flex-row flex-shrink w-full">
            <Link
              to={"edit/new"}
              className="mx-4 px-4 flex items-center justify-center text-center mt-10 text-white bg-gray-700 p-2 hover:bg-gray-500 rounded-full transition duration-200"
            >
              New Note
              <FaPlus size={20} className="mx-2" color="#808080" />
            </Link>
            <Link
              to={"edit/new"}
              className="mx-4 font-medium px-4 flex items-center justify-center text-center mt-10 text-white bg-gray-700 p-2 hover:bg-gray-500 rounded-full transition duration-200"
            >
              Quiz
              <SiQuizlet size={20} className="mx-2" color="#808080" />
            </Link>
          </div>
          <div className="h-96 overflow-y-auto my-4 rounded-md mx-4 p-4">
            {/* Grid layout for flashcards */}
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {flashCardsData.map((card) => (
                <Draggable key={card.id}>
                  <div
                    className="relative w-72 mt-4 hover:cursor-pointer rounded-lg shadow-md p-4 transition-transform duration-300"
                    style={{ backgroundColor: card.color }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-center flex-grow">
                        <p className="text-gray-900 font-bold">
                          {card.question}
                        </p>
                        <p className="text-gray-700 mt-2">{card.answer}</p>
                      </div>
                      <Link
                        className=" mb-32 hover:scale-125 transition-all duration-150"
                        to={`edit/${card.id}`}
                      >
                        <IoPencilSharp size={20} />
                      </Link>
                    </div>
                  </div>
                </Draggable>
              ))}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default NotesPage;
