export default function ValuesAboutBox({ title, text, className = "" }) {
	return (
		<div className={className + " " + "flex flex-col gap-4 p-8 border border-accent-1/50 bg-background-card"}>
			<h3 className="text-lg font-secondary">{ title }</h3>
			<p className="text-text font-light">{ text }</p>
		</div>
	)
}