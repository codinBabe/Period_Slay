import React from "react";
import PopupImg from "../assets/popup-img.png";
import CloseBtn from "../assets/close-btn.svg";

export default function MyModal({ isOpen, closeModal, children }) {
  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center">
        <div className="w-[927px] h-[568px] relative">
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
            className="w-[410px] h-[382px] p-6 absolute top-[20%] left-0 bg-primary500
            text-white rounded-tr-3xl rounded-br-3xl flex flex-col justify-center gap-5"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
