"use client";
import React from "react";
import Fade from "react-reveal/Fade";

class About extends React.Component {
  render() {
    return (
      <div className="grid h-screen place-items-center " id = "About">
        <Fade left>
          <h1 className="font-bold text-8xl">What Happens When</h1>
          <h1 className="font-bold text-6xl">
            Two of the BIGGEST Entrepreneurial Clubs
          </h1>
          <h1 className="font-bold text-7xl">
            <i>Join Hands?</i>
          </h1>
        </Fade>
      </div>
    );
  }
}

export default About;
