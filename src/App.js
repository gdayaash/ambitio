import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function App() {
  return (
    <div className="w-full mx-auto text-center">
      <Navbar />
      <BannerImage />
      <Heading />
      <Explore />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar w-full bg-white px-4 py-5 md:px-10 md:py-5 flex items-center justify-between">
      {/* Mobile Navbar*/}
      <div className="flex  items-center w-full md:w-auto justify-between md:justify-start md:hidden space-x-2">
        <img
          src="./assets/mobile-logo.png"
          alt="Amibito"
          className="block md:hidden w-7"
        />

        <button className="md:hidden bg-transparent rounded-2xl space-x-1 inline-flex items-center p-2 border-solid border-2 border-red-500">
          <a href="https://example.com">Speak with our Experts</a>
        </button>

        <button
          className="block md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="./assets/hamburger.png" alt="menu" className="w-10" />
        </button>
      </div>

      {/* Mobile Navbar*/}

      {/* Desktop Navbar*/}
      <div className="hidden md:flex justify-between w-full items-center">
        <img src="./assets/logo.png" alt="Amibito" />

        <div className="menu">
          <ul className="menu__list flex items-center space-x-4 cursor-pointer">
            <li className="flex items-center space-x-2">
              <a href="https://example.com">Study-Abroad</a>
              <img src="./assets/chev.png" alt="drop" />
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://example.com">Bootcamps</a>
              <img src="./assets/chev.png" alt="drop" />
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://example.com">Products</a>
              <img src="./assets/chev.png" alt="drop" />
            </li>
            <li className="flex items-center space-x-2">
              <img src="./assets/diamond.png" alt="drop" />
              <a href="https://example.com">Ambitio Pro</a>
            </li>
            <li className="flex items-center space-x-2">
              <img src="./assets/crown.png" alt="drop" />
              <a href="https://example.com">Ambitio Elite</a>
            </li>
          </ul>
        </div>

        <div className="contact-btn">
          <button className="bg-transparent rounded-2xl space-x-2 inline-flex items-center px-3 py-3 border-solid border-2 border-red-500">
            <img src="./assets/phone.png" alt="Amibito" />
            <a href="https://example.com">Speak with our Experts</a>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white p-5 shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4">
            <li className="flex items-center space-x-2">
              <a href="https://example.com">Study-Abroad</a>
              <img src="./assets/chev.png" alt="drop" />
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://example.com">Bootcamps</a>
              <img src="./assets/chev.png" alt="drop" />
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://example.com">Products</a>
              <img src="./assets/chev.png" alt="drop" />
            </li>
            <li className="flex items-center space-x-2">
              <img src="./assets/diamond.png" alt="drop" />
              <a href="https://example.com">Ambitio Pro</a>
            </li>
            <li className="flex items-center space-x-2">
              <img src="./assets/crown.png" alt="drop" />
              <a href="https://example.com">Ambitio Elite</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function BannerImage() {
  return (
    <section className="banner-image">
      <div className="flex flex-col justify-center items-center">
        <img
          src="./assets/bannerlogo.png"
          alt="logo"
          className="rot animate-pulse drop-shadow-[0_0_120px_#b10612]"
        />
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="hero-banner mt-4 md:mt-6 p-2 md:p-5">
      <h1 className="text-black md:font-bold font-regular text-center text-5xl p-4">
        Give the best shot <br />
        at your <span className="hero-banner__span">Dream University</span>
      </h1>

      <p className="hero-banner__desc text-center">
        Get expert help, personalised guidance, and all the support you need to
        <br />
        <b className="text-black">
          increase your chances of success with Ambitio Elite.
        </b>
      </p>

      <div className="cta text-center mt-4 md:mt-2">
        <button className="cta__btn px-4 py-3 rounded-md text-white w-full md:w-auto">
          10x your chances with Ambitio
        </button>
      </div>
    </div>
  );
}

//Counter Code

const Counter = ({ value }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      count: value,
      transition: { duration: 4, ease: "easein" },
    });

    let start = 0;
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / 2000, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame((timestamp) => {
      start = timestamp;
      step(timestamp);
    });
  }, [controls, value]);

  return (
    <motion.h2
      className="no font-grot text-8xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{count}</span>
      {value === 5000 ? "" : "%"}
    </motion.h2>
  );
};
//Counter Code

function Explore() {
  return (
    <div className="explore mt-8 p-2 md:p-5">
      <div className="px-5 py-16 space-y-5 rounded-xl animate-gradient bg-[linear-gradient(90deg,rgba(254,218,220,1)_0%,rgba(252,225,226,1)_35%,rgba(254,254,254,1)_100%)]">
        <div className="flex flex-col space-y-2">
          <h2 className="font-grot font-bold text-3xl">
            We let <span className="hero-banner__span">our numbers</span> do the
            talking
          </h2>
          <p className="text-base tracking-[0.1em]">
            Our users love us and we know you will to! Explore our products.
          </p>
        </div>

        <div className="counter flex flex-wrap justify-center md:space-x-20 items-center space-y-4 md:space-y-0">
          <div className="flex flex-col">
            <Counter value={98.2} />
            <p className="text-xl">got into their Target Program</p>
          </div>
          <div className="flex flex-col">
            <Counter value={4.8} />
            <p className="text-xl">Google Rating</p>
          </div>
          <div className="flex flex-col">
            <Counter value={5000} />
            <p className="text-xl">Students Assisted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
