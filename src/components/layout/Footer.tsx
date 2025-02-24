"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const footerlinks = [
  { menu: "Home", href: "/" },
  { menu: "How it works", href: "#how-it-works" },
  { menu: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="bg-[#FFCCD8]">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col gap-10 md:gap-20 px-4 pt-8 md:pt-[80px] pb-3 md:pb-10">
        <div className="flex max-md:flex-col gap-10 justify-between md:items-center">
          <div className="max-w-[448px] w-full">
            <h1 className="text-[40px] md:text-[56px] font-black logo">
              MyUni
            </h1>
            <p className="text-[#404040] text-[20px] font-normal leading-8 text">
              MyUni is a platform that helps students find the right university
              based on their preferences, goals, and lifestyle.
            </p>
          </div>
          <div className="max-w-[294px] w-full flex max-md:flex-col gap-5 justify-between text-[#404040] text-base font-medium leading-8 text">
            <ul className="flex flex-col gap-1 ">
              <li className="text-black text-[20px] font-semibold">MyUni</li>
              {footerlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="hover:text-black transition-colors duration-200"
                >
                  {link.menu}
                </Link>
              ))}
            </ul>
            <ul>
              <li className="text-black text-[20px] font-semibold">Support</li>
              <Link
                href={"https://wa.me/+2348031925030"}
                className="cursor-pointer hover:text-black transition-colors duration-200"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex max-md:flex-col-reverse md:items-center justify-between w-full">
          <div className="flex gap-2 md:gap-5 items-center md:justify-center pt-4 md:py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8298 13.83C13.2702 14.389 12.5575 14.7695 11.7817 14.9235C11.0059 15.0774 10.2018 14.998 9.47117 14.6951C8.74052 14.3922 8.11607 13.8795 7.67674 13.2218C7.23741 12.5641 7.00293 11.7909 7.00293 11C7.00293 10.2091 7.23741 9.43588 7.67674 8.77818C8.11607 8.12048 8.74052 7.60779 9.47117 7.30491C10.2018 7.00203 11.0059 6.92256 11.7817 7.07654C12.5575 7.23052 13.2702 7.61104 13.8298 8.17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base text-[20px] font-medium logo">
              MyUni, All rights reserved.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <Link href={"https://wa.me/+2348031925030"}>
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 49 48"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.9417 7.01103C37.4301 2.51858 31.4297 0.0432949 25.0363 0.0410156C11.8623 0.0410156 1.14067 10.7023 1.13609 23.807C1.1338 27.9962 2.23507 32.0853 4.32647 35.6888L0.935547 48.006L13.6054 44.701C17.0959 46.5952 21.0266 47.5923 25.0261 47.5935H25.0363C38.2081 47.5935 48.931 36.931 48.9356 23.8263C48.9378 17.4752 46.4545 11.5046 41.9417 7.01217V7.01103ZM25.0363 43.5797H25.0283C21.4643 43.5786 17.9681 42.6258 14.9175 40.8263L14.1921 40.3979L6.67341 42.3591L8.68 35.0688L8.20785 34.3212C6.2196 31.1759 5.16875 27.5404 5.17104 23.8082C5.17563 12.9166 14.0867 4.05481 25.0445 4.05481C30.3502 4.05709 35.3375 6.11414 39.0882 9.84873C42.839 13.5822 44.9029 18.5465 44.9006 23.8241C44.896 34.7168 35.985 43.5786 25.0363 43.5786V43.5797ZM35.9322 28.7849C35.3351 28.4875 32.3993 27.0515 31.8514 26.8533C31.3037 26.6549 30.9061 26.5558 30.5083 27.1507C30.1107 27.7456 28.9659 29.0835 28.6175 29.4789C28.2691 29.8755 27.9207 29.9246 27.3237 29.6271C26.7267 29.3296 24.8026 28.7028 22.521 26.68C20.7459 25.105 19.5471 23.1608 19.1989 22.5659C18.8505 21.971 19.1622 21.6496 19.4601 21.3545C19.7282 21.0878 20.0571 20.6605 20.3562 20.314C20.6554 19.9675 20.7539 19.7192 20.9533 19.3236C21.1527 18.927 21.053 18.5807 20.9041 18.2831C20.755 17.9857 19.561 15.0625 19.0625 13.8739C18.5777 12.7161 18.085 12.8733 17.7194 12.854C17.371 12.8368 16.9734 12.8334 16.5746 12.8334C16.1758 12.8334 15.5294 12.9816 14.9817 13.5765C14.4339 14.1713 12.8914 15.6084 12.8914 18.5304C12.8914 21.4525 15.031 24.2777 15.3301 24.6743C15.6291 25.0709 19.5414 31.0688 25.5314 33.6421C26.9559 34.254 28.0686 34.6198 28.9361 34.8934C30.3663 35.3458 31.6681 35.282 32.6971 35.1293C33.8443 34.9584 36.2302 33.6922 36.7276 32.3052C37.2249 30.9183 37.2249 29.7285 37.076 29.4812C36.927 29.2339 36.5282 29.0846 35.9311 28.7872L35.9322 28.7849Z"
                    fill="#111B21"
                  />
                </svg>
              </div>
            </Link>
            <Link href={"mailto:olukotunflourish@gmail.com"}>
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 49 49"
                  fill="none"
                >
                  <path
                    d="M4.21705 48.0468H11.8739V23.3611L0.935547 12.3896V43.6754C0.935547 46.0754 2.41544 48.0468 4.21705 48.0468Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M38.0615 48.0468H45.7184C47.52 48.0468 48.9999 46.0754 48.9999 43.6754V12.3896L38.0615 23.2754"
                    fill="#34A853"
                  />
                  <path
                    d="M38.0615 4.41837V23.3612L48.9999 12.4755V6.56123C48.9999 1.16123 44.3672 -1.92448 41.15 1.33266"
                    fill="#FBBC04"
                  />
                  <path
                    d="M11.874 23.3613V4.41846L25 17.5327L38.0617 4.41846V23.3613L24.9357 36.3899"
                    fill="#EA4335"
                  />
                  <path
                    d="M0.935547 6.56113V12.3897L11.8739 23.2754V4.41827L8.78541 1.33255C5.56825 -1.83887 0.935547 1.24684 0.935547 6.56113Z"
                    fill="#C5221F"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
