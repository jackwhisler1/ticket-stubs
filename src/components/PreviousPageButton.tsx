import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

export default function PreviousPageButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 flex items-center justify-center w-12 h-12 p-1 text-white bg-white-300 shadow-lg rounded-full hover:bg-gray-500 hover:border-none"
    >
      <ArrowLeft className="w-6 h-6 text-white-800" />
    </button>
  );
}
