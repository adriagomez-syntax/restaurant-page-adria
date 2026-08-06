import FilledButton from "../../common/utils/FilledButton";
import Section from "../../common/utils/Section";

export default function ReservierungSection() {
    return (
        <Section className="bg-purple min-h-[50vh] flex-col gap-8 justify-center items-center">
            <div className="text-dark text-center font-light text-3xl">
                <h3>Erleben Sie Spanien</h3> 
                <h3 className="italic">heute Abend</h3>
            </div>
            <p className="text-dark-mid font-light text-center">Reservieren Sie Ihren Tisch — wir freuen uns auf Sie.</p>
            <FilledButton onClick={() => {window.location = "#Reservation"}} colorBg="gold" colorText="dark">
                Jetzt Reservieren
            </FilledButton>
        </Section>
    )
}