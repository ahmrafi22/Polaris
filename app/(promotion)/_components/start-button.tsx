import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Orbitron } from "next/font/google";

const font3 = Orbitron({ subsets: ["latin"], weight: ["600"] });

interface StartButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
}

export default function StartButton({ 
  text = "Explore All", 
  href = "#", 
  onClick 
}: StartButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <>
      <span className={font3.className}>{text}</span>
      <div className="relative w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isHovered ? "translate-x-[150%] -translate-y-[150%]" : "translate-x-0 translate-y-0"
          }`}
        >
          <MoveUpRight size={14} className={`text-purple-700 ${isHovered ? "text-black" : ""}`} />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-300 ease-in-out delay-100 ${
            isHovered ? "translate-x-0 translate-y-0" : "-translate-x-[150%] translate-y-[150%]"
          }`}
        >
          <MoveUpRight size={14} className="text-black" />
        </div>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        className="flex cursor-pointer items-center gap-3  bg-purple-600 text-white font-semibold py-3 px-3 pl-3 sm:py-3 sm:px-5 sm:pl-5 rounded-full transition-colors duration-300 hover:bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    );
  }

  return (
    <Link href={href} passHref>
      <div
        className="flex cursor-pointer items-center gap-3 mt-6 bg-purple-600 text-white font-semibold py-3 px-3 pl-3 sm:py-3 sm:px-5 sm:pl-5 rounded-full transition-colors duration-300 hover:bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </div>
    </Link>
  );
}