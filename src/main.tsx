import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import TeachMeComponent from "./pages/page-components/TeachMeComponent.tsx";
import NotesPage from "./pages/Notes/NotesPage.tsx";
import EditNote from "./pages/Notes/EditNote.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import LibraryPage from "./pages/Library/LibraryPage.tsx";
import PasCoPage from "./pages/PassCo/PasCoPage.tsx";
import InteractiveChat from "./pages/InteractiveChat/InteractiveChat.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import SignOutPage from "./pages/SignOutPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import AccountPage from "./pages/AccountPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <NotFound />,
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
        path: "settings",
        element: <SettingsPage />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "account",
            element: <AccountPage />,
          },
        ],
      },
      {
        path: "ask/:query",
        element: <ChatPage />,
      },
      {
        path: "past-questions",
        element: <PasCoPage />,
      },
      {
        path:"library",
        element:<LibraryPage />
      }
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
  {
    path: "/signout",
    element: <SignOutPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
