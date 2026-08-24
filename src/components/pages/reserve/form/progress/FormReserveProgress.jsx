import FormReserveProgressNumber from "./FormReserveProgressNumber";

export default function FormReserveProgress({ current = 0 }) {
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
					<FormReserveProgressNumber number={ index >= current ? index + 1 : -1 } 
						filledClass={ (index === current ? "text-background bg-accent-2" : (index < current ? "text-background bg-accent-1" : "text-text bg-background-card")) } 
						title={ titles[index] }
						titleColor={ (index === current ? "text-accent-2" : (index < current ? "text-accent-1" : "text-text")) } />
					{ index < n - 1 ?
						<div className={"w-15 h-0 my-auto border-t" + " " + (index < current ? "border-accent-1" : "border-background-card/50") }></div>
						: ""
					}
				</div>
			))}
		</ul>
	)
}