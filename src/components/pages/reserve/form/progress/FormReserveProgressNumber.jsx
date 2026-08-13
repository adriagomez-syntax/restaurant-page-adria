import { FaCheck } from "react-icons/fa";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function FormReserveProgressNumber({ number, title, filledClass = "", titleColor = "" }) {
	const finalClass = filledClass + " " + "flex justify-center items-center size-10 rounded-full border border-accent-1/50 p-4";

	return (
		<li className="flex flex-col gap-2 items-center">
			<div className={finalClass}>
				<p className="text-xs">{ number > -1 ? number.toString().padStart(2, '0') : <FaCheck /> }</p>
			</div>
			<TitleHighlight className={ "text-xs text-center" } color={ titleColor }>{ title }</TitleHighlight>
		</li>
	)
}