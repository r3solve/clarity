import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegShareFromSquare } from "react-icons/fa6";
type SingleThreadProp = {
    heading:string,
    content:string
}

function SingleThread({heading, content}:SingleThreadProp) {
  return (
    <div className="h-1/3 w-4/5 mx-auto overflow-hidden border-b rounded-sm flex flex-col px-4 my-2">
      <h1 className=" px-auto text-xl font-normal text-gray-900">{`${heading}`}</h1>
      <h1 className="px-auto text-medium text-gray-700 font-light">
        {`${content}`}
      </h1>
      <div className="w-full  flex h-5 flex-row justify-end">
        <FaRegShareFromSquare
          className="mx-2 hover:cursor-pointer hover:opacity-5 transition-all delay-75"
          color="black"
          size={20}
        />
        <RiDeleteBin6Line
          className="mx-2 hover:cursor-pointer hover:opacity-5 transition-all delay-75"
          color="black"
          size={20}
        />
      </div>
    </div>
  );
}

export default SingleThread