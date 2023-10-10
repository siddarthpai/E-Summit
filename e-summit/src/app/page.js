import React from "react";
import Image from "next/image";
import Landing from "./landingpage/page";
import About from "./about/About";
import Stay from "./staytuned";
import Navi from "./NavBar/Navbar"
import Sxample from "./examplePage/example";

export default function Home() {
  return (
    <div>
      <Navi/>
      <Landing />
      <About />
      <Sxample/>
    </div>
  );
}
