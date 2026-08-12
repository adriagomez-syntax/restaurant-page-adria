import Hero from "../../../common/hero/Hero"
import HeroMenuSlogan from "./HeroMenuSlogan"
import TitleHighlight from "../../../common/utils/TitleHighlight"
import HeroMenuWelcomeText from "./HeroMenuWelcomText"

export default function HeroMenuSection() {
	return (
		<Hero>
			<TitleHighlight>Unsere Küche</TitleHighlight>
			<HeroMenuSlogan />
			<HeroMenuWelcomeText />
		</Hero>
	)
}