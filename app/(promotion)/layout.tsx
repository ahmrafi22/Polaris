import { Navbar } from "./_components/navbar";
import { UserCreationHandler } from "./_components/UserCreationHandler";

const PromotionLayout =({
    children 
}:{
    children:React.ReactNode;
}) => {
    return(
        <div className="min-h-screen dark:bg-gradient-to-tl from-gray-600 to-[#1F1F1F]">
            <Navbar />
            <UserCreationHandler />
            <main className="pt-36">
                {children}
            </main>
        </div>
    )
}

export default PromotionLayout;