import { openingHours } from '../../../../assets/data.js'

export default function FooterSchedule() {
    return (
        <div className="max-w-xs md:mr-auto">
            <h3 className="text-amber tracking-widest uppercase py-4">Öffnungszeiten</h3>
            <ul className="flex flex-col gap-2 text-stone font-light">
                {openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
                    <li key={day} className={isOpen ? "" : "text-stone/50"}>
                        {day}: {isOpen ? `${hoursBegin} - ${hoursEnd}` : "Geschlossen"}
                    </li>
                ))}
            </ul>
        </div>
    )
}