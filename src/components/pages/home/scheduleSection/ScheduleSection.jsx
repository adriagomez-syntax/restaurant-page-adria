import Section from "../../../common/utils/Section";
import OpeningHours from "./OpeningHours";
import TitleHighlight from "../../../common/utils/TitleHighlight";

export default function ScheduleSection() {
    return (
        <Section className="bg-background-mid flex-col gap-8 justify-center min-h-screen">
            <div className="md:mx-auto">
                <TitleHighlight>Öffnungszeiten</TitleHighlight>
                <h2 className="text-3xl md:text-5xl mt-8 mb-8">Wann wir für Sie da sind</h2>
            </div>
            <OpeningHours />
        </Section>
    )
}