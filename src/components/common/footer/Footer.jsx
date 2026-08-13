import FooterBottom from "./bottom/FooterBottom";
import FooterMain from "./main/FooterMain";

export default function Footer() {
	return (
		<footer className="flex flex-col border-t border-t-background-card/50">
			<FooterMain />
			<FooterBottom />
		</footer>
	)
}