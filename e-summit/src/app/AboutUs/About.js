"use client";

import React from "react";
import { Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { Slide } from "react-reveal";
import { useState } from "react";
import "./style.css";
import { Squada_One } from "next/font/google";

const squada = Squada_One({ subsets: ["latin"], weight: "400" });

export default function About() {
  const myStyle = {
    backgroundImage: "url('/background copy.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  const [open, setOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExploreClick = () => {
    setComingSoonOpen(true);
  };

  const handleComingSoonClose = () => {
    setComingSoonOpen(false);
  };

  return (
    <div style={myStyle} className="bg-fixed">
      <div className={`h-fit lg:h-screen text-white ${squada.className}`}>
        <div className="flex flex-box justify-center align-center text-center">
          <div className="m-16 lg:m-32 grid grid-rows-3 h-screen w-full">
            <Slide left cascade>
              <div
                className="rounded-lg grid grid-cols-2 h-5/6 "
                style={{ backgroundColor: "#958EE8" }}
              >
                <div className="flex items-center justify-center">
                  <h1 className="text-7xl lg:text-7xl align-middle m-5">
                    About <br /> Us
                  </h1>
                </div>

                <button
                  className="relative top-2/3 left-1/4 lg:left-2/3 right- border-2 border-black p-2 rounded-md bg-white text-black lg:p-5 w-fit h-fit "
                  onClick={handleClickOpen}
                >
                  Read More
                </button>
              </div>
              <div className="grid gap-16mt-32 lg:grid lg:grid-cols-2 space-y-4 lg:space-y-0 lg:space-x-4">
                <div style={{ backgroundColor: "#958EE8" }}>
                  <div className="mt-8 mb-10 lg:mt-18 lg:mb-18">
                    <h1 className="text-7xl">Workshops</h1>
                    <button
                      className="mt-16 border-2 border-black p-2 rounded-md bg-white text-black lg:p-5"
                      onClick={handleExploreClick}
                    >
                      Explore
                    </button>
                  </div>
                </div>
                <div style={{ backgroundColor: "#958EE8" }}>
                  <div className="mt-8 lg:mt-18 lg:mb-18">
                    <h1 className="text-7xl">Speaker Sessions</h1>
                    <button
                      className="mt-2 mb-2  border-2 border-black p-2 rounded-md bg-white text-black lg:p-5"
                      onClick={handleExploreClick}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <Dialog
          id="Dialog-box"
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              minHeight: "75%",
              maxHeight: "75%",
              maxWidth: "75%",
              minWidth: "75%",
              backgroundColor: "#00214C",
              color: "white",
              fontFamily: squada.fontFamily,
              borderRadius: "40px",
            },
          }}
        >
          <h1 className="m-8 text-xl lg:text-3xl" style={{ color: "white" }}>
            About ESummit'23
          </h1>
          <hr />
          <DialogContent>
            <div>
              <p className="text-xl lg:text-2xl mt-5">
                ESummit’23 is one of Bangalore’s biggest entrepreneurial events
                held over the span of three days and is a gateway to a world of
                innovation and entrepreneurship.
              </p>
              <p className="text-xl lg:text-2xl mt-5">
                Here’s your chance to put your entrepreneurial skills to the
                test and win exciting prizes. You can also explore captivating
                talks, enriching workshops, connect with like-minded
                individuals.
              </p>
            </div>
          </DialogContent>
          <DialogActions style={{ padding: "32px 32px" }}>
            <button
              onClick={handleClose}
              className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
            >
              Close
            </button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={comingSoonOpen}
          onClose={handleComingSoonClose}
          PaperProps={{
            style: {
              minHeight: "200px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              fontFamily: squada.fontFamily,
              borderRadius: "20px",
              padding: "32px",
              textAlign: "center",
            },
          }}
        >
          <h1 className="text-3xl mb-4">Coming Soon!</h1>
          <p className="text-lg">
            We'll be releasing this soon! Stay tuned for updates!
          </p>
          <DialogActions>
            <button
              onClick={handleComingSoonClose}
              className="border-2 border-white p-2 rounded-md bg-transparent text-white mt-4"
            >
              Close
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
