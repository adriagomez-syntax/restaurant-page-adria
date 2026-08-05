import { openingHours } from '../assets/data.js'

export default function FooterSchedule() {
    return (
        <div>
            <h3>Öffnungszeiten</h3>
            <ul>
                {openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
                    <li key={day}>
                        {day}: {isOpen ? `${hoursBegin} - ${hoursEnd}` : "Geschlossen"}
                    </li>
                ))}
            </ul>
        </div>
    )
}