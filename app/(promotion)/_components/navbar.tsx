"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinners";
import Link from "next/link";
import { Orbitron } from "next/font/google";

const font1 = Orbitron({
  subsets: ["latin"],
  weight: ["500"],
});

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push("/documents");
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className={cn(
      "z-50 fixed top-0 flex items-center w-full p-6 ", 
      scrolled && "border-b shadow-sm backdrop-blur-2xl",
      font1.className
    )}>
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="md:ml-auto ml-auto flex items-center gap-x-2">
        {isLoading && (
          <Spinner />
        )}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button className="hidden md:block" size="sm">
                Get Polaris
              </Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter Polaris
              </Link>
            </Button>
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}