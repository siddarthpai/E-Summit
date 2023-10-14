"use client";
import React from "react";
import Fade from "react-reveal/Fade";

class About extends React.Component {
  render() {
    return (
      <div className="h-screen w-full">
        <div id="about" className="grid h-screen place-items-center ">
          <Fade left>
            <h1 className="font-bold hover:text-red-500 text-3xl md:text-5xl lg:text-8xl lg:m-16 ">
              What Happens When
            </h1>
            <h1 className="font-bold hover:text-red-500 text-3xl mt-16 md:text-3xl lg:text-6xl">
              Two of the BIGGEST
              <br />
              Entrepreneurial Clubs
            </h1>
            <h1></h1>
            <h1 className="font-bold  hover:text-red-500 text-3xl mb-8 md:text-5xl lg:text-7xl">
              <i>Join Hands?</i>
            </h1>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;
