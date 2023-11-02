import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import PanelistCard from "./SpeakerCard";
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
      name: "Rohit Agarwala ",
      title: "Founder @ Barely Opinionated",
      photo: "/rohit.jfif",
      description:
        "Empowering 5 million+ with ethical social, financial, and political education, a skilled media consultant at The Hub Bengaluru and mentor at Captain, with expertise in influencer marketing, content creation, and public speaking.",
    },
    {
      name: "Ishan Sharma",
      title: "Co-Founder of Sentora.ai and MarkitUp ",
      photo: "/ishan.jfif",
      description:
        " 22-year-old influencer with a 1.8M+ following, known for career and business discussions, collaboration with top companies like Google and Amazon, and hosting renowned guests on podcasts ,author of two successful books, including 'Unicorn Secret'.",
    },
  ];

  return (
    <div className="h-fit " style={{ backgroundColor: "#092049" }}>
      <Fade left>
        <div className="flex flex-box justify-center text-center">
          <h1 className="text-white text-5xl mb-16 mt-16">Speaker Session </h1>
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
          interval={7000}
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
