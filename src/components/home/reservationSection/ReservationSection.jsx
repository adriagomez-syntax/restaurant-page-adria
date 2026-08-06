import Button from "../../common/utils/Button";

export default function ReservierungSection() {
    return (
        <section>
            <h3>Erleben Sie Spanien heute Abend</h3>
            <p>Reservieren Sie Ihren Tisch — wir freuen uns auf Sie.</p>
            <Button text="Jetzt Reservieren" onClick={() => {window.location = "#Reservation"}} />
        </section>
    )
}