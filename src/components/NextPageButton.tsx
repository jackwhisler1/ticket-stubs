import React from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

export default function NextPageButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 p-1 text-white bg-gray-200 shadow-md rounded-full fixed bottom-4 right-4 border border-transparent hover:border-gray-500"
      onClick={onClick}
    >
      <ArrowRight className="w-6 h-6 text-gray-800" />
    </button>
  );
}
