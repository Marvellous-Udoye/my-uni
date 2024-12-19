import Button from "@/components/common/Button";
import React from "react";

interface FeaturesCardProps {
  svg: React.ReactNode;
  title: string;
  content: string;
}

const features: FeaturesCardProps[] = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="42"
        viewBox="0 0 38 42"
        fill="none"
      >
        <path
          d="M18.999 23V1L34.999 9L18.999 17"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36.1214 17.444C37.1857 20.7243 37.2852 24.2413 36.4083 27.5765C35.5313 30.9118 33.7146 33.9249 31.1745 36.2574C28.6343 38.5899 25.4776 40.1436 22.0798 40.7337C18.6821 41.3237 15.1863 40.9253 12.0085 39.5858C8.83063 38.2463 6.10447 36.0221 4.15434 33.1778C2.2042 30.3335 1.11217 26.9889 1.00819 23.5419C0.9042 20.0948 1.79263 16.6904 3.56777 13.7338C5.34291 10.7771 7.93004 8.39264 11.0214 6.86401"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0028 16.9939C10.0006 18.3279 9.34817 19.8916 9.1049 21.5423C8.86163 23.193 9.03528 24.8784 9.61002 26.4448C10.1848 28.0112 11.1423 29.409 12.3955 30.5106C13.6486 31.6123 15.1575 32.3829 16.7847 32.7522C18.4118 33.1215 20.1056 33.0778 21.7115 32.6251C23.3175 32.1723 24.7846 31.3249 25.9792 30.1601C27.1739 28.9952 28.0581 27.5499 28.5513 25.9559C29.0444 24.3619 29.1309 22.6699 28.8028 21.0339"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Personalized Matches",
    content: "We rank universities based on what matters most to you.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="42"
        viewBox="0 0 26 42"
        fill="none"
      >
        <path
          d="M19 25C19.4 23 20.4 21.6 22 20C24 18.2 25 15.6 25 13C25 9.8174 23.7357 6.76516 21.4853 4.51472C19.2348 2.26428 16.1826 1 13 1C9.8174 1 6.76516 2.26428 4.51472 4.51472C2.26428 6.76516 1 9.8174 1 13C1 15 1.4 17.4 4 20C5.4 21.4 6.6 23 7 25"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 33H19"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 41H17"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Make an Informed Choice",
    content: "Choose your school with confidence and clarity.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="42"
        viewBox="0 0 43 42"
        fill="none"
      >
        <path
          d="M4.72187 14.2304C4.42995 12.9155 4.47478 11.5481 4.85218 10.2551C5.22959 8.9621 5.92737 7.78532 6.88081 6.83387C7.83425 5.88243 9.01249 5.18712 10.3063 4.81242C11.6001 4.43772 12.9675 4.39576 14.2819 4.69043C15.0053 3.55903 16.0019 2.62795 17.1798 1.983C18.3577 1.33805 19.679 1 21.0219 1C22.3648 1 23.6861 1.33805 24.864 1.983C26.0419 2.62795 27.0385 3.55903 27.7619 4.69043C29.0782 4.39448 30.448 4.43625 31.7439 4.81186C33.0397 5.18747 34.2195 5.88471 35.1736 6.83874C36.1276 7.79276 36.8248 8.97258 37.2004 10.2684C37.5761 11.5643 37.6178 12.9341 37.3219 14.2504C38.4533 14.9738 39.3844 15.9704 40.0293 17.1483C40.6742 18.3262 41.0123 19.6475 41.0123 20.9904C41.0123 22.3333 40.6742 23.6546 40.0293 24.8325C39.3844 26.0104 38.4533 27.007 37.3219 27.7304C37.6165 29.0448 37.5746 30.4122 37.1999 31.706C36.8252 32.9998 36.1299 34.1781 35.1784 35.1315C34.227 36.0849 33.0502 36.7827 31.7572 37.1601C30.4642 37.5375 29.0968 37.5823 27.7819 37.2904C27.0594 38.4262 26.062 39.3612 24.8821 40.0091C23.7022 40.6569 22.3779 40.9965 21.0319 40.9965C19.6858 40.9965 18.3615 40.6569 17.1816 40.0091C16.0017 39.3612 15.0043 38.4262 14.2819 37.2904C12.9675 37.5851 11.6001 37.5431 10.3063 37.1684C9.01249 36.7937 7.83425 36.0984 6.88081 35.147C5.92737 34.1955 5.22959 33.0188 4.85218 31.7257C4.47478 30.4327 4.42995 29.0654 4.72187 27.7504C3.58178 27.0289 2.6427 26.0308 1.99197 24.8489C1.34124 23.6669 1 22.3396 1 20.9904C1 19.6412 1.34124 18.3139 1.99197 17.132C2.6427 15.9501 3.58178 14.9519 4.72187 14.2304Z"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0215 20.9905L19.0215 24.9905L27.0215 16.9905"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Avoid Disappointment",
    content:
      "Get a realistic understanding of what to expect at every university.",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="38"
        viewBox="0 0 40 38"
        fill="none"
      >
        <path
          d="M19 1V35C19 35.5304 18.7893 36.0391 18.4142 36.4142C18.0391 36.7893 17.5304 37 17 37H5C3.93913 37 2.92172 36.5786 2.17157 35.8284C1.42143 35.0783 1 34.0609 1 33V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H33C34.0609 1 35.0783 1.42143 35.8284 2.17157C36.5786 2.92172 37 3.93913 37 5V17C37 17.5304 36.7893 18.0391 36.4142 18.4142C36.0391 18.7893 35.5304 19 35 19H1"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 33L31 37L39 29"
          stroke="#FF6F91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Data You Can Trust",
    content:
      "Our insights are built on real feedback from students in each school.",
  },
];

const FeaturesCard = ({ svg, title, content }: FeaturesCardProps) => {
  return (
    <div className="p-[26px] bg-white rounded-[20px] flex flex-col h-full w-full">
      <div>{svg}</div>
      <div>
        <h6 className="font-bold text-[32px] leading-[64px] tracking-[-1.28px] mt-2.5">
          {title}
        </h6>
        <p className="text-[#808080] font-medium text-[20px] leading-[40px] tracking-[-0.8px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <>
      <section
        className="max-w-[1328px] w-full mx-auto p-12 my-[120px] rounded-[30px] flex max-lg:flex-col"
        style={{
          background:
            "linear-gradient(67deg, #FFF 2.66%, #FFFAFB 33.61%, #FFF5F7 96.79%",
        }}
      >
        <div className="max-w-[358px] flex flex-col gap-10 justify-center">
          <h2 className="font-bold text-5xl leading-[72px] tracking-[-1.92px] ">
            A Better Way to <span className="text-[#056608]">Choose</span> Your
            University
          </h2>
          <Button className="max-w-fit">Take the quiz</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
          {features.map((feature, index) => (
            <div key={index}>
              <FeaturesCard
                svg={feature.svg}
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
