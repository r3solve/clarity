import React from 'react';
import SideBar from '../components/SideBar';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Outlet, Routes, Route } from 'react-router';
import FileUpload from '../components/FileUpload';
import TeachMeComponent from './page-components/TeachMeComponent';
import NotesPage from './Notes/NotesPage';
import FlashCardsPage from './FlashCards/FlashCardsPage';
import SignUpPage from './SignUpPage';
import PasCoPage from './PassCo/PasCoPage';
import { useLocation } from 'react-router';
import EditNote from './Notes/EditNote';
function HomePage() {
  const loc = useLocation()
  return (
    <>
     
    
    <div className='flex flex-row bg-dark-primary h-screen'>
      {/* Left Sidebar */}
      <SideBar />
      
      {/* Main Content Area */}
      <div className='flex-grow m-4 flex flex-col bg-white rounded-xl'>
        {/* Main Content */}
        <div className='flex-grow flex flex-col justify-between'>
          {/* You can add your main content here */}
          <div className='flex-grow flex w-full justify-center mt-10 items-center flex-col'>
            <Routes>
                <Route index path='/' element={<TeachMeComponent />} />
                <Route path='notes/'   >
                  <Route index element={<NotesPage />} />
                  <Route path='edit/' element={<EditNote />}  />
                  <Route path='edit/:id' element={<EditNote />} />
                </Route>
                <Route path='flash-cards' element={<FlashCardsPage />} />
                <Route path='past-questions' element={<PasCoPage />} />
            </Routes>
          </div>
        </div>
        
      </div>

      {/* <SideBarRight /> */}
      {/* <Outlet /> */}
     

    </div>
    </>
  );
}

export default HomePage;
