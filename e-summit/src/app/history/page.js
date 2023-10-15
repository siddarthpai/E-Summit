"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

const History = () => {
  return (
    <div style={{ backgroundColor: "#00214c" }}>
      <Navbar />
      <div className="flex items-center justify-center relative top-40 mt-16">
        <div className="grid grid-rows-2 gap-16">
          <div className="">
            <Image src="/esummit.png" width={200} height={200} />
          </div>
          <div className="text-white">
            <h1>Welcome to the History Section!</h1>
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCarousel />
      </div>

      <ReverseHorizontalScrollCarousel />
      <HorizontalScrollCarousel />
      <div className="flex items-center justify-center">
        <h1 className="text-center text-2xl text-white mb-8 sm:text-5xl">
          Stay Tuned for what we have in store this year! <br /> Check out our
          events !
        </h1>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const ReverseHorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-35%", "1%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default History;

const cards = [
  {
    url: "test1.jpg",
    title: "Image 1",
    id: 1,
  },
  {
    url: "test2.jpg",
    title: "Image 2",
    id: 2,
  },
  {
    url: "test1.jpg",
    title: "Image 1",
    id: 3,
  },
  {
    url: "test2.jpg",
    title: "Image 2",
    id: 4,
  },
  {
    url: "test1.jpg",
    title: "Image 1",
    id: 5,
  },
];

const cards2 = [
  {
    url: "background.jpg",
    title: "Image 1",
    id: 1,
  },
  {
    url: "background copy.jpg",
    title: "Image 2",
    id: 2,
  },
  {
    url: "background.jpg",
    title: "Image 1",
    id: 3,
  },
  {
    url: "background copy.jpg",
    title: "Image 2",
    id: 4,
  },
  {
    url: "background.jpg",
    title: "Image 1",
    id: 5,
  },
];

const cards3 = [
  {
    url: "background.jpg",
    title: "Image 1",
    id: 1,
  },
  {
    url: "background copy.jpg",
    title: "Image 2",
    id: 2,
  },
  {
    url: "background.jpg",
    title: "Image 1",
    id: 3,
  },
  {
    url: "background copy.jpg",
    title: "Image 2",
    id: 4,
  },
  {
    url: "background.jpg",
    title: "Image 1",
    id: 5,
  },
];
