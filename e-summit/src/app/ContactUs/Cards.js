import { motion } from "framer-motion";

import Zoom from "react-reveal/Zoom";


export const ContactCard = ({cardData}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-30 w-100 shrink-0 overflow-hidden rounded-xl  p-8"
      style={{ backgroundColor: "#00214c" }}
    >
      <motion.span
        initial={{ scale: 0.85 }}
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="my-2 block origin-top-left font-mono text-3xl text-white leading-[1.2]"
      >
        {cardData.campus}
      </motion.span>
      <div className="relative z-10 text-white mt-5 mb-5">
        <p className="text-xl">{cardData.name1}</p>
        <p><a href={cardData.phonelink1}>Phone: {cardData.phoneno1}</a></p>
        <p><a href= {cardData.emailIDlink1}>Email: {cardData.emailID1}</a></p>
      </div>
      <div className="relative z-10 text-white">
        <p className="text-xl">{cardData.name2}</p>
        <p><a href={cardData.phonelink2}>Phone: {cardData.phoneno2}</a></p>
        <p><a href = {cardData.emailIDlink2}>Email: {cardData.emailID2}</a></p>
      </div>
      <Background/>
    </motion.div>
  );
};

export const VisitCard = ({cardData}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-30 w-80 shrink-0 overflow-hidden rounded-xl  p-8"
      style={{ backgroundColor: "#00214c" }}
    >
      <motion.span
        initial={{ scale: 0.85 }}
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="my-2 block origin-top-left font-mono text-3xl text-white leading-[1.2]"
      >
        Visit Us 
      </motion.span>
      <div className="relative z-10 text-white mt-5 mb-5">
        <a href = {cardData.loclink1} 
          className="text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardData.name1}
        </a>
        <p className="text-xs">{cardData.address1}</p>
        {/* <a href= {cardData.loclink1} className="hover:text-gray text-xs">View on map</a> */}
      </div>
      <div className="relative z-10 text-white mt-5 mb-5">
        <a href = {cardData.loclink1} 
          className="text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardData.name2}
        </a>
        <p className="text-xs">{cardData.address2}</p>
        {/* <a href= {cardData.loclink2} className="hover:text-gray text-xs">View on map</a> */}
      </div>
      <Background/>
    </motion.div>
  );
};


const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
    </motion.svg>
  );
};

