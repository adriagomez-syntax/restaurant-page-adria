import { Link } from "react-router-dom";
import FilledButton from "../../../common/utils/FilledButton";
import Section from "../../../common/utils/Section";

export default function ReservierungSection() {
    return (
        <Section className="bg-accent-2 min-h-[50vh] flex-col gap-8 justify-center items-center">
            <div className="text-background text-center font-light text-3xl md:text-5xl">
                <h3>Erleben Sie Spanien</h3> 
                <h3 className="font-secondary italic">heute Abend</h3>
            </div>
            <p className="text-background-mid font-light text-center">Reservieren Sie Ihren Tisch — wir freuen uns auf Sie.</p>
            <FilledButton colorBg="accent-1" colorText="background">
                <Link to="reserve">Jetzt Reservieren</Link>
            </FilledButton>
        </Section>
    )
}