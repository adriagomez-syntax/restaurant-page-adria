import TitleHighlight from '../../utils/TitleHighlight.jsx'
import openingHours from '../../../../assets/data/openingHours.json' with { type: 'json' }

export default function FooterSchedule() {
	return (
		<div className="max-w-xs md:mr-auto">
			<TitleHighlight className="py-4">Öffnungszeiten</TitleHighlight>
			<ul className="flex flex-col gap-2 text-text font-light">
				{openingHours.map(({ day, hoursBegin, hoursEnd, isOpen }) => (
					<li key={day} className={isOpen ? "" : "text-text/50"}>
						{day}: {isOpen ? `${hoursBegin} - ${hoursEnd}` : "Geschlossen"}
					</li>
				))}
			</ul>
		</div>
	)
}