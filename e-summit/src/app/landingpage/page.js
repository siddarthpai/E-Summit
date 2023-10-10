"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";
export default function landing() {
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
