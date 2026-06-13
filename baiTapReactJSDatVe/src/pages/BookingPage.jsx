import React from "react";
import Header from "../components/Header";
import SeatMap from "../components/SeatMap";
import BookingInfo from "../components/BookingInfo";

const BookingPage = () => {
  return (
    <div className="min-h-screen text-[#ece9ff] bg-[#0b0a14]">
      {/* header */}
      <Header />
      {/* main: 2 cột */}
      <main className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 pt-32 pb-16">
          <SeatMap />
          <BookingInfo />
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
