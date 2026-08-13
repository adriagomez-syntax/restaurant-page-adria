import TitleHighlight from "../../../common/utils/TitleHighlight";
import { FaMapPin } from "react-icons/fa";

export default function ContactInfoAdress() {
	return (
		<div className="flex gap-4">
			<FaMapPin className="text-red-500" />
			<div className="flex flex-col gap-1">
				<TitleHighlight className="text-sm">Adresse</TitleHighlight>
				<p className="text-text font-light">Stauffenbergstraße 1</p>
				<p className="text-text font-light">70173 Stuttgart</p>
			</div>
		</div>
	)
}