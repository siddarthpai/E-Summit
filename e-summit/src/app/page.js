import React from 'react';
import Image from 'next/image';
import Landing from './landingpage/page';
import About from './about/About';
import History from './history/page';
import Events from './events/Events';
import DefaultCarousel from './carousels/Carousel';
import CardCarousel from './carousels/CardCarousel';
export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Events />
      <DefaultCarousel />
      <CardCarousel />
    </div>
  );
}
