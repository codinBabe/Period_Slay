import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PeriodTracker from "./pages/Tracker";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import BlogPost from "./pages/BlogPost";
import EditUser from "./pages/UserEdit";
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: isAuthenticated() ? <Profile /> : <Home />,
  },
  {
    path: "/profile/edit",
    element: isAuthenticated() ? <EditUser /> : <Home />,
  },
  {
    path: "/blog",
    element: isAuthenticated() ? <Blog /> : <Home />,
  },
  {
    path: "/blog/new",
    element: isAuthenticated() ? <CreateBlog /> : <Home />,
  },
  {
    path: "/blog/:id",
    element: isAuthenticated() ? <BlogPost /> : <Home />,
  },
  {
    path: "/tracker",
    element: isAuthenticated() ? <PeriodTracker /> : <Home />,
  },
  {
    path: "/about",
    element: isAuthenticated() ? <About /> : <Home />,
  },
  {
    path: "/contact",
    element: isAuthenticated() ? <Contact /> : <Home />,
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
