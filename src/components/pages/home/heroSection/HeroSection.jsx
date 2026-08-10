import RestaurantName from "./RestaurantName";
import WelcomeText from "./WelcomeText";
import HeroButtons from "./HeroButtons";
import Section from "../../../common/utils/Section";

export default function HeroSection() {
    return (
        <Section first="true" className="min-h-[92vh] flex-col justify-end md:p-8 pb-15 bg-background/65  bg-[url(/src/assets/images/Foto0.jpg)] bg-blend-multiply bg-cover bg-center bg-no-repeat">
            <RestaurantName />
            <WelcomeText />
            <HeroButtons />
        </Section>
    )
}