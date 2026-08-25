import Input from "../../../../common/utils/Input";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function FormReserveDateDate({ ref = null }) {
	return (
		<div className="flex flex-col gap-2">
			<TitleHighlight className="text-text text-xs">Datum</TitleHighlight>
			<Input type="date" ref={ ref } />
		</div>
	)
}