import React from "react";
import Concert from "../types/Concert";
import { convertDateToUSFormat } from "../services/helpers";
import barcode from "../assets/barcode.jpg";
type TicketStubProps = {
  concert: Concert;
};
const TicketStub: React.FC<TicketStubProps> = ({ concert }) => {
  const styles = `
body {
  background-color: #436ea5;
}
.ticket-1 {
  background-image: url("https://images.unsplash.com/photo-1483101974978-cf266fdf1139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80");
}
.ticket-2 {
  background-image: url("https://images.unsplash.com/photo-1550184658-ff6132a71714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2180&q=80");
}
`;
  const eventDate = convertDateToUSFormat(concert.eventDate);
  return (
    <div className="ticket bg-no-repeat bg-top bg-cover bg-[#F4F0D5] w-full h-48 rounded-2xl shadow-md mx-auto my-4 text-black relative overflow-hidden grid grid-cols-4">
      <div className="date col-span-1 flex flex-col justify-center items-end shadow-md p-4">
        <span className="day text-6xl md:text-3xl lg:text-5xl">
          {new Date(eventDate).getDate()}
        </span>
        <span className="month-and-time mb-1 font-bold text-right">
          {new Date(eventDate)
            .toLocaleString("default", { month: "short" })
            .toUpperCase()}
          <br />
        </span>{" "}
        <span className=" ml-3 small text-xs">{eventDate}</span>
      </div>
      <div className="artist col-span-2 flex flex-col items-center justify-center font-bold shadow-md p-2">
        <span className="name text-xl md:text-2xl lg:text-2xl">
          {concert.artist.name}
        </span>
        <br />
        <span className="live small text-sm md:text-base">
          {concert.tour?.name}
        </span>
        <span className="small text-sm md:text-base">
          {concert.venue.city.name}
        </span>
        <span className="small text-sm md:text-base">{concert.venue.name}</span>
      </div>
      <div className="rip border-r-2 border-dotted border-gray-400 h-full absolute top-0 left-3/4 transform -translate-x-1/2"></div>
      <div className="barcode absolute top-1/2 right-4 transform -translate-y-1/2"></div>
    </div>
  );
};

export default TicketStub;
