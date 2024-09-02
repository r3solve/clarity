import React from 'react';
import SideBar from './components/SideBar';
import SideBarRight from './components/SideBarRight';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Route, Routes } from 'react-router';
// import HomePage from '../../pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import NotesPage from './pages/Notes/NotesPage';

function App() {
 

  return (
    <div className='h-screen w-screen'>
    <HomePage />
    </div>
  );
}

export default App;
