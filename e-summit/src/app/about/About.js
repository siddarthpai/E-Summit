"use client";
import React from "react";
import Fade from "react-reveal/Fade";

class About extends React.Component {
  render() {
    return (
      <div className="grid h-screen place-items-center ">
        <Fade left>
          <h1 className="font-bold text-8xl hover:text-red-500">
            What Happens When
          </h1>
          <h1 className="font-bold text-5xl hover:text-red-500">
            Two of the BIGGEST Entrepreneurial Clubs
          </h1>
          <h1 className="font-bold text-7xl hover:text-red-500">
            <i>Join Hands?</i>
          </h1>
        </Fade>
      </div>
    );
  }
}

export default About;
