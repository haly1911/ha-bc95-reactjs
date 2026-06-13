import React, { useState } from "react";
import { selectorSelectedSeats, selectSeat, confirmPayment } from "../store/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";

const BookingInfo = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(selectorSelectedSeats);

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    isConfirm: false,
    onConfirm: null,
  });

  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.gia, 0);

  const showAlert = (title, message) => {
    setModal({
      isOpen: true,
      title,
      message,
      isConfirm: false,
      onConfirm: null,
    });
  };

  const handlePayment = () => {
    const seatNames = selectedSeats.map((seat) => seat.soGhe).join(", ");
    setModal({
      isOpen: true,
      title: "Xác Nhận Thanh Toán",
      message: `Bạn có chắc chắn muốn đặt mua (các) ghế: ${seatNames}? Tổng tiền cần thanh toán là ${totalAmount.toLocaleString("vi-VN")} VND`,
      isConfirm: true,
      onConfirm: () => {
        dispatch(confirmPayment());
        setModal({ isOpen: false });
        setTimeout(() => {
          showAlert("Vé của bạn đã được đặt thành công! Chúc bạn xem phim vui vẻ tại Lumière 🎉");
        }, 300);
      },
    });
  };

  return (
    <>
      <aside className="flex flex-col gap-5 lg:sticky lg:top-6 self-start lg:col-span-1">
        <div className="relative h-50 rounded-3xl overflow-hidden">
          <img src="/bgmovie.jpg" className="w-full h-full object-cover" alt="spirited-away-bg" />
          <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1.5 text-xs uppercase tracking-widest rounded-full bg-black/40 backdrop-blur">
            IMAX · 2h 5m
          </span>
          <div className="absolute left-4.5 bottom-3.5 z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <h3 className="text-2xl font-serif mb-1">Spirited Away</h3>
            <p className="text-sm">Anime Fantasy · Adventure</p>
          </div>
        </div>
        <div className="bg-[#171528] border border-white/10 rounded-3xl p-7 text-lg mb-4">
          <h4>Thông Tin Đặt Vé</h4>
          <div className="ticket-info">
            <span>Ngày Chiếu</span>
            <span>Thứ Bảy, 27/06/2026</span>
          </div>
          <div className="ticket-info">
            <span>Suất Chiếu</span>
            <span>20:45</span>
          </div>
          <div className="ticket-info">
            <span>Phòng Chiếu</span>
            <span>Phòng 4 · IMAX</span>
          </div>
          <div className="ticket-info">
            <span>Số Vé</span>
            <span>{selectedSeats.length}</span>
          </div>
          <div className="mt-3">
            <div className="booking-info-titles mb-2">Ghế Đã Chọn</div>
            <div className="flex flex-wrap gap-1.5 min-h-7 lg:max-h-24 lg:overflow-y-auto">
              {selectedSeats.length === 0 ? (
                <p className="italic text-xs text-[#8a85a8]">Chưa có ghế nào được chọn</p>
              ) : (
                selectedSeats.map((seat) => (
                  <div key={seat.soGhe} className="flex items-center justify-center gap-1">
                    <div className="px-2 py-1 text-xs font-bold rounded-md bg-[#e8c275] text-[#221a08]">
                      {`${seat.soGhe} - ${seat.gia.toLocaleString("vi-VN")} VND`}
                      <button
                        onClick={() => dispatch(selectSeat(seat))}
                        className="hover:text-red-600 ml-2 text-sm font-normal cursor-pointer"
                        title="Hủy chọn"
                      >
                        x
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-between items-baseline mt-5 pt-4 border-t border-white/10">
            <span className="booking-info-titles">Tổng Tiền</span>
            <span className="font-serif text-3xl text-[#e8c275]">{totalAmount.toLocaleString("vi-VN")} VND</span>
          </div>
          <button
            onClick={handlePayment}
            className={`w-full mt-5 py-3.5 rounded-xl font-semibold text-sm tracking-wider duration-300 transition-all
              ${
                selectedSeats.length > 0
                  ? "bg-[#e8c275] text-[#221a08] hover:scale-102 cursor-pointer"
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
            disabled={selectedSeats.length === 0}
          >
            Thanh Toán
          </button>
        </div>
      </aside>

      {/* giao diện popup */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-sm p-6 bg-[#171528] border border-white/10 rounded-3xl shadow-2xl transition-all transform scale-100">
            <h3 className="font-sans text-xl font-semibold tracking-wide text-[#e8c275] mb-3">{modal.title}</h3>
            <p className="text-sm text-[#ece9ff]/80 leading-relaxed mb-6">{modal.message}</p>

            <div className="flex items-center justify-end gap-3">
              {modal.isConfirm ? (
                <>
                  <button
                    onClick={() => setModal({ ...modal, isOpen: false })}
                    className="modal-btn text-[#8a85a8] hover:text-[#ece9ff] hover:bg-white/5"
                  >
                    Hủy Bỏ
                  </button>
                  <button
                    onClick={modal.onConfirm}
                    className="modal-btn bg-[#e8c275] text-[#221a08] hover:opacity-90 active:scale-98"
                  >
                    Xác Nhận
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setModal({ ...modal, isOpen: false })}
                  className="modal-btn bg-[#e8c275] text-[#221a08] hover:opacity-90 active:scale-98"
                >
                  Đóng
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingInfo;
