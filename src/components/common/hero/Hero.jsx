import Section from "../utils/Section";
import "../../common/utils/css/DiagonalLines.css"

export default function Hero({ className, children }) {
	return (
		<Section first="true" className={className + " " + "bg-background-mid min-h-80 bg-diagonal-lines"}>
			<div className="flex-1 flex">
				<div className="flex flex-1 flex-col gap-4 justify-center md:ml-40">
					{ children }
				</div>
			</div>
			<div className="md:flex-1"></div>
		</Section>
	)
}