import Section from "../../common/utils/Section";
import OpeningHours from "./OpeningHours";

export default function ScheduleSection() {
    return (
        <Section className="bg-dark-mid flex-col gap-8 justify-center min-h-screen">
            <div className="md:mx-auto">
                <h2 className="text-amber tracking-widest font-light uppercase font-mono">Öffnungszeiten</h2>
                <h3 className="text-3xl md:text-5xl mt-8 mb-8">Wann wir für Sie da sind</h3>
            </div>
            <OpeningHours />
        </Section>
    )
}