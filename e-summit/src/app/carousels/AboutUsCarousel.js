"use client";

import { Carousel } from "flowbite-react";
import About from "../AboutUs/About";
import { Fade, Rotate, Zoom } from "react-reveal";

export default function CardCarousel() {
  const aboutSectionBackground1 = {
    backgroundImage: "url('/background copy.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  const aboutSectionBackground2 = {
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    // Fade for animatio top, bottom, left, right
    <Fade bottom>
      {/* carousel component */}
      {/* change the width and height accordingly to your need */}
      <div className="h-screen p-2">
        <Carousel>
          <About />
          <div
            style={aboutSectionBackground1}
            className="bg-fixed flex h-full items-top justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            <h3 className="font-semibold text-3xl text-white p-10">
              About Us Section 2
            </h3>
          </div>
          <div
            style={aboutSectionBackground2}
            className="bg-fixed flex h-full items-top justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          >
            <h3 className="font-semibold text-3xl text-white p-10">
              About Us Section 3
            </h3>
          </div>
        </Carousel>
      </div>
    </Fade>
  );
}
