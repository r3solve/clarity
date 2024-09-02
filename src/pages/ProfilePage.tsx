import React from "react";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

function ProfilePage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission, e.g., send data to an API
  };

  return (
    <div className="w-full h-5/6 mx-4">
      <div className="m-4 w-36 h-0 rounded-full flex flex-col justify-center items-start"></div>
      <div className="w-full max-h-96 overflow-y-auto">
        <img
          className="rounded ml-4 w-36 h-36 mt-12"
          src="https://ui-avatars.com/api/?name=Elon+Musk&rounded=true"
          alt="Extra large avatar"
        />
        <div className="w-36">
          <h1 className="my-2 ml-8 text-lg text-center text-gray-700 font-light">
            Elon Tusk
          </h1>

        </div>
        <div className="w-10/12 mt-12 mx-4 ">
          <h1 className="mb-3 text-lg font-light">General Information</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid-cols-2 grid grid-rows-3 gap-4">
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  readOnly={true}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                  
                />
              </div>
              <div className="mb-2">
                <label htmlFor="date" className="block text-gray-700">
                  Date Of Birth
                </label>
                <input
                  {...register("date")}
                  type="date"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="school" className="block text-gray-700">
                  School:
                </label>
                <input
                  id="school"
                  readOnly={true}
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="program" className="block text-gray-700">
                  Program:
                </label>
                <input
                  id="program"
                  readOnly={true}
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="electives" className="block text-gray-700">
                  Electives:
                </label>
                <input
                  {...register('electives')}
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                  placeholder="Eg (Geography, Physics, Chemistry) separated by comma"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-gray-700">
                Bio:
              </label>
              <textarea
                id="bio"
                {...register("bio")}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-gray-700 focus:ring-0"
                rows="2"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-gray-100 border border-gray-700 transition-all 
              delay-75 text-gray-700  rounded-lg px-4 py-2 hover:text-white hover:bg-gray-700"
            >
              Save Changes
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
