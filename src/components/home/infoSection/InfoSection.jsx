import InfoCard from "./InfoCard";

const cardsData = [
    { title: "🫒 Authentische Zutaten", text: "Wir importieren wöchentlich frische Zutaten direkt aus Spanien — Olivenöl, Ibérico-Schinken, Saffron aus La Mancha." },
    { title: "🍷 Spanische Weinkultur", text: "Unsere Sommelière Sofía kuratiert eine Weinkarte mit über 60 Positionen aus allen Regionen Spaniens." },
    { title: "💃🏻 Flamenco-Abende", text: "Jeden Freitag und Samstag ab 20 Uhr: Live-Flamenco-Vorführungen — Tanz, Gesang und Gitarre." },
]

export default function InfoSection() {
    return (
        <section>
            {cardsData.map((card, index) => (
                <InfoCard key={index} title={card.title} text={card.text} />
            ))}
        </section>
    )
}