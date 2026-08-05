import { openingHours } from '../../../assets/data'
import OpeningHoursCard from './OpeningHoursCard'

export default function OpeningHours() {
    return (
        <ul>
            {openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
                <OpeningHoursCard key={day} day={day} hoursBegin={hoursBegin} hoursEnd={hoursEnd} isOpen={isOpen} />
            ))}
        </ul>
    )
}