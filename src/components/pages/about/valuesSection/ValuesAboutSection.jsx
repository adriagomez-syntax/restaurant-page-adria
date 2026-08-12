import SectionWidth from "../../../common/utils/SectionWidth";
import TitleHighlight from "../../../common/utils/TitleHighlight"
import ValuesAboutBox from "./ValuesAboutBox";

export default function ValuesAboutSection() {
	return (
		<SectionWidth className="flex-col gap-6" classNameParent="py-20 bg-background-mid min-h-screen md:min-h-min justify-center">
			<TitleHighlight>Unsere Werte</TitleHighlight>
			<div className="flex flex-col md:flex-row gap-6">
				<ValuesAboutBox className="text-accent-1"
					title="Authentizität"
					text="Keine Fusionsküche - nur ehrliche, traditionelle spanische Rezepte." />
				<ValuesAboutBox className="text-secondary"
					title="Qualität"
					text="Frische Zutaten, wöchentlich aus Spanien importiert oder regional bezogen." />
				<ValuesAboutBox className="text-accent-2"
					title="Gastfreundschaft"
					text="Jeder Gast wird wie ein Freund empfangen - herzlich und ohne Eile." />
				<ValuesAboutBox className="text-accent-3"
					title="Nachhaltigkeit"
					text="Saisonale Küche, kurze Lieferwege, faire Partnerschaften." />
			</div>
		</SectionWidth>
	)
}