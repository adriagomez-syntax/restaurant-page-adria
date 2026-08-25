import Input from "../../../../common/utils/Input";
import TextArea from "../../../../common/utils/TextArea";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function FormReserveClientInfoInput({ title = "", type = "text", maxLength = "", name = "", placeholder = "", ref = null, textarea = false }) {
	return (
		<div className="flex flex-col gap-2">
			<TitleHighlight className="text-xs" color="text-text">{ title }</TitleHighlight>
			{ textarea ? (
				<TextArea maxLength={ maxLength } name={ name } placeholder={ placeholder } ref={ ref } ></TextArea>
			) : (
				<Input type={ type } maxLength={ maxLength } name={ name } placeholder={ placeholder } ref={ ref } />
			)}
		</div>
	)
}