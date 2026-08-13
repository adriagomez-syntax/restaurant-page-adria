import SectionWidth from "../../../common/utils/SectionWidth";
import ContactInfoAdress from "./ContactInfoAdress";
import ContactInfoPhone from "./ContactInfoPhone";
import ContactInfoEmail from "./ContactInfoEmail"
import ContactInfoSchedule from "./ContactInfoSchedule";
import ContactInfoMap from "./ContactInfoMap";

export default function ContactInfoSection() {
	return (
		<SectionWidth classNameParent="bg-background py-16" className="w-full flex flex-col gap-8 justify-center">
			<ContactInfoAdress />
			<ContactInfoPhone />
			<ContactInfoEmail />
			<ContactInfoSchedule />
			<ContactInfoMap />
		</SectionWidth>
	)
}