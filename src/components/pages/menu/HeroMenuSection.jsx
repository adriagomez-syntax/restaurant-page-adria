import Hero from "../../common/hero/Hero"
import SloganText from "../../common/hero/SloganText"
import TitleHighlight from "../../common/utils/TitleHighlight"
import WelcomeText from "../../common/hero/WelcomeText"

export default function DescriptionMenuSection() {
	return (
		<Hero>
			<TitleHighlight>Unsere Küche</TitleHighlight>
			<SloganText>
				<h1>Speisekarte</h1>
			</SloganText>
			<WelcomeText>
                Frisch zubereitet, täglich wechselnde Spezialitäten - stets mit Zutaten aus Spanien.
			</WelcomeText>
		</Hero>
	)
}