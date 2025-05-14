"use client";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinners";
import { useClerk } from "@clerk/clerk-react";
import TextRotate from "./animation";
import { motion, LayoutGroup } from "motion/react";

import { Days_One, Orbitron } from "next/font/google";

import { cn } from "@/lib/utils";
import StartButton from "./start-button";

const font = Days_One({
  subsets: ["latin"],
  weight: ["400"],
});

const font2 = Orbitron({
  subsets: ["latin"],
  weight: ["800"],
});

const font3 = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { openSignIn } = useClerk();
  
  return (
    <div className="max-w-5xl space-y-4 -mb-10">
      <div className="flex justify-center">
        <LayoutGroup>
          <motion.h1
            className={cn(
              "flex whitespace-pre text-3xl sm:text-4xl md:text-5.5xl dark:text-white text-black",
              font.className
            )}
            layout
          >
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              Your{" "}
            </motion.span>
            <TextRotate
              texts={["Documents", "Ideas", "Plans", "Tasks", "Sketches"]}
              mainClassName="text-white px-2 sm:px-3 md:px-4 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h1>
        </LayoutGroup>
      </div>
      
      <div className="flex justify-center">
        <h1
          className={cn(
            font.className,
            "dark:text-white text-[35px] sm:text-5xl md:text-5.5xl py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mb-11"
          )}
        >
          All in One Place{" "}
          <span className={cn("relative inline-block text-4.5xl sm:text-5.5xl md:text-6xl ", font2.className)}>
            Polaris
            <motion.span 
              className="absolute bottom-[-10px] left-0 h-[8px] border-t-[5px] border-solid rounded-[50%] border-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 1.15, 
                ease: "easeInOut",
                delay: 0.2
              }}
            />
          </span>
        </h1>
      </div>

      <h3 className={cn("text-base sm:text-[10px] md:text-[17px] tracking-wider font-medium text-center", font3.className)}>
        Make your everyday more productive!!
      </h3>
      
      <div className="flex justify-center">
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}

        {isAuthenticated && !isLoading && (
          <StartButton 
            text="Enter Polaris" 
            href="/documents"
          />
        )}

        {!isAuthenticated && !isLoading && (
          <StartButton 
            text="Get Polaris" 
            onClick={() => openSignIn()} 
          />
        )}
      </div>
    </div>
  );
};