"use client";

import Button from "@/components/common/Button";
import { motion } from "framer-motion";

export default function TakeQuiz() {
  return (
    <div className="px-4">
      <section className="max-w-[1240px] w-full md:mx-auto my-10 md:my-[99px] flex flex-col lg:flex-row justify-between items-center gap-12 px-4 md:px-10 py-12 md:py-20 rounded-[20px] bg-gradient-to-br from-white via-[#FFFAFB] to-[#FFF5F7] shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[600px] w-full flex flex-col gap-6 md:gap-8"
        >
          <h1 className="text-[32px] md:text-5xl font-bold leading-[48px] md:leading-[72px] tracking-[-1.28px] md:tracking-[-1.92px] max-md:text-center">
            Your Future Awaits—Start
            <span className="text-[#056608]">Your Journey</span> Today
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Discover your strengths, explore new opportunities, and take a step
            closer to your dream career. Answer a few quick questions, and
            we&apos;ll guide you towards the best path for you!
          </p>

          <ul className="text-gray-800 text-lg md:text-xl space-y-3">
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <span className="text-green-600 text-xl">✓</span> Personalized choice
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <span className="text-green-600 text-xl">✓</span> Identify your wants
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <span className="text-green-600 text-xl">✓</span> Get recommendations
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[500px] w-full flex flex-col items-center text-center gap-6 md:gap-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Ready to take the leap?
          </h2>
          <p className="text-lg text-gray-700">
            It only takes a few minutes to uncover your potential. Click below
            and begin your journey today!
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <Button 
                          href="https://docs.google.com/forms/d/e/1FAIpQLScIEdjMnD_q_dNjZNP_lifW4CuKnSHXe0fGypqWAoCDEIGTqA/viewform"
            className="w-fit px-8 py-3 text-lg shadow-md hover:shadow-lg transition">
              Take the Quiz
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
