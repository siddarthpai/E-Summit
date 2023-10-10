import React, { useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

const Spashscreen = ({ finishLoading }) => {
  const [isMounted, setisMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.5,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setisMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className="flex h-screen items-center justify-center bg-black"
      isMounted={isMounted}
    >
      <Image id="logo" src="/esummit.png" width={100} height={100} />
    </div>
  );
};

export default Spashscreen;
