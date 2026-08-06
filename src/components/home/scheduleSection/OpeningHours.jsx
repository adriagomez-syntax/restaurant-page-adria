import { openingHours } from '../../../assets/data'
import OpeningHoursCard from './OpeningHoursCard'

export default function OpeningHours() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:min-w-[50vw] justify-center items-center flex-wrap md:mx-auto">
            {openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
                <OpeningHoursCard key={day} day={day} hoursBegin={hoursBegin} hoursEnd={hoursEnd} isOpen={isOpen} />
            ))}
        </ul>
    )
}