import Image from "next/image";
import MobileHeroImage from "../../../../public/images/hero-section-image(mobile).png";
import HeroImage from "../../../../public/images/hero-section-image.png";
import LineMark from "../../../../public/images/line-mark.svg";
import Button from "../../common/Button";

export default function Hero() {
  return (
    <>
      <section
        className="flex max-lg:flex-col max-lg:gap-10 max-lg:items-end justify-end px-4 pt-10 pb-5 md:pt-[100px] md:pb-[132px] xl:pl-10 2xl:pl-0 max-w-[1440px] xl:mx-auto w-full"
        style={{
          background: " linear-gradient(180deg, #FFF5F7 1.47%, #FFF 91.74%",
        }}
      >
        <div className="flex flex-col lg:max-w-[689px] w-full">
          <h1 className="relative text-[#FF6F91] text-[36px] md:text-[72px] font-bold leading-[54px] md:leading-[108px]">
            Discover the <br /> <span className="text-[#056608]">Best</span>{" "}
            University <br />
            for You.
            <div className="absolute top-[144px] md:top-[258px] left-2 md:left-[115px] max-md:w-[54px] max-md:h-[33px]">
              <Image
                src={LineMark}
                alt="Line icon"
                width={182}
                height={61}
                className="w-full h-full"
              />
            </div>
          </h1>
          <p className="max-w-[613px] w-full pt-5 pb-10 text-base md:text-[20px] font-medium leading-8 md:leading-10">
            Find the school that matches your goals, lifestyles, and dreams.
            Take the first step towards a university experience you&apos;ll
            thrive in.
          </p>
          <div className="flex items-center gap-5">
            <Button className="min-w-[130px]">Take the Quiz</Button>
            <p className="md:px-4 md:py-5 text-base md:text-[20px] font-medium text-[#056608] underline cursor-pointer">
              Learn More About MyUni
            </p>
          </div>
          <Image
            src={MobileHeroImage}
            alt="Mobile Hero Image"
            width={343}
            height={402}
            className="block md:hidden mt-10 w-full h-full"
            aria-label="Mobile Hero Image"
          />
        </div>
        <div className="hidden md:block w-[676px] h-[645px]">
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
