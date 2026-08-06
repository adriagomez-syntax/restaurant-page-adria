import HeroImage from "./HeroImage";
import RestaurantName from "./RestaurantName";
import WelcomeText from "./WelcomeText";
import HeroButtons from "./HeroButtons";

export default function HeroSection() {
    return (
        <section className="flex-1 min-h-screen flex flex-col justify-end p-4 md:p-8 mt-15 pb-15">
            <HeroImage />
            <RestaurantName />
            <WelcomeText />
            <HeroButtons />
        </section>
    )
}