import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PeriodTracker from './pages/Tracker';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/tracker",
    element: <PeriodTracker />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

