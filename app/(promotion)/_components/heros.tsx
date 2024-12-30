import Image from "next/image";
import { Days_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";

const font = Days_One({
    subsets: ["latin"],
    weight: ["400"]
});

export const Heroes = () => {
    return (
        <div className="w-[95%] h-full dark:bg-gray-800 rounded-[20px] ">
            <div className="w-full h-full flex flex-col items-center gap-4 pt-24 sticky ">
                <div className="w-[60%] h-[70vh] p-12 mb-11 sticky top-[100px]  bg-white/15 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-10 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20  ">

                    <div className="flex justify-center">
                        <h1 className=" text-3xl uppercase font-semibold ">
                            Rich Text Editor
                        </h1>

                    </div>


                </div>
                <div className="w-[60%] h-[70vh] rounded-[20px] bg-white/15 shadow-[0_10px_10px_rgba(0,0,0,0.3)] backdrop-blur-[4px] border-20px border-white/20 sticky top-[150px] mb-10"></div>
                <div className="w-[60%] h-[70vh] rounded-[20px] bg-white/15 shadow-[0_10px_10px_rgba(0,0,0,0.3)] backdrop-blur-[4px] border-20px border-white/20 sticky top-[200px] mb-11"></div>
                <div className=" w-[60%] h-[70vh] rounded-[20px] bg-white/15 shadow-[0_10px_10px_rgba(0,0,0,0.3)] backdrop-blur-[4px] border-20px border-white/20 sticky top-[250px] mb-10"></div>
            </div>
        </div>
    );
};

export default Heroes;
