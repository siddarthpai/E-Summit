'use client';

import { Carousel } from 'flowbite-react';
import Landing from '../landingpage/page';
import { Fade, Rotate, Zoom } from 'react-reveal';

export default function CardCarousel() {
  return (
    // Fade for animatio top, bottom, left, right
    <Fade bottom>
      {/* carousel component */}
      {/* change the width and height accordingly to your need */}
      <div className="h-96 w-96 p-2">
        <Carousel>
          {/* Every Separate div will become a section in the slider */}
          <div>
            <Landing />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
        </Carousel>
      </div>
    </Fade>
  );
}
