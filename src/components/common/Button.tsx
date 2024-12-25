import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  href,
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <>
      <Link href={href ?? ""}>
        <div
          onClick={onClick}
          className={`bg-[#056608] text-white rounded-xl p-4 cursor-pointer button ${className}`}
        >
          <p className="text-base md:text-[20px] font-medium">{children}</p>
        </div>
      </Link>
    </>
  );
}
