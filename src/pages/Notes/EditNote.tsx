import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for React Quill
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function EditNote() {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    // Simulate fetching existing note content based on the ID
    useEffect(() => {
        const fetchNote = async () => {
            // Simulated fetched content
            return
        };
        
        fetchNote();
    }, [id]);

    const handleSave = () => {
        // Logic to save the content (e.g., API call)
        try {
            console.log("Saved content:", content);
            alert('Note saved!');
            // Here you would typically send the content to your server
        } catch (error) {
            console.error("Error saving note:", error);
            alert('Failed to save note. Please try again.');
        }
    };

    return (
        <div className='flex flex-col items-center justify-start mb-20 w-full overflow-hidden'>
            <div className='w-full flex-row flex text-center '>
                <button onClick={()=> navigate('/notes')} className='mx-4 '>
                    <FaArrowLeft size={30} color='#3d3d3d' />
                </button>
                <h1 className='text-2xl text-center text-gray-800 font-inter font-bold'>Back</h1>
            </div>
            <div className='mx-3 rounded-md lg:w-full md:w-40 max-w-3xl my-10'>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    placeholder='Write Something'
                    style={{ height: '200px' }} // Set a fixed height for the editor
                />
            </div>
            <div className='flex justify-end w-full items-center max-w-3xl mt-4'>
                <button 
                    onClick={handleSave} 
                    className='bg-gray-500 hover:bg-gray-300
                     text-white px-4 py-2 rounded transition duration-200
                     hover:text-gray-900 border border-gray-800
                     '
                >
                    Save Note
                </button>
            </div>
            <div className='flex justify-end w-full max-w-3xl mt-4'>
                <h3>Preview</h3>
                <div
                    className='preview'
                    dangerouslySetInnerHTML={{ __html: content }} // Render the content
                />
            </div>

        </div>
    );
}

export default EditNote;
