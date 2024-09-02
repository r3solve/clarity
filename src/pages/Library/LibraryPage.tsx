import React from 'react'
import SingleThread from '../page-components/SingleThread';


function LibraryPage() {
  return (
    <div className="w-full h-full ">
      <nav className="mx-auto h-14 w-4/5 border-b-slate-200 border-b rounded-sm flex flex-row  ">
        <h1 className="mx-2 lg:text-3xl md:text-2xl sm:text-2xl mt-3 text-gray-700 font-noto-sans font-light">
          Library
        </h1>
        <div className="ml-auto my-2 w-1/3  ">
          <input
            type="search"
            id="default-search"
            className="block  w-full ring-0 ps-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-00 dark:focus:border-gray-700"
            placeholder="Search History"
            required
          />
        </div>
      </nav>
      <div className="mx-auto h-96  w-full max-h-96  overflow-y-auto p-4  ">
        <SingleThread heading="hello" content="how are you doing ?" />
        <SingleThread heading="hello" content="how are you doing ?" />
        <SingleThread heading="hello" content="how are you doing ?" />
        <SingleThread heading="hello" content="how are you doing ?" />
      </div>
    </div>
  );
}

export default LibraryPage