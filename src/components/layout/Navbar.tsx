"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../common/Button";

const navlinks = [
  { menu: "Home", href: "/" },
  { menu: "How it works", href: "#how-it-works" },
  { menu: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navlinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => ({
          id: link.href.replace("#", ""),
          href: link.href,
        }));

      if (window.scrollY < 100) {
        setActiveLink("/");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        setActiveLink(href);
        setIsMenuOpen(false);
        document.body.style.overflow = "unset";
      }
    } else {
      setActiveLink(href);
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "shadow-md bg-white" : ""
      }`}
      style={{
        background: scrolled
          ? "white"
          : "linear-gradient(90deg, #FFF5F7 100%, #FFF 100%)",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-black logo transition-all duration-300">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#056608] to-[#0a9e0f]">
            MyUni
          </span>
        </h1>

        <ul className="hidden md:flex items-center md:gap-10 text-[20px] font-medium text">
          {navlinks.map((menu, index) => (
            <li key={index} className="relative group">
              <Link
                href={menu.href}
                onClick={(e) => handleScroll(e, menu.href)}
                className={`hover:text-[#056608] transition-colors duration-300 py-2 block ${
                  activeLink === menu.href ? "text-[#056608]" : ""
                }`}
              >
                {menu.menu}
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-[3px] flex justify-center">
                <div
                  className={`h-full bg-[#056608] rounded-full transition-all duration-300 ${
                    activeLink === menu.href ? "w-3/4" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>

        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQkJ000iwaORX_--ZSiduSnUQJGNUqbiUwfV069XPXzkU2Gw/viewform?usp=sharing"
          target="_blank"
          className="hidden md:block"
        >
          Take the Quiz
        </Button>

        <button
          onClick={toggleMenu}
          className={`block md:hidden z-50 transition-transform duration-300 ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
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
              className="transition-transform duration-300 rotate-90"
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
              className="transition-transform duration-300"
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

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />
        <div
          className={`absolute top-[84px] w-full right-4 bg-white rounded-lg max-w-xs py-2 shadow-xl transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-20"
          }`}
        >
          <ul className="flex flex-col w-full">
            {navlinks.map((menu, index) => (
              <li
                key={index}
                className="relative border-b border-gray-100 last:border-none overflow-hidden"
              >
                <Link
                  href={menu.href}
                  className={`block px-6 py-4 text-lg transition-all duration-300 ${
                    activeLink === menu.href
                      ? "bg-green-50 text-[#056608] font-medium"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={(e) => handleScroll(e, menu.href)}
                >
                  <div className="flex items-center">
                    {activeLink === menu.href && (
                      <div className="w-1.5 h-1.5 mr-2 rounded-full bg-[#056608]" />
                    )}
                    {menu.menu}
                  </div>
                </Link>
              </li>
            ))}
            <li className="px-4 py-3 transform transition-transform duration-300 hover:scale-[1.02]">
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQkJ000iwaORX_--ZSiduSnUQJGNUqbiUwfV069XPXzkU2Gw/viewform?usp=sharing"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="w-full"
              >
                Take the Quiz
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
