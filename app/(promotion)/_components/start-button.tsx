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
          className={`transition-all duration-300 ease-in-out ${
            isHovered ? "translate-x-[150%] -translate-y-[150%] text-black" : "translate-x-0 translate-y-0 text-purple-700"
          }`}
        >
          <MoveUpRight size={14} />
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

  const baseButtonClasses = "flex cursor-pointer items-center gap-3 text-white font-semibold py-3 px-3 pl-3 sm:py-3 sm:px-5 sm:pl-5 rounded-full transition-all duration-700 ease-in-out";
  const buttonColorClasses = isHovered ? "bg-black" : "bg-purple-600";

  if (onClick) {
    return (
      <button
        className={`${baseButtonClasses} ${buttonColorClasses}`}
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
        className={`${baseButtonClasses} ${buttonColorClasses} mt-6`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </div>
    </Link>
  );
}