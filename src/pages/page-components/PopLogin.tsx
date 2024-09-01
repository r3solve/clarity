import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function PopLogin({ onAction }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    // Here you would typically handle the login logic
    console.log("Logging in with:", { email, password });
    // Clear fields after submission (optional)
    setEmail("");
    setPassword("");
    onAction(); // Close the modal after submission
  };

  return (
    <div>
      <button
        onClick={onAction}
        className="ms-[85%] hover:rounded-full hover:bg-gray-300 p-1 active:ring-gray-500"
      >
        <IoMdClose size={40} color="black" />
      </button>

      <div className="mx-4 p-3 overflow-y-auto max-h-[70vh]">
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

          {errorMessage && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {errorMessage}
            </div>
          )}

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="text-center mx-[30%] mt-10 w-32 text-white bg-gray-700 p-2 hover:bg-gray-500 rounded-full transition duration-200"
          >
            Login
          </button>

          <div className="text-sm font-medium text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopLogin;
