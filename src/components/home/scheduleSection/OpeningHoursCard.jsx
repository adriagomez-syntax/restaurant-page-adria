export default function OpeningHoursCard({ day, hoursBegin, hoursEnd, isOpen }) {
    const classBox = (isOpen ? "bg-dark-card" : "") + " flex flex-col justify-center w-full border min-h-30 p-8 text-stone"
    
    return (
        <li className={classBox}>
            <h4 className="uppercase">{day}</h4>
            <p className={isOpen ? "text-amber" : ""}>{isOpen ? `${hoursBegin} - ${hoursEnd}` : "Geschlossen"}</p>
        </li>
    )
}