import ButtonSelection from "../../../../common/utils/button/ButtonSelection";
import TitleHighlight from "../../../../common/utils/TitleHighlight";
import reserveHours from "../../../../../assets/data/reserveHours.json" with { type: 'json' }

export default function FormReserveDateHour() {
	return (
		<div className="flex flex-col gap-2">
			<TitleHighlight className="text-text text-sm">Uhrzeit</TitleHighlight>
			<ul className="columns-3 gap-2 space-y-2">
				{
					reserveHours.map((hour, index) => (
						<li key={ index }>
							<ButtonSelection className="w-full">{ hour.hour }</ButtonSelection>
						</li>
					))
				}
			</ul>
		</div>
	)
}