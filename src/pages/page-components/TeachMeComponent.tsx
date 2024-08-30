import React, {Fragment} from 'react'
import FileUpload from '../../components/FileUpload'
import { FaArrowAltCircleUp } from 'react-icons/fa';

function TeachMeComponent() {
  return (
    <div className='w-full flex flex-wrap justify-center '>
        <FileUpload />
        <div className='flex flex-wrap justify-center sm:mx-10'>
        <a href="#" className='flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-50 bg-gray-100 rounded-md py-1 transition duration-200 w-5/12'>
            <span className='text-sm px-1.5 font-familjen-grotesk'>Photosynthesis products? 🌱</span>
        </a>
        <a href="#" className='flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-50 bg-gray-100 rounded-md py-2 transition duration-200 w-5/12'>
            <span className='text-sm px-1.5 font-familjen-grotesk'>Role of chlorophyll? 🍃</span>
        </a>
        <a href="#" className='flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-70 bg-gray-300 rounded-md py-2 transition duration-200 w-5/12'>
            <span className='text-sm mx-1 px-4 font-familjen-grotesk'>Mitosis vs. meiosis? 🔄</span>
        </a>
        <a href="#" className='flex m-1 items-center border hover:border-dark-primary border-gray-900 text-light-dark-70 bg-gray-300 rounded-md py-2 transition duration-200 w-5/12  '>
            <span className='text-sm px-1.5 font-familjen-grotesk'>Daughter cells produced? 👶</span>
        </a>
        </div>
        <div className="flex flex-row mx-8  w-4/5  ">
        <input 
            type="search" 
            id="search" 
            className={`block w-full p-2 ps-10   text-gray-900 border
                 border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-700 dark:focus:border-gray-800 font-inter text-lg h-12 `}
            placeholder="Message" 
            required 
        />
        <FaArrowAltCircleUp className='m-2 hove:cursor-pointer rounded-full hover:bg-slate-400' size={35} />
        </div>
  </div>
  )
}

export default TeachMeComponent