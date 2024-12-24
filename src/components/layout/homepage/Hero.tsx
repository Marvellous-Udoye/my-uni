import Image from "next/image";
import HeroImage from "../../../../public/images/hero-section-image.png";
import LineMark from "../../../../public/images/line-mark.svg";
import Button from "../../common/Button";

export default function Hero() {
  return (
    <>
      <section
        className="flex max-lg:flex-col max-lg:gap-10 max-lg:items-end justify-end pt-[100px] pb-[132px] pl-10 2xl:pl-0 max-w-[1440px] xl:mx-auto w-full"
        style={{
          background: " linear-gradient(180deg, #FFF5F7 1.47%, #FFF 91.74%",
        }}
      >
        <div className="flex flex-col lg:max-w-[689px] w-full">
          <h1 className="relative text-[#FF6F91] text-[72px] font-bold leading-[108px]">
            Discover the <br /> <span className="text-[#056608]">Perfect</span>{" "}
            University <br />
            for You.
            <Image
              src={LineMark}
              alt="Line icon"
              width={182}
              height={61}
              className="absolute top-[258px] left-[115px]"
            />
          </h1>
          <p className="max-w-[613px] w-full pt-5 pb-10 text-[20px] font-medium leading-10">
            Find the school that matches your goals, lifestyles, and dreams.
            Take the first step towards a university experience you&apos;ll
            thrive in.
          </p>
          <div className="flex items-center gap-5">
            <Button>Take the Quiz</Button>
            <p className="px-4 py-5 text-[20px] font-medium text-[#056608] underline cursor-pointer">
              Learn More About MyUni
            </p>
          </div>
        </div>
        <div className="w-[676px] h-[645px]">
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={676}
            height={645}
            className="w-full h-full"
            aria-label="Hero Image"
          />
        </div>
      </section>
    </>
  );
}
