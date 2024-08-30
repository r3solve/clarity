import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useHomeStore } from '../Home/homestore';
function PopLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const {showPop, togglePop} = useHomeStore();

  return (
    <div className="relative">
      <button 
        onClick={()=>togglePop()} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>

      {showPop && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                  Username
                </label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaUser className="p-2 text-gray-400" />
                  <input
                    type="text"
                    id="username"
                    className="flex-1 p-2 outline-none"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaLock className="p-2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    className="flex-1 p-2 outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Login
              </button>
              <button 
                type="button" 
                onClick={togglePopup} 
                className="mt-2 w-full text-center text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopLogin;
