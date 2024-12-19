import Link from "next/link";
import React from "react";
import Button from "../common/Button";

const navlinks = [
  { menu: "Home", href: "/" },
  { menu: "How it works", href: "/" },
  { menu: "Testimonials", href: "/" },
];

export default function Navbar() {
  return (
    <nav
      className="py-[30px] px-4"
      style={{ background: "linear-gradient(90deg, #FFF5F7 100%, #FFF 100%)" }}
    >
      <div className="max-w-[1240px] w-full mx-auto flex items-center justify-between">
        <h1 className="text-[40px] font-black logo">MyUni</h1>
        <ul className="hidden md:flex items-center md:gap-10 lg:gap-16 text-[20px] font-medium text">
          {navlinks.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>{menu.menu}</Link>
            </li>
          ))}
        </ul>
        <Button>Take the Quiz</Button>
      </div>
    </nav>
  );
}
