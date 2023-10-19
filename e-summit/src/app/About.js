"use client";
import React from "react";
import { Slide } from "react-reveal";
import { useRef } from "react";
import Bounce from "react-reveal/Bounce";
function About() {
  const aboutRef = useRef(null);
  return (
    <div ref={aboutRef}>
      <div class="bg-white h-screen border-black border-4">
        <div className="flex justify-center align-center">
          <h2 class="text-7xl font-bold m-16  hover:text-blue-950">About</h2>
        </div>
        <div class="grid grid-rows-2 gap-16  text-center lg:text-3xl ">
          <Slide left cascade>
            <div>
              <p class="mb-16 hover:text-fuchsia-700 ">
                ESummit’23 is one of Bangalore’s biggest entrepreneurial events
                held over the span of three days and is a gateway to a world of
                innovation and entrepreneurship.
              </p>
              <p class="hover:text-fuchsia-700">
                Here’s your chance to put your entrepreneurial skills to the
                test and win exciting prizes. You can also explore captivating
                talks, enriching workshops, connect with like-minded
                individuals.
              </p>
            </div>
          </Slide>
          <Slide right cascade>
            <div>
              <p class="mb-16 hover:text-fuchsia-700  ">
                It is the perfect opportunity to fuel your entrepreneurial
                aspirations and expand your horizons.
              </p>
              <p class="hover:text-fuchsia-700">
                Mark your calendars for the{" "}
                <u>3rd, 4th and 5th of November, 2023!</u>
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default About;
