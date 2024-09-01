import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer,  toast } from "react-toastify";
import { signUpUserWithRawCredentials, uploadDataToFireStore } from "../utilities/firebase";

import "react-toastify/dist/ReactToastify.css";

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

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userObjg = data
    const user = await signUpUserWithRawCredentials(data.email, data.password)

    if (user) {
      uploadDataToFireStore(data).then((res)=> {
        localStorage.setItem('user', JSON.stringify(user))
        reset()
        toast.success("Account Created")
      }).catch((err)=> {
        toast.error("Error Signing Up")
      }) 

    }
  };

  return (
    <div className="flex py-8 items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-2/5">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              {...register("fullname", { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Full Name"
            />
            {errors.fullname && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone-input"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone number:
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone-input"
                {...register("phone", {
                  required: true,
                  pattern: /^0[0-9]{9}$/,
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="028-456-7890"
              />
              {errors.phone && (
                <span className="text-red-500">
                  Invalid phone number format
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Your phone number should match this format.
            </p>
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
              {...register("school", { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="" disabled selected>
                Choose your school
              </option>
              {SCHOOLS_DATA.map((sch) => (
                <option key={sch.id} value={sch.name}>
                  {sch.name}
                </option>
              ))}
            </select>
            {errors.school && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="programme"
              className="block text-sm font-medium text-gray-700"
            >
              Programme
            </label>
            <select
              id="programme"
              {...register("programme", { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="" disabled selected>
                Choose your programme
              </option>
              {PROGRAMS_DATA.map((prog) => (
                <option key={prog.id} value={prog.name}>
                  {prog.name}
                </option>
              ))}
            </select>
            {errors.programme && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-full p-3 hover:bg-gray-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
