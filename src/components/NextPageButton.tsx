import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

export default function NextPageButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 p-1 text-white bg-white-300 shadow-lg rounded-full fixed bottom-4 right-8 border border-transparent hover:bg-gray-500 hover:border-none"
      onClick={onClick}
    >
      <ArrowRight className="w-6 h-6 text-white-800" />
    </button>
  );
}
