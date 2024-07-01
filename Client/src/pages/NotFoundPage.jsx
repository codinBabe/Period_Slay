import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100vh] text-center">
      <h1 className="text-6xl text-primary500 font-DmSerif font-bold">404</h1>
      <h2 className="text-3xl">Page Not Found</h2>
      <p>
        The page you are looking for might have been removed,
        <br />
        had its name changed or is temporarily unavailable
      </p>
      <Link to="/" className="bg-primary500 text-white py-2 px-5 rounded-md">
        Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
