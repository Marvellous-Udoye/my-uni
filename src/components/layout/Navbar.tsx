"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";

const navlinks = [
  { menu: "Home", href: "/" },
  { menu: "How it works", href: "#how-it-works" },
  { menu: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

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
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav
      className="pt-4 pb-[30px] md:py-[30px] px-4 relative"
      style={{ background: "linear-gradient(90deg, #FFF5F7 100%, #FFF 100%)" }}
    >
      <div className="max-w-[1240px] w-full mx-auto flex items-center justify-between">
        <h1 className="text-[40px] font-black logo">MyUni</h1>
        <ul className="hidden md:flex items-center md:gap-10 lg:gap-16 text-[20px] font-medium text">
          {navlinks.map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.href}
                onClick={(e) => handleScroll(e, menu.href)}
                className="hover:text-gray-600 transition-colors"
              >
                {menu.menu}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="hidden md:block">Take the Quiz</Button>
        <button
          onClick={toggleMenu}
          className="block md:hidden z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 opacity-100"
            onClick={toggleMenu}
          />
          <div className="absolute top-[84px] w-full right-4 bg-white rounded-lg max-w-xs md:max-w-xl py-2">
            <ul className="flex flex-col w-full">
              {navlinks.map((menu, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 last:border-none"
                >
                  <Link
                    href={menu.href}
                    className="block px-4 py-3 text-lg hover:bg-gray-50"
                    onClick={(e) => handleScroll(e, menu.href)}
                  >
                    {menu.menu}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-3">
                <Button onClick={() => setIsMenuOpen(false)} className="w-full">
                  Take the Quiz
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </nav>
  );
}
