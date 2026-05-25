import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="border-t border-gray-200">
        <div className="wrapper py-8 sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <a href="" className="footer-el">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="" className="footer-el">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="footer-el">
                  Cookies
                </a>
              </li>
            </ul>
            <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
              <li>
                <a href="" rel="noreferrer" className="footer-el">
                  <i className="fa-brands fa-facebook fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" className="footer-el">
                  <i className="fa-brands fa-instagram fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" className="footer-el">
                  <i className="fa-brands fa-twitter fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" className="footer-el">
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>
              </li>
              <li>
                <a href="" rel="noreferrer" className="footer-el">
                  <i className="fa-brands fa-dribbble fa-lg"></i>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
