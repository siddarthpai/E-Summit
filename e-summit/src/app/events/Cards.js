import { motion } from "framer-motion";
import React from "react";
import { Poppins } from "next/font/google";
import Zoom from "react-reveal/Zoom";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button, Theme, createTheme } from "@material-ui/core";
import "./style.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Poppins"',
    ].join(","),
  },
});

const getRandomAnimation = (index) => {
  if (index === 0 || index === 3) {
    return { scale: 1.05, rotate: 10 };
  } else if (index === 2 || index === 5) {
    return { scale: 1.05, rotate: -10 };
  } else {
    return { scale: 1, rotate: 0 };
  }
};

const SquishyCard = ({ cardData }) => {
  return (
    <div className="mx-auto w-fit grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-16 ">
      {cardData.map((card, index) => (
        <Zoom left key={card.id}>
          <Card
            className="mb-16"
            key={card.id}
            {...card}
            randomColor={
              index === 0 || index === 3
                ? "#748ADC"
                : index === 1 || index === 4
                ? "#958EE8"
                : index === 2 || index === 5
                ? "#A7C7F1"
                : ""
            }
            tilt={getRandomAnimation(index)}
          />
        </Zoom>
      ))}
    </div>
  );
};

const Card = ({ title, size, time, date, content, randomColor, tilt }) => {
  const [open, setOpen] = React.useState(false);
  const [animation, setAnimation] = React.useState(getRandomAnimation());

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  // Card 1 and 4
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: tilt,
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl  p-8"
      style={{ backgroundColor: randomColor }}
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
          className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
        >
          {title}
        </motion.span>
        <p>{size}</p>
        <p>{time}</p>
        <p>{date}</p>
      </div>
      <button
        onClick={handleClickToOpen}
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
      >
        Read More!
      </button>
      <Background />
      <Dialog
        id="Dialog-box"
        open={open}
        onClose={handleToClose}
        PaperProps={{
          style: {
            minHeight: "60%",
            maxHeight: "60%",
            maxWidth: "60%",
            minWidth: "60%",
            backgroundColor: "#00214C",
            color: "white",
            fontFamily: "monospace",
            borderRadius: "40px",
          },
        }}
      >
        <DialogTitle>
          <b>{title}</b>
        </DialogTitle>
        <hr />
        <DialogContent>
          <DialogContentText
            style={{ color: "white", fontFamily: "monospace" }}
          >
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleToClose}
            className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
          >
            Close X
          </button>
        </DialogActions>
      </Dialog>
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
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#00214c"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#00214c"
      />
    </motion.svg>
  );
};

export default SquishyCard;
