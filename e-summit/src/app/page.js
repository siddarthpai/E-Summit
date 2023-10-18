import React from 'react';
import Image from 'next/image';
import Landing from './landingpage/page';
import About from './About';
import History from './history/page';
import Events from './events/Events';
import ContactUs from './ContactUs/contactUs';
import DefaultCarousel from './carousels/Carousel';
import CardCarousel from './carousels/CardCarousel';

import AboutUsCarousel from './carousels/AboutUsCarousel';

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutUsCarousel />
      <Events />
      {/* <DefaultCarousel /> */}
      {/* <CardCarousel /> */}
      <ContactUs />
    </div>
  );
}
