import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  target?: string;
  style?: object;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  href,
  target,
  style,
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <>
      {href ? (
        <Link href={href} target={target}>
          <button
            onClick={onClick}
            className={`relative overflow-hidden bg-[#0a9e0f] hover:bg-[#07b30c] active:bg-[#056608] text-white rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-md hover:shadow-lg active:shadow ${className}`}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <p className="text-base font-medium">{children}</p>
            </div>
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          style={style}
          className={`relative overflow-hidden bg-[#0a9e0f] hover:bg-[#07b30c] active:bg-[#056608] text-white rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-md hover:shadow-lg active:shadow ${className}`}
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <p className="text-base font-medium">{children}</p>
          </div>
        </button>
      )}
    </>
  );
}
