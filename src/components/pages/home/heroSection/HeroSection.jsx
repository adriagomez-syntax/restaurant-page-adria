import RestaurantName from "./RestaurantName";
import WelcomeText from "./WelcomeText";
import HeroButtons from "./HeroButtons";

export default function HeroSection() {
    return (
        <section className="flex-1 min-h-screen flex flex-col justify-end p-4 md:p-8 pb-15 bg-background/65  bg-[url(/src/assets/images/Foto0.jpg)] bg-blend-multiply bg-cover bg-center bg-no-repeat">
            <RestaurantName />
            <WelcomeText />
            <HeroButtons />
        </section>
    )
}