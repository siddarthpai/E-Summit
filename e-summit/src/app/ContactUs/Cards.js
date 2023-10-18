import { motion } from "framer-motion";

import Zoom from "react-reveal/Zoom";

export const SquishyCard = ({ cardData }) => {
  return (
    <div className="mx-auto w-fit grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-20 ">
      {cardData.map((card) => (
        <Zoom left>
          <Card className="mb-16" key={card.id} {...card} />
        </Zoom>
      ))}
    </div>
  );
};

export const AddressCard = ({ cardData }) => {
  return (
    <div className="mx-auto w-auto grid grid-cols-1 gap-5">
      {cardData.map((card) => (
        <Zoom left>
          <WideCard className="mb-16" key={card.id} {...card} />
        </Zoom>
      ))}
    </div>
  );
};

const WideCard = ({ title, address, link }) => {
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
      className="relative h-30 w-37 rounded-xl  p-8 "
      style={{ backgroundColor: "#00214c" }}
    >
      <div className="relative z-10 text-white">
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
          className="my-2 block origin-top-left font-mono text-3xl font-black leading-[1.2]"
        >
          {title}
        </motion.span>
        <p><a href={link}>{address}</a></p>
      </div>
    </motion.div>
  );
};

const Card = ({ name, emailID, phoneno }) => {
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
      <div className="relative z-10 text-white">
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
          className="my-2 block origin-top-left font-mono text-3xl font-black leading-[1.2]"
        >
          {name}
        </motion.span>
        <p>Phone No: {phoneno}</p>
        <p>Email: {emailID}</p>
      </div>
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

