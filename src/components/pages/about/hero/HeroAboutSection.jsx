import Hero from "../../../common/hero/Hero";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import HeroAboutSlogan from "./HeroAboutSlogan"
import HeroAboutWelcomeText from "./HeroAboutWelcomeText";

export default function HeroAboutSection() {
	return (
		<Hero>
			<TitleHighlight>Über uns</TitleHighlight>
			<HeroAboutSlogan />
			<HeroAboutWelcomeText />
		</Hero>
	)
}