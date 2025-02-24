"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  default as HeroImage,
  default as MobileHeroImage,
} from "../../../../public/images/hero-section.png";
import LineMark from "../../../../public/images/line-mark.svg";
import Button from "../../common/Button";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <section
        className="flex max-lg:flex-col max-lg:gap-10 max-lg:items-end justify-end px-4 pt-20 pb-5 md:pt-[180px] md:pb-[132px] xl:pl-16 2xl:pl-0 max-w-[1440px] xl:mx-auto w-full overflow-hidden"
        style={{
          background: "linear-gradient(360deg, #FFF5F7 1.47%, #FFF 91.74%)",
        }}
      >
        <div className="flex flex-col lg:max-w-[689px] w-full">
          <h1
            className={`relative text-[#FF6F91] text-[36px] md:text-[72px] font-bold leading-[1.5] md:leading-[1.4] transition-all duration-700 my-8 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Discover the <br /> <span className="text-[#056608]">Best</span>{" "}
            University <br />
            for You.
            <div
              className={`absolute top-[144px] md:top-[258px] left-2 md:left-[115px] max-md:w-[54px] max-md:h-[33px] transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0 rotate-0"
                  : "opacity-0 -translate-x-8 -rotate-12"
              }`}
            >
              <Image
                src={LineMark}
                alt="Line icon"
                width={182}
                height={61}
                className="w-full h-full"
              />
            </div>
          </h1>
          <p
            className={`max-w-[613px] w-full pt-5 pb-10 text-base md:text-[20px] font-medium leading-7 md:leading-9 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Find the school that matches your goals, lifestyles, and dreams.
            Take the first step towards a university experience you&apos;ll
            thrive in.
          </p>
          <div
            className={`flex flex-col-reverse sm:flex-row items-start sm:items-center gap-3 md:gap-5 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button className="min-w-[170px] relative hover:scale-105 transition-transform group overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Take the Quiz
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full transform"></span>
            </Button>

            <div className="flex items-center">
              <div className="h-12 border-l border-[#056608]/30 mx-4 hidden sm:block"></div>

              <div className="group cursor-pointer">
                <p className="md:px-0 py-2 text-base md:text-[20px] font-medium text-[#056608] relative hover:text-[#0a9e0f] transition-colors duration-300 flex items-center gap-2">
                  Learn More About MyUni
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </p>
                <div className="h-0.5 w-0 bg-[#056608] group-hover:w-full transition-all duration-300 mt-1"></div>
              </div>
            </div>
          </div>
          <div
            className={`relative block md:hidden mt-10 w-full transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src={MobileHeroImage}
              alt="Mobile Hero Image"
              width={343}
              height={402}
              className="w-full h-full hover:scale-[1.02] transition-transform duration-500"
              aria-label="Mobile Hero Image"
            />
            <div
              className="absolute right-[1%] bottom-[40px] z-20 flex items-center gap-2 py-2.5 px-5 bg-white rounded-lg text whitespace-nowrap"
              style={{
                boxShadow:
                  "-11px 66px 19px 0px rgba(0, 0, 0, 0.00), -7px 42px 17px 0px rgba(0, 0, 0, 0.01), -4px 24px 14px 0px rgba(0, 0, 0, 0.05), -2px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="37"
                viewBox="0 0 34 37"
                fill="none"
              >
                <path
                  d="M17.3337 1.66669L20.6806 14.9864L34.0003 18.3334L20.6806 21.6803L17.3337 35L13.9867 21.6803L0.666992 18.3334L13.9867 14.9864L17.3337 1.66669Z"
                  fill="#FFD700"
                />
                <path
                  d="M8.33366 0L9.87327 6.12706L16.0003 7.66667L9.87327 9.20627L8.33366 15.3333L6.79405 9.20627L0.666992 7.66667L6.79405 6.12706L8.33366 0Z"
                  fill="#FFD700"
                />
                <path
                  d="M7.66667 21L9.20627 27.1271L15.3333 28.6667L9.20627 30.2063L7.66667 36.3333L6.12706 30.2063L0 28.6667L6.12706 27.1271L7.66667 21Z"
                  fill="#FFD700"
                />
              </svg>
              <p className="text-[14px] md:text-base font-medium leading-[28px] md:leading-8">
                Yayy, I&apos;m so happy with my University 😊
              </p>
            </div>
          </div>
        </div>
        <div
          className={`relative hidden md:block w-[676px] h-[645px] transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={676}
            height={645}
            className="w-full h-full hover:scale-[1.02] transition-transform duration-500"
            aria-label="Hero Image"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02) rotate(3deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          />
          <div
            className="absolute right-[1%] bottom-[85px] z-20 flex items-center gap-2 py-2.5 px-5 bg-white rounded-lg text"
            style={{
              boxShadow:
                "-11px 66px 19px 0px rgba(0, 0, 0, 0.00), -7px 42px 17px 0px rgba(0, 0, 0, 0.01), -4px 24px 14px 0px rgba(0, 0, 0, 0.05), -2px 11px 11px 0px rgba(0, 0, 0, 0.09), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="37"
              viewBox="0 0 34 37"
              fill="none"
            >
              <path
                d="M17.3337 1.66669L20.6806 14.9864L34.0003 18.3334L20.6806 21.6803L17.3337 35L13.9867 21.6803L0.666992 18.3334L13.9867 14.9864L17.3337 1.66669Z"
                fill="#FFD700"
              />
              <path
                d="M8.33366 0L9.87327 6.12706L16.0003 7.66667L9.87327 9.20627L8.33366 15.3333L6.79405 9.20627L0.666992 7.66667L6.79405 6.12706L8.33366 0Z"
                fill="#FFD700"
              />
              <path
                d="M7.66667 21L9.20627 27.1271L15.3333 28.6667L9.20627 30.2063L7.66667 36.3333L6.12706 30.2063L0 28.6667L6.12706 27.1271L7.66667 21Z"
                fill="#FFD700"
              />
            </svg>
            <p className="text-base font-medium leadin-8">
              Yayy, I&apos;m so happy with my University 😊
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
