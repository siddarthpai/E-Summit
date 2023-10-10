"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
export default function landing() {
  const externalImage = "https://i.imgur.com/JeKbrbt.jpg";
  return (
    <div id = "landing"
      className="h-screen bg-fixed"
      style={{
        backgroundImage: `url(${externalImage})`,
        backgroundSize: "100% auto",
      }}
    >
      <div className="absolute left-0 m-16">
        <Image src="/esummit.png" width={100} height={100}></Image>
      </div>
      <div class="grid h-screen place-items-center text-white">
        <Fade left>
          <h1 class="font-bold mt-64">
            IDEATE.&ensp; INNOVATE. &ensp;INCUBATE.{" "}
          </h1>
          <h1 class="font-bold text-7xl mb-64">E-Club x E-Cell </h1>
          <h1 className="font-bold text-4xl mb-32">E-Summit 23'</h1>
        </Fade>
      </div>

      {/* <div className="rotate-90 absolute bottom-28 right-0  ">
        <div className="animate-bounce ">
          <span className="animate-bounce text-white  uppercase tracking-widest text-xl whitespace-nowrap ">
            Scroll Down ↠{" "}
          </span>
        </div>
      </div> */}
    </div>
  );
}
