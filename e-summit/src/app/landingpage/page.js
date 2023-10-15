"use client";
import Image from "next/image";
import React from "react";
import { Fade, Rotate, Zoom } from "react-reveal";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

export default function landing() {
  const myStyle = {
    backgroundImage: "url('/background copy.jpg')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  const [showInstaLinks, setShowInstaLinks] = useState(false);
  const [showLinkedInLinks, setShowLinkedInLinks] = useState(false);

  const handleInstaClick = () => {
    setShowInstaLinks(!showInstaLinks);
  };

  const handleLinkedInClick = () => {
    setShowLinkedInLinks(!showLinkedInLinks);
  };

  return (
    <div style={myStyle} className="bg-fixed">
      <Navbar />
      <div id="center-text" class="grid h-screen place-items-center text-white">
        <Fade left>
          <div className="grid h-screen mt-40 lg:m-40 place-items-center text-white ">
            <Image src="/esummit.png" width={200} height={200}></Image>
            <h1 className="font-bold text-4xl mb-72 md:text-5xl lg:text-7xl lg:mb-64">
              {" "}
              E-Summit 23'
            </h1>
          </div>
        </Fade>
      </div>
      {/* End of center of landing page */}
      <div
        id="socials"
        // className="left-0 text-white ml-8 gap-3 absolute bottom-0 lg:bottom-28 grid-rows-2 " // desktop only
        className="onlySmall:left-1/4 left-0 text-white ml-8 onlySmall:gap-7 gap-3 absolute bottom-0 lg:bottom-28 onlySmall:grid onlySmall:grid-cols-2 lg:grid-rows-2 "
      >
        <div id="insta" className="mb-5">
          <Zoom top left opposite cascade>
            <div onClick={handleInstaClick}>
              <BsInstagram size={40} />
            </div>
          </Zoom>
          {showInstaLinks && (
            <Rotate top left cascade>
              <div className="flex flex-col font-bold">
                <a
                  href="https://www.instagram.com/entrepreneurshipclub.pes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mb-5"
                >
                  E-Club
                </a>
                <a
                  href="https://www.instagram.com/pes_ecell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-Cell
                </a>
              </div>
            </Rotate>
          )}
        </div>
        <div id="linkedin">
          <Zoom top left opposite cascade>
            <div onClick={handleLinkedInClick}>
              <AiOutlineLinkedin size={45} />
            </div>
          </Zoom>
          {showLinkedInLinks && (
            <Rotate top left cascade>
              <div className="flex flex-col font-bold ">
                <a
                  href="https://www.linkedin.com/company/the-entrepreneurship-club-of-pes-university/"
                  className="mt-2 mb-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-Club
                </a>
                <a
                  href="https://www.linkedin.com/company/pes-ecell/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-Cell
                </a>
              </div>
            </Rotate>
          )}
        </div>
      </div>
      {/* End of Socials divison */}
      <div className="hidden lg:block lg:rotate-90 absolute bottom-28 right-0  ">
        <div className="animate-bounce ">
          <span className="animate-bounce text-white  uppercase tracking-widest text-xl whitespace-nowrap ">
            Scroll Down ↠{" "}
          </span>
        </div>
      </div>

      <style>
        {`
      .social_style {

        left-0 
        text-white 
        ml-8 gap-3 
        absolute 
        bottom-0 
        lg:bottom-28 
        grid-rows-2

      }
      `}
      </style>
    </div>

    // <div class="h-screen bg-fixed">

    // </div>
  );
}
