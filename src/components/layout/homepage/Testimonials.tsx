"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Testifier1 from "../../../../public/images/testifier1.png";
import Testifier2 from "../../../../public/images/testifier2.png";
import Testifier3 from "../../../../public/images/testifier3.png";

const testimonials = [
  {
    id: 1,
    name: "Tunde Alao",
    school: "University of Lagos (UNILAG)",
    image: Testifier1,
    testimony:
      "Choosing MyUni was my best decision! It matched me with the University of Lagos, where I'm getting a great education and enjoying an amazing social life. I've met incredible people, joined exciting clubs, and truly feel at home. Thanks MyUni!",
  },
  {
    id: 2,
    name: "Aisha Mohammed",
    school: "Ahmadu Bello University",
    image: Testifier2,
    testimony:
      "MyUni guided me to Ahmadu Bello University which perfectly aligns with my academic goals and cultural preferences. The personalized recommendations helped me find a campus where I could thrive both academically and socially. I'm so grateful!",
  },
  {
    id: 3,
    name: "Chidi Okonkwo",
    school: "University of Nigeria, Nsukka",
    image: Testifier3,
    testimony:
      "The detailed university insights from MyUni helped me make an informed decision. At UNN, I've found excellent research opportunities and mentors who are helping me achieve my career goals. The campus community is exactly what I was looking for.",
  },
  {
    id: 4,
    name: "Folake Adeyemi",
    school: "Obafemi Awolowo University",
    image: Testifier1,
    testimony:
      "As a first-generation student, I was overwhelmed by university options. MyUni simplified everything with personalized recommendations. OAU has become my second home with its vibrant campus life and strong academic programs. I couldn't be happier!",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-[#FFF5F7]">
      <motion.div
        id="testimonials"
        ref={sectionRef}
        className="max-w-[1240px] w-full mx-auto py-10 md:py-16 px-4 flex max-lg:flex-col items-center lg:gap-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="lg:max-w-[568px] w-full flex flex-col">
          <motion.h2
            className="font-bold text-[30px] md:text-5xl leading-[48px] md:leading-[72px] max-lg:text-center mb-8"
            variants={itemVariants}
          >
            What Students Are <br className="hidden lg:block" /> Saying About
            <span className="text-[#056608]"> MyUni</span>
          </motion.h2>

          {/* Fixed size container for mobile image */}
          <div className="lg:hidden mx-auto w-full h-[300px] mb-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-image-${activeIndex}`}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-[280px] h-[280px] rounded-[20px] overflow-hidden">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={`${testimonials[activeIndex].name} Testimonial`}
                      fill
                      priority
                      sizes="(max-width: 768px) 280px, 535px"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="rounded-[20px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-4 px-2">
                      <h6 className="text-white font-bold text-base leading-[21px] text-center">
                        {testimonials[activeIndex].name}
                      </h6>
                      <p className="text-white text-[14px] leading-[18px] text-center">
                        {testimonials[activeIndex].school}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Fixed height container for testimony text */}
          <div className="h-[160px] md:h-[200px] relative overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={`testimony-${activeIndex}`}
                className="font-medium text-base md:text-[20px] leading-7 md:leading-[40px] text-[#404040] max-md:text-center absolute inset-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                &quot;{" "}
                {testimonials[activeIndex].testimony.split("Thanks MyUni")[0]}
                {testimonials[activeIndex].testimony.includes(
                  "Thanks MyUni"
                ) && <span className="text-black">Thanks MyUni!</span>}
                &quot;
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-8 md:gap-[42px] pt-4">
            <button
              onClick={handlePrev}
              className="p-2 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="size-6" />
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill={activeIndex === index ? "#056608" : "#D9D9D9"}
                    className="transition-colors duration-300"
                  />
                </svg>
              </button>
            ))}

            <button
              onClick={handleNext}
              className="p-2 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-[535px] h-[535px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-image-${activeIndex}`}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={`${testimonials[activeIndex].name} Testimonial`}
                  fill
                  priority
                  sizes="535px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-6 px-4">
                  <h6 className="text-white font-bold text-2xl leading-[36px] text-center">
                    {testimonials[activeIndex].name}
                  </h6>
                  <p className="text-white text-2xl leading-[30px] font-medium text-center">
                    {testimonials[activeIndex].school}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
