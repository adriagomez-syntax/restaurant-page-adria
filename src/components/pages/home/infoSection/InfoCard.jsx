export default function InfoCard({ title, text, colorTitle }) {
	const classTitle = colorTitle + " text-xl mb-4"

	return (
		<div className="flex flex-col justify-center items-center bg-background-card p-8 rounded-sm min-h-50">
			<h4 className={classTitle + " font-secondary"}>{title}</h4>
			<p className="text-text text-center font-light">{text}</p>
		</div>
	)
}