"use client";
import React from "react";
import {ContactCard} from "./Cards";
import { VisitCard } from "./Cards";
import { Fade } from "react-reveal";

export default function contactUs() {
  const RR_heads = 
    {
        id:"RR Campus",
        campus:"RR Campus",

        name1: "Shrishti A",
        phoneno1: "96064 00805",
        phonelink1:"tel:+919606400805",
        emailID1: "shrish.tea.a@gmail.com   ",
        emailIDlink1: "mailto:shrish.tea.a@gmail.com",

        name2: "Samarth S Rao",
        phoneno2: "77384 20872",
        phonelink2:"tel:+917738420872",
        emailID2: "samarthraaoo@gmail.com",
        emailIDlink2:"mailto:samarthraaoo@gmail.com",
    };
  
  const EC_heads = 
      {
        id:"EC Campus",
        campus:"EC Campus",

        name1: "Deepika Indran",
        phoneno1:"85530 30046",
        phonelink1:"tel:+9185530 30046",
        emailID1: "deepikaindran@gmail.com",
        emailIDlink1: "mailto:deepikaindran@gmail.com",

        name2: "Sampann Raheja",
        phoneno2: "91087 90891",
        phonelink2:"tel:+919108790891",
        emailID2: "sampann2002@gmail.com",
        emailIDlink2: "mailto:sampann2002@gmail.com",
    };
  const VisitData = 
    {
        name1: "PES Ring Road",
        address1: "100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085",
        loclink1: "https://maps.app.goo.gl/8RnRonuWSjppJTp7A",
        name2: "PES Electronic City",
        address2: "VM67+HVP, Hosur Rd, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100",
        loclink2: "https://maps.app.goo.gl/oq6uQ1bW9xfb5P246",

    };


  return (
    <div className="h-fit " style={{ backgroundColor: "white" }}>
      <Fade left>
        <div className="flex flex-box justify-center text-center">
          <h1 className="text-black text-5xl mb-16 mt-16 lg:mb-8 lg:mt-8">
            Contact Us
          </h1>
        </div>
      </Fade>

      <div 
        className="mx-auto w-fit grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-20 "
      >
        <ContactCard cardData={RR_heads} />
        <ContactCard cardData = {EC_heads}/>
        <VisitCard cardData={VisitData}/>
      </div>


      <br />
    </div>
  );
}
