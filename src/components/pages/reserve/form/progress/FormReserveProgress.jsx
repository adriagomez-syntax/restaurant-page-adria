import FormReserveProgressNumber from "./FormReserveProgressNumber";

export default function FormReserveProgress({ progress = 0 }) {
	const n = 3;
	const titles = [
		"Datum & Zeit",
		"Ihre Daten",
		"Bestätigen"
	]
	
	return (
		<ul className="flex gap-2 justify-center items-center mb-12">
			{Array.from({ length: n }, (_, index) => (
				<div key={ index } className="flex gap-2">
					<FormReserveProgressNumber number={ index >= progress ? index + 1 : -1 } 
						filledClass={ (index === progress ? "text-background bg-accent-2" : (index < progress ? "text-background bg-accent-1" : "text-text bg-background-card")) } 
						title={ titles[index] }
						titleColor={ (index === progress ? "text-accent-2" : (index < progress ? "text-accent-1" : "text-text")) } />
					{ index < n - 1 ?
						<div className={"w-15 h-0 my-auto border-t" + " " + (index < progress ? "border-accent-1" : "border-background-card/50") }></div>
						: ""
					}
				</div>
			))}
		</ul>
	)
}