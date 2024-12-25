import Image from "next/image";
import TestimonialImage from "../../../../public/images/testimonials.png";

export default function Testimonials() {
  return (
    <>
      <section
        id="testimonials"
        className="max-w-[1440px] w-full mx-auto py-10 md:py-16 lg:py-[164px] px-4 sm:px-8 xl:px-[101px] bg-[#FFF5F7] flex max-lg:flex-col items-center lg:gap-16"
      >
        <div className="lg:max-w-[568px] w-full flex flex-col">
          <h2 className="font-bold text-[30px] md:text-5xl leading-[48px] md:leading-[72px] mb-5 max-lg:text-center">
            What Students Are <br className="hidden lg:block" /> Saying About
            <span className="text-[#056608]"> MyUni</span>
          </h2>
          <div className="flex mx-auto lg:hidden w-[330px] h-[330px]">
            <Image
              src={TestimonialImage}
              alt="Testimonials Image"
              width={330}
              height={330}
              className="w-full h-full object-contain"
              aria-label="Testimonials Image"
            />
          </div>
          <p className="font-medium text-base md:text-[20px] leading-7 md:leading-[40px] py-6 max-md:text-balance">
            Choosing MyUni was the best decision I made for my university
            search! It matched me with the University of Lagos, and I
            couldn&apos;t be happier. Not only am I getting a top-notch
            education, but the social vibe here is incredible. I&apos;ve met
            amazing people, joined exciting clubs, and truly feel like I belong.
            Thanks to MyUni, I found the perfect school that fits both my
            academic goals and lifestyle!
          </p>
          <div className="mb-10">
            <h6 className="text-2xl md:text-2xl leading-[30px] md:leading-9 font-bold text-[#056608]">
              Tunde Alao
            </h6>
            <p className="text-base md:text-2xl leading-6 md:leading-9 font-medium text-[#808080]">
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

        <div className="hidden lg:block w-[600px] h-[600px]">
          <Image
            src={TestimonialImage}
            alt="Testimonials Image"
            width={600}
            height={600}
            className="w-full h-full object-contain"
            aria-label="Testimonials Image"
          />
        </div>
      </section>
    </>
  );
}
