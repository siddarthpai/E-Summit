import Image from "next/image";
import Red from "../../public/background.jpg";

export default function Background() {
  return (
    <Image
      src={Red}
      quality={100}
      fill
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
