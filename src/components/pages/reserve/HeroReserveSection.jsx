import Hero from "../../common/hero/Hero";
import SloganText from "../../common/hero/SloganText";
import WelcomeText from "../../common/hero/WelcomeText";
import TitleHighlight from "../../common/utils/TitleHighlight";

export default function HeroReserveSection() {
	return (
		<Hero>
			<TitleHighlight>Online Buchen</TitleHighlight>
			<SloganText>Reservierung</SloganText>
			<WelcomeText>Sichern Sie sich Ihren Tisch in wenigen Schritten.</WelcomeText>
		</Hero>
	)
}