import React from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

export default function NextPageButton() {
  return (
    <button
      className="flex items-center border-transparent justify-center w-12 p-1 h-12 text-white shadow-md rounded-full active:border-transparent focus:border-transparent hover:border-gray-500 fixed bottom-4 right-4"

      // onClick={onClick}
    >
      <ArrowRight className="w-6 h-6 text-gray-800" />
    </button>
  );
}
