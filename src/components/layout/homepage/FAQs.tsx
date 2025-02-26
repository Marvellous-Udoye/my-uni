"use client";

import Button from "@/components/common/Button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does MyUni include all universities in the country?",
      answer:
        "Yes! MyUni covers all universities in the country, so you can explore and find the best match for you",
    },
    {
      question: "Is the university data on MyUni accurate and up to date?",
      answer:
        "I'd love to say it's perfect, but let's be real—no data is completely bias-free. Info on Nigerian universities is hard to find and scattered across the internet, but I've done my best to gather and organize it. As more people use MyUni, the data will only improve!",
    },
    {
      question: "Where do the university ratings come from?",
      answer: (
        <div className="space-y-2">
          <p>
            The ratings were carefully put together using data from various
            online sources.
          </p>
          <p>We analyzed:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Research output from each university</li>
            <li>Student reviews and experiences</li>
            <li>Official university websites</li>
            <li>Google images of hostels and facilities</li>
          </ul>
          <p>All this data was normalized on a 1-5 scale for consistency.</p>
        </div>
      ),
    },
    {
      question:
        "How does MyUni rank and recommend the top 10 universities for me?",
      answer: (
        <div className="space-y-3">
          <p>
            It&apos;s all about matching your preferences with university
            ratings!
          </p>
          <p>
            Every university is rated on a 1-5 scale across different categories
            like Hostel Quality, Academic Rigor, Sports Facilities, Social Life
            & Party Culture, Cost of Living, and Tuition Fees.
          </p>

          <p>Here&apos;s how the magic happens:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              You rate what matters most to you (e.g., 5 for Academic Rigor, 4
              for Party Culture, etc.).
            </li>
            <li>
              Your ratings are multiplied by each university&apos;s scores in
              those categories.
            </li>
            <li>
              The universities with the highest total scores make it to your top
              10.
            </li>
          </ol>

          <p>
            For Tuition and Cost of Living, if you set a range (say ₦100k -
            ₦300k for tuition), MyUni finds schools within that range and
            assigns extra points accordingly.
          </p>

          <p>
            At the end, you get a personalized top 10 that best matches your
            priorities!
          </p>
        </div>
      ),
    },
    {
      question:
        "How accurate is MyUni at predicting my chances of getting into a university?",
      answer: (
        <p>
          That&apos;s a future feature we&apos;re working on! The plan is to
          analyze data from the internet about the average JAMB scores and WAEC
          points of students admitted to each university in the past year. Then,
          we&apos;ll compare those averages with your own scores to give you a
          realistic prediction of your chances. Stay tuned!
        </p>
      ),
    },
  ];

  return (
    <section
      id="faqs"
      className="max-w-[1240px] w-full mx-auto px-4 md:px-10 py-12 my-10 md:my-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6 md:space-y-8"
      >
        <div className="text-center space-y-2 md:space-y-4">
          <h2 className="text-[32px] md:text-5xl font-bold tracking-[-1.28px] md:tracking-[-1.92px]">
            Frequently Asked <span className="text-[#056608]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Common questions about <strong>MyUni</strong>
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="border-b-2 border-[#FF69B4]/30 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 md:p-6 flex justify-between gap-3 sm:gap-4 items-center text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </span>
                <span className="text-[#056608] flex-shrink-0 transition-all duration-300">
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-6 w-6" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-4 pb-4 md:px-6 md:pb-6 text-gray-700"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12 rounded-xl max-w-3xl mx-auto"
      >
        <p className="font-bold text-xl mb-4 text-[#056608]">
          Still Have Questions?
        </p>
        <p className="text-gray-600 mb-6 max-md:max-w-md mx-auto">
          Can&apos;t find the answers you are looking for? Please chat to our
          friendly team for more information about <strong> MyUni</strong>.
        </p>
        <Button
          href="mailto:olukotunflourish@gmail.com"
          className="transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-md hover:shadow-lg active:shadow"
          style={{ transitionDelay: "800ms" }}
        >
          Get in touch
        </Button>
      </motion.div>
    </section>
  );
}
