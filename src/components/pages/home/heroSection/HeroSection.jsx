import RestaurantName from "./RestaurantName";
import HomeWelcomeText from "./HomeWelcomeText";
import HeroButtons from "./HeroButtons";
import Section from "../../../common/utils/Section";

export default function HeroSection() {
	return (
		<Section first={ true } className="min-h-[92vh] flex-col justify-end md:p-8 pb-15 bg-background/65  bg-[url(/images/gallery/Foto0.jpg)] bg-blend-multiply bg-cover bg-center bg-no-repeat">
			<RestaurantName />
			<HomeWelcomeText />
			<HeroButtons />
		</Section>
	)
}