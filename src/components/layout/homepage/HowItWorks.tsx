import Image from "next/image";
import HowToUseImage from "../../../../public/images/how-to-use.png";

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="max-w-[1240px] w-full mx-auto mt-[49px] mb-[173px] flex flex-col gap-[102px]">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="text-5xl leading-[72px] font-bold">
            Let us Do the Research, You Focus on Your <br />{" "}
            <span className="text-[#056608]">Future.</span>
          </h2>
          <p className="text-[#808080] font-medium text-[20px] leading-[30px]">
            Here&apos;s how it works, follow these simple steps to find your
            perfect university match.
          </p>
        </div>

        <div className="flex max-lg:flex-col-reverse items-center gap-[53px] ">
          <div className="w-[557px] h-[491px]">
            <Image
              src={HowToUseImage}
              alt="How to use Image"
              width={557}
              height={491}
              className="w-full h-full"
              aria-label="How to use Image"
            />
          </div>
          <div className="flex flex-col items-center max-w-[631px]">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="py-5 px-6 border-2 border-[#FF6F91] rounded-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      d="M12 1H6C5.44772 1 5 1.44772 5 2V4C5 4.55228 5.44772 5 6 5H12C12.5523 5 13 4.55228 13 4V2C13 1.44772 12.5523 1 12 1Z"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H5"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 13L8 15L12 11"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="h-20 border-l-2 border-[#FF6F91]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[32px] font-bold">Take the MyUni Quiz</h3>
                <p className="text-[#808080] text-[20px] font-medium leading-[40px]">
                  Answer a few questions about your goals, preferences, and
                  expectations.
                </p>
              </div>
            </div>

            <div className="h-16 border-l-2 flex justify-self-start ml-[70px] w-full border-[#FF6F91]"></div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="py-5 px-6 border-2 border-[#FF6F91] rounded-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M1 1V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H19"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 9H13"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 14H8"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 4H17"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="h-20 border-l-2 border-[#FF6F91]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[32px] font-bold">We Analyse the data</h3>
                <p className="text-[#808080] text-[20px] font-medium leading-[40px]">
                  Our System matches you with the top schools that meet your
                  need.
                </p>
              </div>
            </div>

            <div className="h-16 border-l-2 flex justify-self-start ml-[70px] w-full border-[#FF6F91]"></div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="py-5 px-6 border-2 border-[#FF6F91] rounded-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M21 10.5V3.5C21 2.96957 20.7893 2.46086 20.4142 2.08579C20.0391 1.71071 19.5304 1.5 19 1.5H3C2.46957 1.5 1.96086 1.71071 1.58579 2.08579C1.21071 2.46086 1 2.96957 1 3.5V15.5C1 16.6 1.9 17.5 3 17.5H11"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 4.5L12.03 10.2C11.7213 10.3934 11.3643 10.496 11 10.496C10.6357 10.496 10.2787 10.3934 9.97 10.2L1 4.5"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 16.5L17 18.5L21 14.5"
                      stroke="#FF6F91"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[32px] font-bold">
                  Get Your Perfect Matches 💯
                </h3>
                <p className="text-[#808080] text-[20px] font-medium leading-[40px]">
                  Receive your top university matches in your inbox, ranked by
                  student data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
