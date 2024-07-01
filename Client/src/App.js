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
import TrackerCalculator from "./pages/Calculate";
import PeriodInfo from "./pages/PeriodInfo";
import ForgotPassword from "./pages/ForgetPassword";
import Support from "./pages/Support";
import Faq from "./pages/Faq";
import NotFoundPage from "./pages/NotFoundPage";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const ProtectedRoute = ({ element: Element, path }) => {
  return isAuthenticated() ? <Element /> : <Login />;
};

const router = createBrowserRouter([
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
    path: "/forget",
    element: <ForgotPassword />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={Profile} />,
  },
  {
    path: "/profile/edit",
    element: <ProtectedRoute element={EditUser} />,
  },
  {
    path: "/blog",
    element: <ProtectedRoute element={Blog} />,
  },
  {
    path: "/blog/new",
    element: <ProtectedRoute element={CreateBlog} />,
  },
  {
    path: "/blog/:id",
    element: <ProtectedRoute element={BlogPost} />,
  },
  {
    path: "/tracker",
    element: <ProtectedRoute element={PeriodTracker} />,
  },
  {
    path: "/tracker/calculate",
    element: <ProtectedRoute element={TrackerCalculator} />,
  },
  {
    path: "/tracker/period",
    element: <ProtectedRoute element={PeriodInfo} />,
  },
  {
    path: "/about",
    element: <ProtectedRoute element={About} />,
  },
  {
    path: "/contact",
    element: <ProtectedRoute element={Contact} />,
  },
  {
    path: "/contact/support",
    element: <ProtectedRoute element={Support} />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
