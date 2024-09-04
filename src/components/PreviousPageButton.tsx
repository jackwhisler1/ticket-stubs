import React from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

export default function PreviousPageButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 flex items-center justify-center w-12 h-12 p-1 text-white bg-gray-200 shadow-md rounded-full hover:bg-gray-300"
    >
      <ArrowLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
}
