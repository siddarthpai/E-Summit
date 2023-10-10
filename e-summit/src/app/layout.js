"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import Splash from "./splashscreen/Spashscreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { path } from "animejs";
import About from "./about/About";
import Background from "./Background";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const isHome = pathName === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <html lang="en">
      <body className={poppins.className}>
        {isLoading && isHome ? (
          <Splash finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Background />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
