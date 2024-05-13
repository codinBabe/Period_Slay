import React from "react";
import PopupImg from "../assets/popup-img.png";
import CloseBtn from "../assets/close-btn.svg";
import { Link } from "react-router-dom";

export default function MyModal({ isOpen, closeModal, isAuthenticated }) {
  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center">
        <div className="w-full md:w-[927px] md:h-[568px] relative">
          <button
            className="absolute top-0 right-0 m-4 cursor-pointer"
            onClick={closeModal}
          >
            <img src={CloseBtn} alt="Close Button" />
          </button>
          <img
            src={PopupImg}
            alt="A suprised lady"
            className="rounded-[20px]"
          />
          <div
            className="w-1/2 md:w-[410px] md:h-[382px] p-6 absolute top-[20%] left-0 bg-primary500
            text-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center gap-5"
          >
            {isAuthenticated() ? (
              <>
                <p className="font-DmSerif text-[18px] md:text-[52px]">
                  Stay in the Know: Are You in Your Safe Period?
                </p>
                <p className="font-semibold text-white text-sm md:text-xl">
                  Click{" "}
                  <Link className="text-primary200" to="/tracker">
                    here
                  </Link>{" "}
                  to find out
                </p>
              </>
            ) : (
              // Content for unauthenticated users
              <p className="font-DmSerif text-[18px] md:text-[52px]">
                Spoiler alert: the best stuff is hidden. Log in or sign up to
                see it all!
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
