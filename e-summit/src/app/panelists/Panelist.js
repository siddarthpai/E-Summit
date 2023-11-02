import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import PanelistCard from "./PanelistCard";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";

import Image from "next/image";

const Speakers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Set isMobile based on screen width
    };

    handleResize(); // Call it once to set the initial value

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);
  const speakers = [
    {
      name: "Shreyans Sancheti",
      title: "Co-founder at Bluelearn",
      photo: "/shreyans.jfif",
      description:
        "A spirited BITS Pilani alumnus, who co-founded the dynamic ventures Blue Learn and Huloq.inc. Notably featured in Forbes' 30 under 30 Asia, he's taking the business world by storm with his innovative ventures.",
    },
    {
      name: "Vivek Sridhar",
      title: "CTO at Microsoft for Startups",
      photo: "/vivek.jfif",
      description:
        " A technophile , currently serves as Microsoft's CTO for Startups. His diverse background includes roles as a Senior Developer Advocate at DigitalOcean, Co-Founder/Chief Architect of NoodleNext Technology, and prior experience with BlackBuck and HCL and more !",
    },
    {
      name: "Deepa Bachu",
      title:
        "Director of User Experience at Google Co-Founder at Pensaar Design ",
      photo: "/deepa.jfif",
      description:
        " 15 years in the IT industry, navigated roles from software engineer to an Innovation and Global Strategy position at Intuit, India. Experienced in creating impactful global products, their specialties lie in innovation and profound customer comprehension.",
    },
    {
      name: "Ayush Singh",
      title: "Co-Founder of Team Antern and Second Brain Labs. ",
      photo: "/ayush.jfif",
      description:
        " Data science mentor with a transformative journey, helping thousands land high-paying jobs at companies like Google and IBM. Experienced in AI projects at startups like ZenML and Replayed.",
    },
    {
      name: "Sathya Prasad",
      title: "Director, Center for Innovation & Entrepreneurship",
      photo: "/satya.jpeg",
      description:
        "  3 decades of global experience, led breakthrough innovations at Intel and spearheaded the launch of SOLARCON India, amplifying the nation's solar mission,established a renowned tech innovation hub, he advises startup CEOs and serves as Guest Faculty at IIM Bangalore.",
    },
  ];

  return (
    <div className="h-fit " style={{ backgroundColor: "#7889D6" }}>
      <Fade left>
        <div className="flex flex-box justify-center text-center">
          <h1 className="text-white text-5xl mb-16 mt-16">Panel Discussion</h1>
        </div>
      </Fade>
      <div className="flex justify-center items-center">
        <Carousel
          showArrows={!isMobile}
          showStatus={false}
          showThumbs={false}
          centerMode
          centerSlidePercentage={100}
          autoPlay={true} // Enable auto play
          infiniteLoop={true} // Optional: Loop through the slides continuously
          interval={3000}
          className="w-11/12 lg:w-10/12"
        >
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center m-auto">
              <PanelistCard {...speaker} />
            </div>
          ))}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center item-center">
        <Image
          src="/esummit.png"
          width={100}
          height={100}
          style={{ width: "70px", hieght: "70px" }}
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default Speakers;
