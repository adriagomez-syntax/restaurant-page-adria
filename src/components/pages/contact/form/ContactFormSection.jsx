import SectionWidth from "../../../common/utils/SectionWidth";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import ContactFormForm from "./ContactFormForm";

export default function ContactFormSection() {
	return (
		<SectionWidth classNameParent="bg-background/80 py-16" className="w-full flex flex-col gap-8">
			<TitleHighlight className="text-sm">Jetzt verbinden</TitleHighlight>
			<ContactFormForm />
		</SectionWidth>
	)
}