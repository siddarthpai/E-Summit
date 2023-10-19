"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import Splash from "./splashscreen/Spashscreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
      <head>
        <link rel="icon" href="/esummit.png" sizes="any" />
        <title>ESummit'23</title>
      </head>
      <body className={poppins.className}>
        {isLoading && isHome ? (
          <Splash finishLoading={() => setIsLoading(false)} />
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
