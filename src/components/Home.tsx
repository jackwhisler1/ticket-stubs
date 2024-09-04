import { useEffect, useState } from "react";
import { fetchUser } from "../services/user";
import TicketStub from "./TicketStub";
import Concert from "../types/Concert";
import Header from "./Header";
import NextPageButton from "./NextPageButton";
import PreviousPageButton from "./PreviousPageButton";

export default function Home() {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const userName = "jwhisler"; // Set default user to you

  const fetchConcertData = async (page: number) => {
    setLoading(true);
    try {
      const data = await fetchUser(userName, page);
      setTotalResults(data.total);
      setConcerts((prevConcerts) => {
        const updatedConcerts = [...prevConcerts];
        // Replace the relevant 20-concert block with new data
        updatedConcerts.splice((page - 1) * 20, 20, ...data.setlist);
        return updatedConcerts;
      });
    } catch (error) {
      console.error("Error fetching setlist:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!concerts[(currentPage - 1) * 10]) {
      fetchConcertData(Math.ceil(currentPage / 2));
    }
  }, [currentPage]);

  const displayedConcerts = concerts.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const handleNextPage = () => {
    if (currentPage * 10 < totalResults) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl py-6 z-10">
        {loading ? (
          <p className="text-lg text-gray-500 col-span-2 text-center">
            Loading...
          </p>
        ) : displayedConcerts.length > 0 ? (
          displayedConcerts.map((concert) => (
            <TicketStub key={concert.id} concert={concert} />
          ))
        ) : (
          <p className="text-lg text-gray-500 col-span-2 text-center">
            No concerts found.
          </p>
        )}
      </div>
      <div className="flex justify-between w-full max-w-4xl">
        {currentPage > 1 && <PreviousPageButton onClick={handlePreviousPage} />}
        {currentPage * 10 < totalResults && (
          <NextPageButton onClick={handleNextPage} />
        )}
      </div>
    </div>
  );
}
