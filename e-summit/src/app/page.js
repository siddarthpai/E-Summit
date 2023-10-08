import React from "react";
import Image from "next/image";
import Landing from "./landingpage/page";
import About from "./about/About";
export default function Home() {
  return (
    <div>
      <Landing />
      <About />
    </div>
  );
}
