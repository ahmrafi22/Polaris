import { Button } from "@/components/ui/button"; 
import { Logo } from "./logo";
import Link from "next/link";
import { Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";
const font3 = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

export const Footer = () => {
    return (
        <div className={cn("flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]", font3.className)}>
            <Logo />

            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Link href="/admin">
                    <Button variant="ghost" size="sm"> Admin </Button>
                </Link>
                <Button variant="ghost" size="sm"> Moreoptions2 </Button>
            </div>
        </div>
    );
};
