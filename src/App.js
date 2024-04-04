import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PeriodTracker from './pages/Tracker';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

