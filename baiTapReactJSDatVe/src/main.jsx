import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookingPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </StrictMode>,
);
