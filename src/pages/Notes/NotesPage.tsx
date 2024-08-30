import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const notesData = [
    { id: 1, title: 'Note 1', content: 'This is the content of note 1.' },
    { id: 2, title: 'Note 2', content: 'This is the content of note 2.' },
    { id: 3, title: 'Note 3', content: 'This is the content of note 3.' },
    { id: 4, title: 'Note 4', content: 'This is the content of note 4.' },
    { id: 5, title: 'Note 5', content: 'This is the content of note 5.' },
    { id: 2, title: 'Note 2', content: 'This is the content of note 2.' },
    { id: 3, title: 'Note 3', content: 'This is the content of note 3.' },
    { id: 4, title: 'Note 4', content: 'This is the content of note 4.' },
    { id: 5, title: 'Note 5', content: 'This is the content of note 5.' },
    { id: 2, title: 'Note 2', content: 'This is the content of note 2.' },
    { id: 3, title: 'Note 3', content: 'This is the content of note 3.' },
    { id: 4, title: 'Note 4', content: 'This is the content of note 4.' },
    { id: 5, title: 'Note 5', content: 'This is the content of note 5.' },
    // Add more notes as needed
];

function NotesPage() {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-row flex-shrink w-full'>
                <Link to={'/notes/edit'} className='mx-3 p-2 bg-gray-300 border-gray-700 border flex flex-row rounded-md text-base'>
                    New Note
                    <FaPlus size={20} className='mx-2' color='#808080' />
                </Link>
            </div>
            <div className='h-96 overflow-y-auto my-4 rounded-md  mx-4 p-4'>
                {/* Grid layout for notes */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {notesData.map(note => (
                        <div key={note.id} className='bg-white h-80 w-72  hover:cursor-pointer rounded-lg shadow-md p-4'>
                            <h3 className='font-bold text-lg'>{note.title}</h3>
                            <p className='text-gray-900'>{note.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotesPage;
