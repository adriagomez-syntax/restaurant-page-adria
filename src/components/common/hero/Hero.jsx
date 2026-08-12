import SectionWidth from "../utils/SectionWidth";
import "../../common/utils/css/DiagonalLines.css"

export default function Hero({ classNameParent = "", className = "", children }) {
	return (
		<SectionWidth first={ true } className={ className } classNameParent={ classNameParent + " " + "bg-background-mid min-h-80 bg-diagonal-lines" }>
			<div className="flex">
				<div className="flex flex-col gap-4 justify-center">
					{ children }
				</div>
			</div>
		</SectionWidth>
	)
}