"use client"

import Image from "next/image";
import { Days_One, Tomorrow } from "next/font/google";
import { cn } from "@/lib/utils";
import { CornerDownRight } from "lucide-react";
import {
  createContext,
  useContext,
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react"
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "motion/react"

const font = Days_One({
    subsets: ["latin"],
    weight: ["400"]
});

const font2 = Tomorrow({
  subsets: ["latin"],
  weight: ["400"],
});

interface HeroSection {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    gradient: string;
    features: string[];
    textColor: string;
}

// StackingCards Context and Components
interface StackingCardsProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  scrollOptons?: UseScrollOptions
  scaleMultiplier?: number
  totalCards: number
}

interface StackingCardItemProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  index: number
  topPosition?: string
}

const StackingCardsContext = createContext<{
  progress: MotionValue<number>
  scaleMultiplier?: number
  totalCards?: number
} | null>(null)

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext)
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards")
  return context
}

function StackingCards({
  children,
  className,
  scrollOptons,
  scaleMultiplier,
  totalCards,
  ...props
}: StackingCardsProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptons,
    target: targetRef,
  })
  return (
    <StackingCardsContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn(className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  )
}

const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}: StackingCardItemProps) => {
  const {
    progress,
    scaleMultiplier,
    totalCards = 0,
  } = useStackingCardsContext()
  const scaleTo = 1 - (totalCards - index) * (scaleMultiplier ?? 0.03)
  const rangeScale = [index * (1 / totalCards), 1]
  const scale = useTransform(progress, rangeScale, [1, scaleTo])
  
  const top = topPosition ?? `${12 + index * 3}vh`
  
  return (
    <div className={cn("h-full sticky", className)} style={{top: "0px"}} {...props}> 
      <motion.div
        className="origin-top relative h-full flex justify-center"
        style={{ top, scale }}
      >
        {children}
      </motion.div>
    </div>
  )
}


const heroSections: HeroSection[] = [
    {
        title: "Enhanced Block Note Documents",
        description: "A powerful streamlined rich text editor designed for clarity and efficiency. Built with Blocknote, this tool makes note-taking and content creation seamless, letting you focus on your ideas without distractions.",
        imageSrc: "/doc.png",
        imageAlt: "Block Note Preview",
        gradient: "from-blue-300 to-yellow-300",
        features: [
            "Versatile Formatting",
            "Block-Based Structure",
            "Lightweight & Fast",
            "Instant share with anyone"
        ],
        textColor: "text-blue-50"
    },
    {
        title: "Dynamic Dashboard",
        description: "Boost your productivity with your go-to dashboard that transforms how you track, manage, and achieve your goals. Experience a seamless blend of task management, academic planning, and habit formation all in one place.",
        imageSrc: "/dashboard.png",
        imageAlt: "Dashboard Preview",
        gradient: "from-purple-300 to-pink-300",
        features: [
            "Track your tasks and deadlines",
            "Manage your exam schedule and study plans",
            "Monitor study time and productivity metrics",
            "Build and maintain positive habits",
            "Visualize your progress with analytics"
        ],
        textColor: "text-purple-50"
    },
    {
        title: "AI Chatbot Assistant",
        description: "Discover the power of Polaris AI chatbot, powered by Google's generative AI Gemini. Get intelligent responses, analyze complex information, and receive creative assistance tailored to your needs.",
        imageSrc: "/aichat.png",
        imageAlt: "AI Assistant Preview",
        gradient: "from-green-300 to-blue-300",
        features: [
            "Get instant answers to complex questions",
            "Analyze images and extract insights",
            "Generate comprehensive study notes",
            "Receive creative writing assistance",
            "Access educational resources"
        ],
        textColor: "text-green-50"
    },
    {
        title: "Interactive Drawing Canvas",
        description: "Unleash your creativity with our advanced drawing canvas. Transform your ideas into visual masterpieces, create detailed mind maps, and collaborate with others in real-time.",
        imageSrc: "/canvas.png",
        imageAlt: "Canvas Preview",
        gradient: "from-orange-300 to-red-300",
        features: [
            "Design intuitive mind maps",
            "Sketch freehand illustrations",
            "Collaborate in real-time",
            "Export in multiple formats"
        ],
        textColor: "text-orange-50"
    }
];

interface HeroCardProps {
    section: HeroSection;
}

const HeroCard: React.FC<HeroCardProps> = ({ section }) => {
    return (
        <div className={cn(
            "w-full lg:w-[80%] h-auto md:h-[70vh] border-gray-300 border-2 p-6 md:p-12 rounded-3xl overflow-hidden relative bg-gradient-to-l from-gray-900 to-gray-600"
        )}>
            <div className="flex flex-col sm:flex-row justify-between h-full relative">
                <div className="relative md:absolute md:-left-16 lg:-left-24 xl:-left-40 top-0 w-full md:w-3/5 h-48 md:h-full z-10">
                    <div className="relative w-full h-full">
                        <Image 
                            src={section.imageSrc}
                            alt={section.imageAlt}
                            fill
                            className="rounded-[20px] sm:mr-6 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>

                {/* Content container - pushed to the right on desktop */}
                <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 ml-auto mt-6 md:mt-0 relative z-20">
                    <h1 className={cn(
                        "text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r",
                        section.gradient,
                        font.className
                    )}>
                        {section.title}
                    </h1>
                    <p className={cn("text-lg md:text-xl text-left leading-relaxed", section.textColor, font2.className)}>
                        {section.description}
                    </p>
                    <div className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-4">
                        {section.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 md:gap-3">
                                <CornerDownRight className={cn("h-5 w-5", section.textColor)} />
                                <span className={cn("text-base md:text-lg tracking-wide", section.textColor, font2.className)}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Heroes: React.FC = () => {
    return (
        <div className="w-full h-full min-h-screen px-4">
            <StackingCards 
                className="w-full h-full flex flex-col items-center gap-64 pt-24 pb-64" 
                totalCards={heroSections.length}
                scaleMultiplier={0.03}
            >
                {heroSections.map((section, index) => (
                    <StackingCardItem 
                        key={index} 
                        index={index}
                        className="w-full"
                    >
                        <HeroCard section={section} />
                    </StackingCardItem>
                ))}
            </StackingCards>
        </div>
    );
};

export default Heroes;