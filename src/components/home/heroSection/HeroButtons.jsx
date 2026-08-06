import FilledButton from "../../common/utils/FilledButton";
import OutlinedButton from "../../common/utils/OutlinedButton";

export default function HeroButtons() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-15 mb-8 md:mb-20">
            <FilledButton onClick={() => {window.location = "#Reservation"}}>
                Tisch Reservieren
            </FilledButton>
            <OutlinedButton onClick={() => {window.location = "#Menu"}}>
                Speisekarte Ansehen
            </OutlinedButton>
        </div>
    )
}