'use client';

import { Carousel } from 'flowbite-react';
import Landing from '../landingpage/page';
import { Fade, Rotate, Zoom } from 'react-reveal';

export default function DefaultCarousel() {
  return (
    <Fade bottom>
      <div className="h-screen p-2">
        <Carousel>
          <div>
            <Landing />
          </div>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
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
