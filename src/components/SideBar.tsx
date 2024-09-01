import { useEffect, useMemo, useState } from "react";
import { FaCog, FaUser } from "react-icons/fa"; // Example icons from react-icons
import { Link } from "react-router-dom";
import { GrNotes } from "react-icons/gr";
import { GiQuill } from "react-icons/gi";
import { PiExam } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";

type SCH = {
  id: number;
  name: string;
};

type PROG = {
  id: number;
  name: string;
};

const SCHOOLS_DATA: SCH[] = [
  { id: 1, name: "Prempeh College" },
  { id: 2, name: "Opoku Ware School" },
  { id: 3, name: "Kumasi Girls' Senior High" },
  { id: 4, name: "St. Louis Senior High" },
  { id: 5, name: "Yaa Asantewaa Girls' Senior High" },
  { id: 6, name: "Mankranso Senior High" },
  { id: 7, name: "Serwaa Nyarko Girls' Senior High" },
  { id: 8, name: "Wesley Senior High School, Konongo" },
  { id: 9, name: "Dwamena Akenten Senior High" },
  { id: 10, name: "Dompoase Senior High" },
  { id: 11, name: "Denyaseman Catholic Senior High" },
  { id: 12, name: "Sekyedumase Senior High Technical" },
  { id: 13, name: "T.I. Ahmadiyya Senior High School" },
  { id: 14, name: "St. Hubert Seminary Senior High" },
  { id: 15, name: "Kumasi Senior High Technical School" },
  { id: 16, name: "Atwima Kwanwoma Senior High-Tech" },
  { id: 17, name: "Angel Educational Complex" },
  { id: 18, name: "Beposo Secondary" },
  { id: 19, name: "Christ the King Catholic Senior High" },
  { id: 20, name: "Ejura Islamic Senior High School" },
  { id: 21, name: "Maabang Senior High Technical" },
  { id: 22, name: "Victory High School" },
  { id: 23, name: "Sakafia Islamic Senior High" },
  { id: 24, name: "Dwenti College" },
  { id: 25, name: "Bodomase Senior High/Tech" },
];

const PROGRAMS_DATA: PROG[] = [
  { id: 1, name: "General Arts" },
  { id: 2, name: "General Science" },
  { id: 3, name: "Business" },
  { id: 4, name: "Technical/Vocational" },
  { id: 5, name: "Home Economics" },
  { id: 6, name: "Visual Arts" },
  { id: 7, name: "Agricultural Science" },
];


export default function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const [userStored, setUserStored] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    setIsOpen(false);
    setUserStored(null)
    localStorage.removeItem('user')
  }

  useEffect(()=> {
    const getUser: string | null = localStorage.getItem('user')
    if (getUser){
      const user = JSON.parse(getUser)
      setUserStored(user)
    }
  }, [])

  return (
    <div
      className={` ${
        expanded ? "w-52" : "w-20"
      } transition-all duration-500 scroll-smooth ease-out h-screen hidden justify-center lg:flex bg-dark-primary`}
    >
      <div className="flex flex-1 flex-col justify-between w-full">
        <div>
          <div className="w-full flex flex-row">
            {expanded && (
              <h1
                className={`text-2xl lg:mx-11 mt-4 font-bold text-clip font-noto-sans text-white w-full transition-all duration-500  ${
                  expanded ? "w-full" : "w-0 h-0 "
                } `}
              >
                Clarity
              </h1>
            )}
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className={`'mt-3 active:bg-slate-900 p-2 ${
                expanded ? " pt-5" : "mx-4 mt-3 "
              } rounded-lg border-gray-700 hover:border-gray-200'`}
            >
              {expanded ? (
                <LuChevronFirst size={30} color="#ece6e6" />
              ) : (
                <LuChevronLast size={30} color="white" />
              )}
            </button>
          </div>
          <nav className="flex flex-col space-y-2 lg:mx-4 mt-8 ">
            <div className="w-full space-y-2 scroll-smooth transition-all duration-300 lg:mx-3 mt-7  max-h-60 overflow-y-auto">
              <Link to={"/"}>
                <div className="flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200">
                  <PiChalkboardTeacherFill size={20} className="mr-3" />
                  {expanded && (
                    <span className="text-medium font-normal mx-1 font-familjen-grotesk">
                      Ask Me
                    </span>
                  )}
                </div>
              </Link>
              <Link to="/past-questions">
                <div className="flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200">
                  <PiExam size={20} className="mr-2" />
                  {expanded && (
                    <span className="text-medium font-normal font-familjen-grotesk">
                      Past Questions
                    </span>
                  )}
                </div>
              </Link>
              <Link to="/notes">
                <div className="flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200">
                  <GiQuill size={30} className="mr-3" />
                  {expanded && (
                    <span className="text-medium font-normal font-familjen-grotesk">
                      Notes
                    </span>
                  )}
                </div>
              </Link>
              <Link to="/flash-cards">
                <div className="flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200">
                  <GrNotes className="mr-3" />
                  {expanded && (
                    <span className="text-medium font-normal font-familjen-grotesk">
                      Flash Cards
                    </span>
                  )}
                </div>
              </Link>
            </div>
            <div className="w-full px-4 my-4 border-gray-300 border-t-[0.4px] ">
              {!userStored && (
                <>
                  <Link to="/signin">
                    <div className="flex items-center text-white mt-3 hover:bg-light-dark-50 p-2 rounded transition duration-200">
                      <PiSignInBold size={20} className="mr-3" />
                      {expanded && (
                        <span className="text-lg font-familjen-grotesk">
                          Sign In
                        </span>
                      )}
                    </div>
                  </Link>

                  <Link to={"signup"}>
                    <div className="flex items-center justify-center text-center mt-10 text-white bg-gray-700 p-2 hover:bg-gray-500 hover:cursor-pointer rounded-full transition duration-200">
                      {expanded ? (
                        <span className="text-lg font-noto-sans">Sign Up</span>
                      ) : (
                        <FaUser size={20} />
                      )}
                    </div>
                  </Link>
                </>
              )}

              {userStored && (
                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full rounded hover:bg-light-dark-50 p-1 h-auto flex flex-row mt-40 cursor-pointer"
                  >
                    <img
                      className="w-7 rounded-full"
                      src="https://ui-avatars.com/api/?name=Yelpoea+yahya&format=svg"
                    />
                    <h1 className="text-sm font-medium pt-1 mx-2 text-white">
                      {"Yelpoea"}
                    </h1>
                    <FaCog
                      color="#cec8c8"
                      size={20}
                      className="my-1 rounded-full"
                    />
                  </div>

                  {isOpen && (
                    <div className="absolute top-full mt-2 left-10 bg-white shadow-lg rounded-md p-2 w-48">
                      <ul>
                        <li className="p-2 hover:bg-gray-200 cursor-pointer">
                          Settings
                        </li>
                        <li onClick={handleLogOut} className="p-2 hover:bg-gray-200 cursor-pointer">
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>

        {expanded && (
          <footer className="text-center font-noto-sans text-gray-400 text-sm lg:mx-11 mb-5">
            Proudly made in 🇬🇭 &copy; 2024 Clarity Ai. All rights reserved.
          </footer>
        )}
      </div>
    </div>
  );
}
