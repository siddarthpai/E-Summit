import Image from "next/image";
import Red from "../../public/background.jpg";
import Alt from "../../public/background copy.jpg";

export default function Background() {
  return (
    <div
      style={{
        backgroundAttachment: "scroll",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Image src={Alt} quality={100} layout="fill" objectFit="cover" />
    </div>
  );
}
