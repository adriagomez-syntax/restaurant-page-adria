import TitleHighlight from "../../utils/TitleHighlight.jsx"
import contactInfo from "../../../../assets/data/contact.json" with { type: 'json' }

export default function FooterKontakt() {
	return (
		<div className="max-w-xs">
			<TitleHighlight className="py-4">Kontakt</TitleHighlight>
			<div className="flex flex-col gap-2 text-text font-light">
				<p>{contactInfo.address}</p>
				<p>{contactInfo.city}</p>
				<p className="mt-2">{contactInfo.phone}</p>
				<p>{contactInfo.email}</p>
			</div>
		</div>
	)
}