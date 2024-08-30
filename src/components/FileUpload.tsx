import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai'; // Import the icon

const FileUpload = ({}) => {
    
    return (
        
        <div className="flex imp items-center justify-center relative w-4/6 mb-4 sm:mt-11">
            <label 
                htmlFor="dropzone-file" 
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <AiOutlineUpload 
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" 
                        aria-hidden="true" 
                    />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Files (PDF) (Docx) (TXT) (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file"  className="hidden" />
            </label>
        </div>
    );
};

export default FileUpload;
