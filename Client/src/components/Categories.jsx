import React from "react";

export default function CategorySelect({
  options,
  selectedCategory,
  onChange,
}) {
  return (
    <select
      className="block w-full px-5 py-3 pr-8 text-lg mt-8 bg-white border rounded-md appearance-none focus:outline-none"
      value={selectedCategory}
      onChange={onChange}
    >
      <option value="">Select category</option>
      {options.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
