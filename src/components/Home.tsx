// src/Home.tsx
import { useEffect, useState } from "react";
import { fetchUser } from "../services/user";
import TicketStub from "./TicketStub";
import Concert from "../types/Concert";

export default function Home() {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const userName = "jwhisler"; // Set default user to you

  useEffect(() => {
    const fetchConcertData = async () => {
      try {
        const data = await fetchUser(userName);
        setConcerts(data?.setlist || []);
      } catch (error) {
        console.error("Error fetching setlist:", error);
      }
    };

    fetchConcertData();
  }, [userName]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Ticket Stubs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        {concerts.length > 0 ? (
          concerts
            .slice(0, 8)
            .map((concert) => <TicketStub key={concert.id} concert={concert} />)
        ) : (
          <p className="text-lg text-gray-500 col-span-2 text-center">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}
