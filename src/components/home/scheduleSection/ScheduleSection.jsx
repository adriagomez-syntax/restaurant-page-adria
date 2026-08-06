import Section from "../../common/utils/Section";
import OpeningHours from "./OpeningHours";

export default function ScheduleSection() {
    return (
        <Section className="bg-dark-mid flex-col gap-8 justify-center min-h-screen">
            <h2 className="text-amber tracking-widest font-light">Öffnungszeiten</h2>
            <h3 className="text-3xl">Wann wir für Sie da sind</h3>
            <OpeningHours />
        </Section>
    )
}