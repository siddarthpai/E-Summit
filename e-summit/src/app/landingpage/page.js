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

  const handleInstaClick = () => {
    setShowInstaLinks(!showInstaLinks);
  };

  const handleLinkedInClick = () => {
    setShowLinkedInLinks(!showLinkedInLinks);
  };

  return (
    <div class="h-screen bg-fixed">
      <div className="absolute left-0 m-16">
        <Image src="/esummit.png" width={100} height={100}></Image>
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
