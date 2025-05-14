import Image from "next/image";
import { Orbitron } from "next/font/google"

import { cn  } from "@/lib/utils";

const font = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
});


export const Logo  = () => {
    return ( 
        <div className="hidden md:flex items-center gap-x-2">
            <Image
              src="/polaris.svg"
              height="40"
              width="40"
              alt="logo"
              className="dark:hidden"
              />
              <Image
              src="/Polarisdark.svg"
              height="40"
              width="40"
              alt="logo"
              className="hidden dark:block"
              />

              <p className={cn("font-semibold", font.className)}>
                Polaris
              </p>
        </div>
    );
}