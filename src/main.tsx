import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx';
import NotFound from './pages/NotFound.tsx';
import TeachMeComponent from './pages/page-components/TeachMeComponent.tsx';
import NotesPage from './pages/Notes/NotesPage.tsx';
import EditNote from './pages/Notes/EditNote.tsx';
import SignInPage from './pages/SignInPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import FlashCardsPage from './pages/FlashCards/FlashCardsPage.tsx';
import PasCoPage from './pages/PassCo/PasCoPage.tsx';
import InteractiveChat from './pages/InteractiveChat/InteractiveChat.tsx';
import ChatPage from './pages/ChatPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "notes",
        element: <NotesPage />,
        children: [
          {
            path: "edit/new",
            element: <EditNote />,
          },
          {
            path: "edit/:id",
            element: <EditNote />,
          },
        ],
      },
      {
        path: "flash-cards",
        element: <FlashCardsPage />,
      },
      {
        path:"ask/:uuid/:query",
        element:<ChatPage />
      },
      {
        path: "past-questions",
        element: <PasCoPage />,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
