"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { default as Fact1, default as Fact4 } from "../../../../public/images/testifier1.png";
import Fact2 from "../../../../public/images/testifier2.png";
import Fact3 from "../../../../public/images/testifier3.png";

const factualPoints = [
  {
    id: 1,
    title: "Community Impact",
    image: Fact1,
    content:
      "Research consistently shows that students who attend universities aligned with their social preferences develop stronger support networks and experience greater overall satisfaction. Finding your community isn't just about comfort—it's a crucial factor in academic persistence and mental wellbeing during your university years.",
  },
  {
    id: 2,
    title: "Academic Specialization",
    image: Fact2,
    content:
      "Students at institutions with specialized programs in their field of interest gain access to cutting-edge research opportunities, industry-experienced faculty, and specialized facilities that directly enhance learning outcomes.",
  },
  {
    id: 3,
    title: "Value Assessment",
    image: Fact3,
    content:
      "The correlation between tuition costs and educational quality is not always straightforward, making informed decision-making crucial for financial wellbeing. A balanced assessment of university options can prevent students from unnecessary debt while still ensuring access to quality education.",
  },
  {
    id: 4,
    title: "Career Pathways",
    image: Fact4,
    content:
      "Different universities maintain distinct relationships with industry partners, significantly impacting internship and employment opportunities for their graduates. Students who select universities with strong connections in their desired industry often secure relevant positions more quickly after graduation.",
  },
];

export default function WhyItMatters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? factualPoints.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === factualPoints.length - 1 ? 0 : prev + 1
    );
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
    <section className="bg-[#FFF5F7]">
      <motion.div
        id="why-it-matters"
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
            Why Your University <br className="hidden lg:block" /> Choice
            <span className="text-[#056608]"> Matters</span>
          </motion.h2>

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
                      src={factualPoints[activeIndex].image}
                      alt={`${factualPoints[activeIndex].title} Illustration`}
                      fill
                      priority
                      sizes="(max-width: 768px) 280px, 535px"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="rounded-[20px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-4 px-2">
                      <h6 className="text-white font-bold text-base leading-[21px] text-center">
                        {factualPoints[activeIndex].title}
                      </h6>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="min-h-[200px] max-h-[240px] relative overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={`content-${activeIndex}`}
                className="font-medium text-base md:text-[18px] leading-7 md:leading-[32px] text-[#404040] max-md:text-center absolute inset-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                {factualPoints[activeIndex].content}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-8 md:gap-[42px] pt-4">
            <button
              onClick={handlePrev}
              className="p-2 focus:outline-none"
              aria-label="Previous fact"
            >
              <ChevronLeftIcon className="size-6" />
            </button>

            {factualPoints.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to fact ${index + 1}`}
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
              aria-label="Next fact"
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
                  src={factualPoints[activeIndex].image}
                  alt={`${factualPoints[activeIndex].title} Illustration`}
                  fill
                  priority
                  sizes="535px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-6 px-4">
                  <h6 className="text-white font-bold text-2xl md:text-3xl leading-[36px] text-center">
                    {factualPoints[activeIndex].title}
                  </h6>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
