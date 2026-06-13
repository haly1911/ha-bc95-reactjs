import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 border-b border-white/10 bg-[#0b0a14]">
      <div>
        <a href="" className="font-serif text-3xl tracking-wide">
          Lumière<span className="text-[#e8c275]">.</span>
        </a>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-9">
          <li>
            <a href="" className="nav-titles">
              Phim Đang Chiếu
            </a>
          </li>
          <li>
            <a href="" className="nav-titles">
              Phim Sắp Chiếu
            </a>
          </li>
          <li>
            <a href="" className="nav-titles">
              Rạp Chiếu
            </a>
          </li>
          <li>
            <a href="" className="nav-titles">
              Ưu Đãi
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div className="hidden sm:block">
          <a
            className="header-btn"
            href="#"
          >
            Đăng nhập
          </a>
        </div>
        <div className="block sm:hidden">
          <button
            className="header-btn text-[#ece9ff]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/60 z-50 sm:hidden">
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed top-2 right-2 z-50 bg-[#0b0a14] sm:hidden border border-white/10 p-8 rounded-3xl"
          >
            <nav>
              <ul className="flex flex-col gap-6 text-sm">
                <li>
                  <a className="nav-titles block" href="#">
                    Phim Đang Chiếu
                  </a>
                </li>
                <li>
                  <a className="nav-titles block" href="#">
                    Phim Sắp Chiếu
                  </a>
                </li>
                <li>
                  <a className="nav-titles block" href="#">
                    Rạp Chiếu
                  </a>
                </li>
                <li>
                  <a className="nav-titles block" href="#">
                    Ưu Đãi
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-5">
              <a
                className="header-btn"
                href="#"
              >
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
