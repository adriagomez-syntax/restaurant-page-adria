import { FaClock } from "react-icons/fa";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import { openingHours } from "../../../../assets/data"

export default function ContactInfoSchedule() {
	return (
		<div className="flex gap-4">
			<FaClock className="text-primary" />
			<div className="flex flex-col gap-1">
				<TitleHighlight className="text-sm">Öffnungszeiten</TitleHighlight>
				<ul>
					{ openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
						<li key={ day } className={"font-light " + (isOpen ? "text-text" : "text-text/50")}>
							{ day }: { isOpen ? `${hoursBegin} - ${hoursEnd}` : "Geschlossen"}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}