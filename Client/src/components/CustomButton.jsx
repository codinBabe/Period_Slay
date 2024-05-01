import React, { useState } from "react";
import CloseBtn from "../assets/close-btn.svg";

export default function CustomButton({
  onClick,
  imgSrc,
  confirmText,
  text,
  children,
}) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleConfirmDelete = () => {
    setShowConfirmation(true);
  };

  const handleClick = async () => {
    try {
      await onClick();
      setShowConfirmation(false);
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="relative">
      <button
        className="focus:bg-primary50 hover:bg-primary50 w-full text-left pl-5 py-5"
        onClick={handleConfirmDelete}
      >
        {text}
      </button>
      {showConfirmation && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center">
          <div className="w-[940px] h-[518px] bg-white flex flex-col items-center justify-center gap-10 relative">
            <button
              className="absolute top-0 right-0 m-4 cursor-pointer"
              onClick={() => {
                setShowConfirmation(false);
              }}
            >
              <img src={CloseBtn} alt="icon" />
            </button>
            {imgSrc && <img src={imgSrc} alt="icon" />}
            <p className="text-xl mb-4">{confirmText}</p>
            <div className="flex items-center gap-10">
              <button
                className="text-white text-lg font-medium rounded-md py-4 px-8 bg-primary500 mr-2"
                onClick={handleClick}
              >
                Yes
              </button>
              <button
                className="text-lg font-medium rounded-md py-4 px-8 border border-primary500"
                onClick={() => {
                  setShowConfirmation(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-60 flex justify-center items-center">
          <div className="w-[940px] h-[518px] flex flex-col items-center justify-center bg-white relative">
            <button
              className="absolute top-0 right-0 m-4 cursor-pointer"
              onClick={() => {
                setShowSuccessMessage(false);
              }}
            >
              <img src={CloseBtn} alt="icon" />
            </button>
            <div className="text-lg flex flex-col items-center justify-center gap-8">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
