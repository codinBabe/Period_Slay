import React from "react";
export default function UploadImage({ text, link, setLink }) {
  async function handlePicChange(e) {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.append("file", files[0]);

      try {
        const response = await fetch(
          "https://period-slay.onrender.com/upload",
          {
            method: "POST",
            body: data,
          }
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const link = await response.json();
        setLink(link);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      {link && (
        <img
          className="rounded-lg w-full h-full mb-1"
          src={link}
          width={250}
          height={250}
          alt={"avatar"}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image found
        </div>
      )}
      <label>
        {text}
        <input type="file" className="hidden" onChange={handlePicChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          Upload Image
        </span>
      </label>
    </>
  );
}
