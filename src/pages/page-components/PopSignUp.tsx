import React from "react";
import { IoMdClose } from "react-icons/io";

type SCH = {
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

function PopSignUp({ onAction }) {
  return (
    <div>
      <button
        onClick={onAction}
        className="ms-[85%]  hover:rounded-full hover:bg-gray-300 p-1 active:ring-gray-500 "
      >
        <IoMdClose size={40} color="black" />
      </button>
      
      <div className="mx-4 p-3 overflow-y-auto  max-h-[70vh] ">
        <form className="p-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-border-gray-800 focus:border-gray-900 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700"
            >
              School
            </label>
            <select
              id="school"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option disabled selected>
                Choose your school
              </option>

              {SCHOOLS_DATA.map((sch) => (
                <option key={sch.id} value={sch.name}>
                  {sch.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className=" text-center mx-[30%] mt-10 w-32 text-white bg-gray-700 p-2 hover:bg-gray-500 rounded-full transition duration-200"
          >
            Sign Up
          </button>

          <div className="text-sm font-medium text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopSignUp;
