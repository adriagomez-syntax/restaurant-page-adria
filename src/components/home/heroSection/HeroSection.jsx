import Button from "../../common/Button";
import HeroImage from "./HeroImage";
import RestaurantName from "./RestaurantName";
import WelcomeText from "./WelcomeText";

export default function HeroSection() {
    return (
        <section>
            <HeroImage />
            <RestaurantName />
            <WelcomeText />
            <Button text="Tisch Reservieren" onClick={() => {window.location = "#Reservation"}} />
            <Button text="Speisekarte Ansehen" onClick={() => {window.location = "#Menu"}} />
        </section>
    )
}