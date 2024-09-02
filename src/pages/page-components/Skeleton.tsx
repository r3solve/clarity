import React from 'react'

function Skeleton() {
  return (
    <div role="status" className=" animate-pulse w-full ">
      <div className="h-8 ml-11 bg-gray-300 rounded-md dark:bg-gray-700 w-4/5 mb-4"></div>
      <div className="h-8 ml-11 bg-gray-300 rounded-md dark:bg-gray-700 w-5/6 mb-4"></div>
      <div className="h-8 ml-11 bg-gray-300 rounded-md dark:bg-gray-700 w-9/12 mb-4"></div>
      <div className="h-8 ml-11 bg-gray-300 rounded-md dark:bg-gray-700 w-4/5 mb-4"></div>
      <div className="h-8 ml-11 bg-gray-300 rounded-md dark:bg-gray-700 w-5/6 mb-4"></div>
      <div className="h-8 ml-11 bg-gray-300 rounded-md dark:bg-gray-700 w-9/12 mb-4"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Skeleton