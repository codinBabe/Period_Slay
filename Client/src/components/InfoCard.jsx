import React from "react";
export default function InfoCard({ image, title, children }) {
  return (
    <div className="flex gap-6 mb-6">
      <img className="self-start" src={image} alt="icon" />
      <div>
        <h3 className="font-DmSerif text-primary500 text-2xl mb-4">{title}</h3>
        <p className="text-base">{children}</p>
      </div>
    </div>
  );
}
