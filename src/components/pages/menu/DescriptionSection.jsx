import Section from "../../common/utils/Section"
import TitleHighlight from "../../common/utils/TitleHighlight"
import "../../common/utils/css/DiagonalLines.css"

export default function DescriptionSection() {
    return (
        <Section first="true" className="bg-background-mid min-h-80 bg-diagonal-lines">
            <div className="flex-1 flex">
                <div className="flex flex-1 flex-col gap-4 justify-center md:ml-40">
                    <TitleHighlight>Unsere Küche</TitleHighlight>
                    <h1 className="text-4xl font-secondary font-light md:text-5xl">Speisekarte</h1>
                    <p className="text-text font-light">Frisch zubereitet, täglich wechselnde Spezialitäten - stets mit Zutaten aus Spanien.</p>
                </div>
            </div>
            <div className="md:flex-1"></div>
        </Section>
    )
}