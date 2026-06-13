import { createSlice } from "@reduxjs/toolkit";
import seatList from "../../data/seatList.js";

const initialState = {
  seatList: seatList,
  selectedSeats: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      const selectedSeat = action.payload;
      const index = state.selectedSeats.findIndex((seat) => seat.soGhe === selectedSeat.soGhe);

      if (index === -1) {
        state.selectedSeats.push(selectedSeat);
      } else {
        state.selectedSeats.splice(index, 1);
      }
    },
    confirmPayment: (state) => {
      state.seatList.forEach((row) => {
        if (row.danhSachGhe) {
          row.danhSachGhe.forEach((seat) => {
            const isBeingSelected = state.selectedSeats.some((s) => s.soGhe === seat.soGhe);
            if (isBeingSelected) {
              seat.daDat = true;
            }
          });
        }
      });
      state.selectedSeats.length = 0;
    },
  },
});

export const { selectSeat, confirmPayment } = bookingSlice.actions;

export const selectorSeatList = (state) => state.booking.seatList;
export const selectorSelectedSeats = (state) => state.booking.selectedSeats;

export default bookingSlice.reducer;
