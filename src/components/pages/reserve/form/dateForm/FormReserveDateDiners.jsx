import ButtonSelection from "../../../../common/utils/button/ButtonSelection";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function FormReserveDateDiners({ setDinners = null }) {
	const n = 8;
	
	return (
		<div className="flex flex-col gap-2">
			<TitleHighlight className="text-text text-sm">Anzahl Personen</TitleHighlight>
			<div className="flex gap-2 justify-between">
				{Array.from({ length: n }, (_, index) => (
					<ButtonSelection key={ index } onClick={ () => setDinners(index + 1) } className="w-full">{ (index + 1) + (index === n - 1 ? "+" : "") }</ButtonSelection>
				))}
			</div>
		</div>
	)
}