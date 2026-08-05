export default function OpeningHoursCard({ day, hoursBegin, hoursEnd, isOpen }) {
    return (
        <li>
            <h4>{day}</h4>
            <p>{isOpen ? `${hoursBegin} - ${hoursEnd}` : "Geschlossen"}</p>
        </li>
    )
}