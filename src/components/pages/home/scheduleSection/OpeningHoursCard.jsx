export default function OpeningHoursCard({ day, hoursBegin, hoursEnd, isOpen }) {
	const classBox = (isOpen ? "bg-background-card" : "") + " flex flex-col justify-center w-full border min-h-20 p-4 text-text"
    
	return (
		<li className={classBox}>
			<h4 className="text-xs uppercase">{day}</h4>
			<p className={(isOpen ? "text-accent-1" : "") + " font-secondary"}>
				{isOpen ? `${hoursBegin} - ${hoursEnd} Uhr` : "Geschlossen"}
			</p>
		</li>
	)
}