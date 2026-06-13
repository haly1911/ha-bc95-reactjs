import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorSelectedSeats, selectorSeatList, selectSeat } from "../store/booking/bookingSlice";

const SeatMap = () => {
  const dispatch = useDispatch();

  const seatList = useSelector(selectorSeatList);
  const selectedSeats = useSelector(selectorSelectedSeats);

  const renderColumnHeader = () => {
    const headerData = seatList.find((data) => data.hang === "");
    if (!headerData) return null;

    const totalSeats = headerData.danhSachGhe || [];

    return (
      <div className="flex items-center gap-3 sm:gap-8 shrink-0 sm:ml-8">
        <div className="seat-gap">
          {totalSeats.slice(0, 3).map((seat, index) => (
            <div
              key={seat.soGhe || index}
              className="seat-header"
            >
              {seat.soGhe}
            </div>
          ))}
        </div>
        <div className="seat-gap">
          {totalSeats.slice(3, 9).map((seat, index) => (
            <div
              key={seat.soGhe || index}
              className="seat-header"
            >
              {seat.soGhe}
            </div>
          ))}
        </div>
        <div className="seat-gap">
          {totalSeats.slice(9, 12).map((seat, index) => (
            <div
              key={seat.soGhe || index}
              className="seat-header"
            >
              {seat.soGhe}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSeatMap = () => {
    return seatList
      .filter((data) => data && data.hang !== "")
      .map((data, index1) => {
        const totalSeats = data.danhSachGhe || [];
        const getSeatClass = (seat) => {
          if (seat.daDat) return "bg-[#2A1B2B] cursor-not-allowed";
          const isSelected = selectedSeats.some((s) => s.soGhe === seat.soGhe);
          if (isSelected) return "bg-[#e8c275] text-[#221a08] cursor-pointer";

          if (seat.loai === "VIP") return "bg-[#5B3AA8] hover:bg-[#4c308e] cursor-pointer";
          return "bg-[#2A2742] hover:bg-[#3a3660] cursor-pointer";
        };

        return (
          <div key={data.hang || index1} className="seat-gap">
            <div className="w-6 sm:w-12 shrink-0 text-[#e8c275] text-xs sm:text-base font-extrabold text-center">
              {data.hang}
            </div>
            <div className="flex items-center gap-3 sm:gap-8">
              {/* Cụm trái (Ghế 1 - 3) */}
              <div className="seat-gap">
                {totalSeats.slice(0, 3).map((seat, index2) => (
                  <div
                    key={seat.soGhe || index2}
                    title={seat.soGhe}
                    onClick={() => !seat.daDat && dispatch(selectSeat(seat))}
                    className={`seat ${getSeatClass(seat)}`}
                  ></div>
                ))}
              </div>

              {/* Cụm giữa (Ghế 4 - 9) */}
              <div className="seat-gap">
                {totalSeats.slice(3, 9).map((seat, index2) => (
                  <div
                    key={seat.soGhe || index2}
                    title={seat.soGhe}
                    onClick={() => !seat.daDat && dispatch(selectSeat(seat))}
                    className={`seat ${getSeatClass(seat)}`}
                  ></div>
                ))}
              </div>

              {/* Cụm phải (Ghế 10 - 12) */}
              <div className="seat-gap">
                {totalSeats.slice(9, 12).map((seat, index2) => (
                  <div
                    key={seat.soGhe || index2}
                    title={seat.soGhe}
                    onClick={() => !seat.daDat && dispatch(selectSeat(seat))}
                    className={`seat ${getSeatClass(seat)}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );
      });
  };

  return (
    <section className="bg-[#171528] border border-white/10 rounded-3xl p-7 lg:col-span-2">
      <div className="mx-auto mb-8 max-w-140 text-center">
        <div className="h-2 rounded-t-full bg-linear-to-b from-[#e8c275] to-transparent shadow-[0_-18px_20px_2px_rgba(232,194,117,0.15)]" />
        <div className="mt-3 text-sm tracking-wider text-[#8a85a8]">M À N &nbsp; H Ì N H</div>
      </div>
      <div id="seatmap" className="flex flex-col items-center gap-1 sm:gap-2.5 pb-12 lg:pt-12 lg:pb-24">
        <div className="flex items-center gap-1">
          <div className="w-6 shrink-0" />
          {renderColumnHeader()}
        </div>
        {renderSeatMap()}
      </div>
      <div className="flex flex-wrap justify-center gap-5 text-xs text-[#8a85a8]">
        <span>
          <span className="seat-color bg-[#2a2742] hover:bg-[#3a3660]" />
          Ghế Trống · 75.000 VND
        </span>
        <span>
          <span className="seat-color bg-[#5b3aa8]" />
          Ghế VIP · 100.000 VND
        </span>
        <span>
          <span className="seat-color bg-[#e8c275]" />
          Ghế Đang Chọn
        </span>
        <span>
          <span className="seat-color bg-[#3a2030]" />
          Ghế Đã Bán
        </span>
      </div>
    </section>
  );
};

export default SeatMap;
