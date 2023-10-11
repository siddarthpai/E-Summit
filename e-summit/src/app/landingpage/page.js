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
    <div class="h-screen bg-fixed">
      <div id="navbar" className="grid grid-cols-2">
        <div className="absolute left-0 m-16">
          <Image src="/esummit.png" width={100} height={100}></Image>
        </div>
        <div className="flex items-center justify-between ">
          <nav>
            <section className="MOBILE-MENU flex  ">
              <div
                className="HAMBURGER-ICON space-y-2 absolute right-0 mr-32 mt-24"
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

      <div class="grid h-screen place-items-center text-white">
        <Fade left>
          <div className="grid h-screen place-items-center text-white">
            <h1 class="font-bol text-2xl mt-64">
              IDEATE.&ensp; INNOVATE. &ensp;INCUBATE.{" "}
            </h1>
            <div className="grid grid-cols-3 gap-2">
              <Image src="/ecell.png" width={100} height={100} />
              <Image src="/cross.png" width={100} height={100} />
              <Image src="/eclub.png" width={100} height={100} />
            </div>
            <h1 className="font-bold text-7xl mb-64"> E-Summit 23'</h1>
          </div>
        </Fade>
      </div>
      <div className="absolute bottom-28 left-0 text-white ml-8 p-5">
        <div className="mb-5">
          <Zoom top left opposite cascade>
            <div onClick={handleInstaClick}>
              <BsInstagram size={40} />
            </div>
          </Zoom>
          {showInstaLinks && (
            <Rotate top left cascade>
              <div className="flex flex-col font-bold">
                <a href="https://instagram.com" className="mt-2 mb-5">
                  E-Club PESU-ECC Instagram
                </a>
                <a href="https://instagram.com">E-Cell PESU-RR Instagram</a>
              </div>
            </Rotate>
          )}
        </div>
        <div>
          <Zoom top left opposite cascade>
            <div onClick={handleLinkedInClick}>
              <AiOutlineLinkedin size={45} />
            </div>
          </Zoom>
          {showLinkedInLinks && (
            <Rotate top left cascade>
              <div className="flex flex-col font-bold ">
                <a href="https://linkedin.com" className="mt-2 mb-5">
                  E-Club PESU-ECC LinkedIn
                </a>
                <a href="https://linkedin.com">E-Cell PESU-RR LinkedIn</a>
              </div>
            </Rotate>
          )}
        </div>
      </div>

      <div className="rotate-90 absolute bottom-28 right-0  ">
        <div className="animate-bounce ">
          <span className="animate-bounce text-white  uppercase tracking-widest text-xl whitespace-nowrap ">
            Scroll Down ↠{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
