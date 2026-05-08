import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="wrapper py-8 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Understand user flow and
            <strong className="text-indigo-600"> increase </strong>
            conversions
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit
            minima harum corporis iusto.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-6">
            <a className="action-btn" href="#">
              Get Started
            </a>
            <a className="info-btn" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
