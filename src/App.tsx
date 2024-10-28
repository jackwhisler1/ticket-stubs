import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  const [username, setUsername] = useState<string | null>(null);

  const handleLoginSuccess = (user: string) => {
    setUsername(user);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      <Header />
      <div className="flex flex-col items-center justify-center flex-1">
        {username ? (
          <Home username={username} /> // Render Home if logged in
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} /> // Render Login if not logged in
        )}{" "}
      </div>
    </div>
  );
}

export default App;
