import Button from "@/components/common/Button";
import Image from "next/image";
import TakeQuizImage from "../../../../public/images/take-quiz.png";

export default function TakeQuiz() {
  return (
    <>
      <section
        className="max-w-[1328px] w-full mx-auto my-[99px] flex gap-[73px] pl-[74px] pr-[38px] pt-5 rounded-[20px]"
        style={{ backgroundColor: "rgba(255, 192, 203, 0.50)" }}
      >
        <div className="flex flex-col gap-16 mt-[85px] mb-[68px] max-w-[727px] ">
          <h1 className="text-5xl font-bold leading-[72px] tracking-[-1.92px] w-fit">
            Your Future Awaits—Start{" "}
            <span className="text-[#056608]">Your Journey</span> Today
          </h1>
          <Button className="w-fit">Take the Quiz</Button>
        </div>

        <Image
          src={TakeQuizImage}
          alt="Take Quiz image"
          width={416}
          height={421}
        />
      </section>
    </>
  );
}
