import React from "react";
import TestimonialImage from "../../../assets/testimonials.png";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div>
      <section className="max-w-[1440px] w-full mx-auto py-[164px] px-[101px] bg-[#FFF5F7] flex max-md:flex-col items-center gap-16">
        <div className="max-w-[568px] flex flex-col">
          <h2 className="font-bold text-5xl leading-[72px] mb-5">
            What Students Are <br /> Saying About
            <span className="text-[#056608]"> MyUni</span>
          </h2>
          <p className="font-medium text-[20px] leading-[40px] py-6 ">
            Choosing MyUni was the best decision I made for my university
            search! It matched me with the University of Lagos, and I
            couldn&apos;t be happier. Not only am I getting a top-notch
            education, but the social vibe here is incredible. I&apos;ve met
            amazing people, joined exciting clubs, and truly feel like I belong.
            Thanks to MyUni, I found the perfect school that fits both my
            academic goals and lifestyle!
          </p>
          <div className="mb-10">
            <h6 className="text-2xl leading-[36px] font-bold text-[#056608]">
              Tunde Alao
            </h6>
            <p className="text-2xl leading-[36px] font-medium text-[#808080]">
              {"University of Lagos (UNILAG)"}
            </p>
          </div>
          <div className="flex justify-center items-center gap-[42px] p-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#D9D9D9" />
          </svg>
        </div>
        </div>

        <div className="w-[600px] h-[600px]">
          <Image
            src={TestimonialImage}
            alt="Testimonials Image"
            width={600}
            height={6001}
            className="w-full h-full object-contain"
            aria-label="Testimonials Image"
          />
        </div>
      </section>
    </div>
  );
}
