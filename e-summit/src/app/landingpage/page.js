"use client";
import Image from "next/image";
import React from "react";
import { Fade, Rotate, Zoom } from "react-reveal";
import Social from "../social/Socialicons";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useState } from "react";

export default function landing() {
  const [showInstaLinks, setShowInstaLinks] = useState(false);
  const [showLinkedInLinks, setShowLinkedInLinks] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleInstaClick = () => {
    setShowInstaLinks(!showInstaLinks);
  };

  const handleLinkedInClick = () => {
    setShowLinkedInLinks(!showLinkedInLinks);
  };

  return (
    <div className="h-screen">
      <div id="navbar" className="grid grid-cols-2">
        <div className="absolute left-0 m-16">
          <div className="grid grid-cols-3 gap-2">
          <div class="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
  <img src="/ecell.png" class="w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24" width="80" height="80" />
  <img src="/cross.png" class="w-14 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-16" width="80" height="80" />
  <img src="/eclub.png" class="w-14 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" width="80" height="80" />
</div>



          </div>
        </div>
        <div className="flex items-center justify-between ">
          <nav>
            <section className="MOBILE-MENU flex  ">
              <div
                className="HAMBURGER-ICON space-y-2 absolute right-0 mr-4 mt-20  lg:mr-32 lg:mt-24"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a>About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a>Events</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/history">History</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
          <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 25%;
            height: 100vh;
            top: 0;
            right: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
            @media (max-width: 767px) {
              .showMenuNav {
                display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            right: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
              }
            }
        `}</style>
        </div>
      </div>
      {/* End of Navbar section */}
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
        className= "onlySmall:left-1/4 left-0 text-white ml-8 onlySmall:gap-7 gap-3 absolute bottom-0 lg:bottom-28 onlySmall:grid onlySmall:grid-cols-2 lg:grid-rows-2 "
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
                <a href="https://www.instagram.com/entrepreneurshipclub.pes/" 
                  target="_blank" rel="noopener noreferrer" 
                  className="mt-2 mb-5"
                  >
                  E-Club
                </a>
                <a href="https://www.instagram.com/pes_ecell/"
                  target="_blank" rel="noopener noreferrer"
                >E-Cell
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
                <a href="https://www.linkedin.com/company/the-entrepreneurship-club-of-pes-university/" 
                className="mt-2 mb-5"
                target="_blank" rel="noopener noreferrer"
                >
                  E-Club
                </a>
                <a href="https://www.linkedin.com/company/pes-ecell/"
                  target="_blank" rel="noopener noreferrer"
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

      <style>{`
      .social_style {

        left-0 
        text-white 
        ml-8 gap-3 
        absolute 
        bottom-0 
        lg:bottom-28 
        grid-rows-2

      }
      `
        }    
      </style>
    </div>

    // <div class="h-screen bg-fixed">

    // </div>
  );
}
