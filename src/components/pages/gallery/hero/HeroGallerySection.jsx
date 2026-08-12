import Hero from "../../../common/hero/Hero"
import TitleHighlight from "../../../common/utils/TitleHighlight"
import HeroGallerySlogan from "./HeroGallerySlogan"
import HeroGalleryWelcomeText from "./HeroGalleryWelcomeText"

export default function HeroGallerySection() {
	return (
		<Hero>
			<TitleHighlight>Bilder</TitleHighlight>
			<HeroGallerySlogan />
			<HeroGalleryWelcomeText />
		</Hero>
	)
}