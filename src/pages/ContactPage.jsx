import Main from "../components/common/utils/Main";
import ContactHeroSection from "../components/pages/contact/ContactHeroSection";
import ContactFormSection from "../components/pages/contact/form/ContactFormSection";
import ContactInfoSection from "../components/pages/contact/info/ContactInfoSection";

export default function ContactPage() {
	return (
		<Main>
			<ContactHeroSection />
			<div className="flex flex-col md:flex-row">
				<ContactInfoSection />
				<ContactFormSection />
			</div>
		</Main>
	)
}