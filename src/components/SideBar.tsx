import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaArchive } from 'react-icons/fa'; // Example icons from react-icons
import { Link } from 'react-router-dom';
import { GrNotes } from "react-icons/gr";
import { GiQuill } from "react-icons/gi";
import { PiExam } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { LuChevronFirst, LuChevronLast } from 'react-icons/lu';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";


export default function SideBar() {
  const [expanded, setExpanded] = useState(true);
  const [showModal, setModal] = useState(false)

  return (
    <div className={` ${expanded ? 'w-64' : 'w-20'} transition-all duration-500 scroll-smooth ease-out h-screen hidden justify-center lg:flex bg-dark-primary`}>
      <div className='flex flex-1 flex-col justify-between w-full'>
        <div>
          <div className='w-full flex flex-row'>
            {expanded && 
              <h1 className={`text-2xl lg:mx-11 mt-4 font-bold text-clip font-noto-sans text-white w-full transition-none duration-500 ease-in ${expanded ? 'w-full':'w-0 h-0 '} `}>
                Clarity
              </h1>
            }
            <button onClick={() => setExpanded(prev => !prev)} className={`'mt-3 active:bg-slate-900 p-2 ${expanded ? 'mx-8 pt-4':'mx-4 '} rounded-lg border-gray-700 hover:border-gray-200'`}>
              {expanded ?<LuChevronFirst size={30} color='#ece6e6' />: <LuChevronLast size={30} color='white' />}
            </button>
          </div>
          <nav className='flex flex-col space-y-2 lg:mx-4 mt-8'>
            <Link to={'/'} >
              <div className='flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200'>
                <PiChalkboardTeacherFill size={20} className='mr-3' />
                {expanded && <span className='text-lg mx-1 font-familjen-grotesk'>Teach Me</span>}
              </div>
            </Link>
            <Link to="/past-questions">
              <div className='flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200'>
                <PiExam size={20} className='mr-2' />
                {expanded && <span className='text-lg font-familjen-grotesk'>Past Questions</span>}
              </div>
            </Link>
            <Link to="/notes">
              <div className='flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200'>
                <GiQuill size={30} className='mr-3' />
                {expanded && <span className='text-lg font-familjen-grotesk'>Notes</span>}
              </div>
            </Link>
            <Link to="/flash-cards">
              <div className='flex items-center text-white hover:bg-light-dark-50 p-2 rounded transition duration-200'>
                <GrNotes className='mr-3' />
                {expanded && <span className='text-lg font-familjen-grotesk'>Flash Cards</span>}
              </div>
            </Link>
            <a onClick={()=> togglePop()}>
              <div className='flex items-center text-white hover:bg-gray-700 p-2 rounded transition duration-200 mb-10'>
                <FaSignOutAlt className='mr-3' />
                {expanded && <span className='text-lg font-noto-sans'>Sign In</span>}
              </div>
            </a>
            <Link to={'/register'}>
              <div className='flex items-center justify-center text-center mt-10 text-white bg-gray-700 p-2 hover:bg-gray-500 rounded-full transition duration-200'>
                {expanded ? <span className='text-lg font-noto-sans'>Sign Up</span> : <FaUser size={20} />}
              </div>
            </Link>
          </nav>
        </div>
            


        {expanded && 
        <footer className='text-center font-noto-sans text-gray-400 text-sm lg:mx-11 mb-5'>
          Proudly made in 🇬🇭 &copy; 2024 Clarity Ai. All rights reserved.
        </footer> }
      </div>
    </div>
  );
}
