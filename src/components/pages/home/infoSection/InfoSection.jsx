import Section from "../../../common/utils/Section";
import InfoCard from "./InfoCard";

const cardsData = [
    { title: "🫒 Authentische Zutaten", text: "Wir importieren wöchentlich frische Zutaten direkt aus Spanien — Olivenöl, Ibérico-Schinken, Saffron aus La Mancha.", color: "text-secondary" },
    { title: "🍷 Spanische Weinkultur", text: "Unsere Sommelière Sofía kuratiert eine Weinkarte mit über 60 Positionen aus allen Regionen Spaniens.", color: "text-accent-2" },
    { title: "💃🏻 Flamenco-Abende", text: "Jeden Freitag und Samstag ab 20 Uhr: Live-Flamenco-Vorführungen — Tanz, Gesang und Gitarre.", color: "text-accent-3" },
]

export default function InfoSection() {
    return (
        <Section className="bg-background-mid min-h-screen md:min-h-[50vh] flex-col gap-4 md:flex-row justify-center items-center">
            {cardsData.map((card, index) => (
                <InfoCard key={index} title={card.title} text={card.text} colorTitle={card.color} />
            ))}
        </Section>
    )
}