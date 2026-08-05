import Button from "./Button";
import HeroImage from "./HeroImage";
import RestaurantName from "./RestaurantName";
import WelcomeText from "./WelcomeText";

export default function HeroSection() {
    return (
        <section>
            <HeroImage />
            <RestaurantName />
            <WelcomeText />
            <Button text="Tisch Reservieren" onClick={() => {window.location = "#Reservierung"}} />
            <Button text="Speisekarte Ansehen" onClick={() => {window.location = "#Speisekarte"}} />
        </section>
    )
}