import TitleHighlight from "../../../common/utils/TitleHighlight";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactInfoPhone() {
	return (
		<div className="flex gap-4">
			<FaPhoneAlt className="text-gray-500" />
			<div className="flex flex-col gap-1">
				<TitleHighlight className="text-sm">Telefon</TitleHighlight>
				<p className="text-text font-light">+49 69 987 654 32</p>
			</div>
		</div>
	)
}