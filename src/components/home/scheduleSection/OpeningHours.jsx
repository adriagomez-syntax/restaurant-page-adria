import { openingHours } from '../../../assets/data'
import OpeningHoursCard from './OpeningHoursCard'

export default function OpeningHours() {
    return (
        <ul className="flex flex-col gap-4 justify-center items-center">
            {openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
                <OpeningHoursCard key={day} day={day} hoursBegin={hoursBegin} hoursEnd={hoursEnd} isOpen={isOpen} />
            ))}
        </ul>
    )
}