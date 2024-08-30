import React from 'react';

type SCH = {
  id:number,
  name:string
}

type PROG = {
  id:number,
  name:string
}

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
  { id: 25, name: "Bodomase Senior High/Tech" }
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



export default function SignUpPage() {
  return (
    <div className="flex py-8 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-2/5">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-700">Phone number:</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                </svg>
              </div>
              <input
                type="text"
                id="phone-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="028-456-7890"
                required
              />
            </div>
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">Select a phone number that matches the format.</p>
          </div>

          <div className="mb-4">
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">School</label>
            <select
              id="school"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option disabled selected >Choose your school</option>


              {SCHOOLS_DATA.map((sch) => (
                <option key={sch.id} value={sch.name}>{sch.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="programme" className="block text-sm font-medium text-gray-700">Programme</label>
            <select
              id="programme"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option disabled selected >Choose your programme</option>

              {PROGRAMS_DATA.map((prog) => (
                <option key={prog.id} value={prog.name}>{prog.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-full p-3 hover:bg-gray-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}

