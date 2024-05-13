import React from "react";
import { Link } from "react-router-dom";

export default function Notification({ imgSrc, LinkText, route, children }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center">
      <div className="w-auto p-10 md:p-0 md:w-[940px] md:h-[518px] bg-white flex flex-col items-center justify-center gap-10">
        {imgSrc && <img src={imgSrc} alt="Success" />}
        <div className="text-xl text-center">{children}</div>
        {LinkText && (
          <Link
            className="text-white text-lg font-medium rounded-md py-4 px-8 bg-primary500"
            to={route}
          >
            {LinkText}
          </Link>
        )}
      </div>
    </div>
  );
}
