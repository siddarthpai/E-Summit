"use client";
import React from "react";
import Link from "next/link";

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("navbar toggled");
  };


  scrollToComponent = (componentName) => {
    const component = document.querySelector(`#${componentName}`);
    if (component) {
      component.scrollIntoView({block:  "start", behavior: "smooth", inline: 'nearest'});
    }
    //this.toggleNavbar();
    console.log("scroll")


  };

  render() {
    const navbarItems = [
      {
        label: "Home",
        href: "landing",
      },
      {
        label: "About",
        href: "About",
      },
      {
        label:"Example",
        href: "Example"
      },
    ];

    return (
      <div
      >
        <button type="button" class="fixed top-0 right-0 text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation"
            onClick={this.toggleNavbar}
        >
            <span class="sr-only">Toggle Navigation</span>
            <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </button>


        <div id="docs-sidebar" 
          //className={this.state.isOpen ? "showMenuNav" : "hideMenuNav"} 
          className={
            this.state.isOpen ? "fixed top-0 right-0 h-full w-1/1 md:w-1/6 sm:w-4/5 bg-black flex flex-col items-end justify-between transition-all duration-300 translate-x-0" : "fixed top-0 right-0 h-full w-1/1 md:w-1/6 sm:w-4/5 bg-black flex flex-col items-end justify-between transition-all duration-300 translate-x-full"
          }
        >
          
          <button type="button" class="fixed top-0 right-0 text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation"
            onClick={this.toggleNavbar}
            //REPEATED BUTTON
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>

            <nav className="fixed top-10 flex flex-col gap-4 jsutify-center ">
                {navbarItems.map((item) => (
                <Link
                  href=""
                  key={item.label}
                  //class="flex items-top w-full gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-900 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                  class = "flex justify-center items-center p-4 text-white "
                  onClick={() => this.scrollToComponent(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

        </div>

        <div className= {this.state.isOpen? "visibility: hidden":"rotate-90 absolute bottom-28 right-0 "}>
        <div className="animate-bounce ">
          <span className="animate-bounce text-white  uppercase tracking-widest text-xl whitespace-nowrap ">
            Scroll Down ↠{" "}
          </span>
        </div>
      </div>

      </div>

      
    );
  }
}

export default Navbar;
