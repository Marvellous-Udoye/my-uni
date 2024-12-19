import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({ href, className, children }: ButtonProps) {
  return (
    <>
      <Link href={href ?? ""}>
        <div
          className={`bg-[#056608] text-white rounded-xl px-4 py-5 cursor-pointer button ${className}`}
        >
          <p className="text-[20px] font-medium">{children}</p>
        </div>
      </Link>
    </>
  );
}
