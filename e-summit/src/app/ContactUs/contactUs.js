"use client";
import React from "react";
import {SquishyCard} from "./Cards";
import { AddressCard } from "./Cards";
import { Fade } from "react-reveal";
export default function contactUs() {
  const cardData = [
    {
      id: 1,
      name: "Shrishti A",
      emailID: "blalhblah.com",
      phonno: "tobf",
    },
    {
      id: 2,
      name: "Deepika",
      emailID: "blah.com",
      phonno: "tobf",
    },
    {
        id: 3,
        name: "Shrishti A",
        emailID: "blah.com",
        phonno: "tobf",
    },
    {
        id: 4,
        name: "Deepika",
        emailID: "blah.com",
        phonno: "tobf",
    },
  ];
  const widecardData = [
    {
        id:1,
        title: "PES RR",
        adddress: "blah blah",
        link:"www.google.com",
    },
    {
        id:2,
        title: "PES EC",
        address: "blah",
        link:"www.bing.com",
    },
  ]
  return (
    <div className="h-fit " style={{ backgroundColor: "white" }}>
      <Fade left>
        <div className="flex flex-box justify-center text-center">
          <h1 className="text-black text-5xl mb-16 mt-16 lg:mb-32 lg:mt-32">
            Contact Us
          </h1>
        </div>
      </Fade>

      <SquishyCard cardData={cardData} />
      <br />
      {/* <AddressCard cardData = {widecardData}/> */}
      <br />
      <br />
      <br />
    </div>
  );
}
