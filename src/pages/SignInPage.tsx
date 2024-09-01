import React from 'react';
import { FaLock } from 'react-icons/fa';

import {useForm} from 'react-hook-form'
import { signInWithRawCredentials } from '../utilities/firebase';
import { toast, ToastContainer} from 'react-toastify';
import {  useNavigate } from 'react-router';

function SignInPage() {
  const {register, reset, handleSubmit, formState:{errors}}  = useForm();
  const navigate = useNavigate()
  const onFormSubmit = async (data)=> {
    console.log(data)
    try {
      const user = await signInWithRawCredentials(data.email, data.password)
      if (user){
        localStorage.setItem('user',JSON.stringify(user))
        toast.success("Loggin Successfull")
        navigate("/")
        return 
      }
    }catch (err) {
      alert(err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {required:"This field is required"})}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              placeholder="you@example.com"
            />
          </div>
          

          <div className="mb-6 w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {required:"password field can't be empty"})}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 hover:bg-gray-600 transition duration-200 text-lg rounded-full p-3"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignInPage;
