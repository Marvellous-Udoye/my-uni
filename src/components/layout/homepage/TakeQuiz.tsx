import Button from "@/components/common/Button";
import Image from "next/image";
import TakeQuizImage from "../../../../public/images/take-quiz.png";

export default function TakeQuiz() {
  return (
    <div className="px-4">
      <section className="max-w-[1328px] w-full md:mx-auto my-10 md:my-[99px] flex max-lg:flex-col max-lg:gap-10 justify-between px-4 xl:pl-[74px] xl:pr-[38px] md:pt-5 rounded-[20px] bg-gradient-to-r from-white via-[#FFFAFB] to-[#FFF5F7] ">
        <div className="flex flex-col gap-10 md:gap-16 md:mt-[85px] lg:mb-[68px] max-w-[627px] w-full">
          <h1 className="text-[32px] md:text-5xl font-bold leading-[48px] md:leading-[72px] tracking-[-1.28px] md:tracking-[-1.92px] w-fit">
            Your Future Awaits—Start{" "}
            <span className="text-[#056608]">Your Journey</span> Today
          </h1>
          <Button className="w-fit">Take the Quiz</Button>
        </div>

        <div className="w-full md:w-[450px] lg:w-[416px] h-full md:h-[400px] lg:h-[421px] mx-auto">
          <Image
            src={TakeQuizImage}
            alt="Take Quiz image"
            width={416}
            height={421}
            className="w-full h-full mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
