// src/Login.tsx
import { useState } from "react";
import { fetchUser } from "../services/user";

export default function Login({
  onLoginSuccess,
}: {
  onLoginSuccess: (username: string) => void;
}) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const user = await fetchUser(username);
      if (user) {
        onLoginSuccess(username); // Trigger success callback
      } else {
        setError("User not found. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen w-screen p-6 text-center text-gray-100 bg-cover bg-center m-none p-0"
      style={{
        backgroundImage: `url(/src/assets/concert-photo.avif)`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content Layer */}
      <div className="relative z-10 max-w-lg">
        <h1 className="text-3xl font-semibold mb-4 drop-shadow-lg">
          Welcome to Ticket Stubs
        </h1>
        <p className="text-lg mb-2 drop-shadow-lg">
          This tool allows Setlist.fm users to visualize the concerts they have
          attended in a minimalistic format.
        </p>
        <p className="text-lg mb-4 drop-shadow-lg">
          To begin, enter your Setlist.fm username or head over to{" "}
          <a
            href="https://www.setlist.fm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-600"
          >
            setlist.fm
          </a>{" "}
          to start tracking the events you’ve attended.
        </p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError(null); // Reset error on new input
          }}
          placeholder="Enter your Setlist.fm username"
          className="p-3 border border-gray-300 rounded mb-4 w-64 text-white-900 mx-4 caret-gray-50 focus:outline-none focus:ring focus:border-indigo-300"
        />
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Create Binder
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}
