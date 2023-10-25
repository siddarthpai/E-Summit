import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(true);

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleToggleBackground = () => {
    setIsLightBackground((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbar");

      if (navbar && !navbar.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleCloseMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <div
        id="navbar"
        className={`grid grid-cols-2 ${
          isLightBackground ? "light-bg" : "dark-bg"
        }`}
      >
        <div className="absolute left-0 mb-16 mr-16 mt-5 lg:ml-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 lg:space-x-6">
              <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-y-0 lg:space-x-7">
                <img
                  src="/pes.png"
                  className="ml-4 lg:mt-4 w-24 h-16 lg:w-44 lg:h-auto"
                  priority
                  alt="Pes"
                />
                <img
                  src="/ecell.png"
                  className=" ml-6 mt-0 w-12 lg:w-20 h-auto lg:h-auto"
                  priority
                  alt="Ecell"
                />
                <img
                  src="/eclub.png"
                  className=" ml-6 mt-3 w-12 h-auto lg:w-20 lg:h-auto"
                  priority
                  alt="Eclub"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-between "
          style={{ position: "fixed", width: "100%", zIndex: 1000 }}
        >
          <nav>
            <section className="MOBILE-MENU flex">
              <div
                className={`HAMBURGER-ICON space-y-2 fixed right-0 mr-4 mt-8 lg:mr-24 lg:mt-24 z-50  
                }`}
                onClick={handleToggleNav}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>
              <div
                className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
                style={{ zIndex: 50 }}
              >
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <ScrollLink
                      to="aboutus"
                      smooth={true}
                      duration={500}
                      onClick={handleCloseMenu}
                    >
                      About Us
                    </ScrollLink>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <ScrollLink
                      to="events"
                      smooth={true}
                      duration={500}
                      onClick={handleCloseMenu}
                    >
                      Events
                    </ScrollLink>
                  </li>
                  <li
                    className="border-b border-gray-400 my-8 uppercase"
                    onClick={handleCloseMenu}
                  >
                    <a href="/history">History</a>
                  </li>

                  <li className="border-b border-gray-400 my-8 uppercase">
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      onClick={handleCloseMenu}
                    >
                      Contact Us
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
        </div>
      </div>
      <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 25%;
            height: 100vh;
            top: 0;
            right: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
          @media (max-width: 767px) {
            .showMenuNav {
              display: block;
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              right: 0;
              background: white;
              z-index: 10;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
            }
          }
          .light-bg {
            background-color: white; /* Set your light background color */
          }
          .dark-bg {
            background-color: #333; /* Set your dark background color */
          }
          .light-icon {
            color: black; /* Set your light icon color */
          }
          .dark-icon {
            color: white; /* Set your dark icon color */
          }
        `}</style>
    </div>
  );
}
