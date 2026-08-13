import TitleHighlight from "../../../common/utils/TitleHighlight";
import { FaEnvelope } from "react-icons/fa";

export default function ContactInfoEmail() {
	return (
		<div className="flex gap-4">
			<FaEnvelope className="text-gray-200" />
			<div className="flex flex-col gap-1">
				<TitleHighlight className="text-sm">E-Mail</TitleHighlight>
				<p className="text-text font-light">kontakt@spanischer-traum.de</p>
			</div>
		</div>
	)
}