export default function ValidationFeedback({ isValid }) {
  return (
    <span
      className={`ml-1 ${
        isValid
          ? "h-[20px] w-[20px] flex items-center justify-center bg-success500 rounded-full text-white"
          : "text-gray-400"
      }`}
    >
      {isValid ? "✔" : "-"}
    </span>
  );
}
