import SloganText from "../../../../common/hero/SloganText";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function FormReservePhase3Resume() {
	return (
		<div className="flex flex-col gap-6 border border-accent-1/20 bg-background-card p-8">
			<SloganText className="text-xl text-wrap md:text-xl">Ihre Reservierung im Überblick</SloganText>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">Datum</TitleHighlight>
				<p className="text-sm font-light">2026-08-03</p>
			</div>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">Uhrzeit</TitleHighlight>
				<p className="text-sm font-light">22:00 Uhr</p>
			</div>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">Personen</TitleHighlight>
				<p className="text-sm font-light">2 Person(en)</p>
			</div>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">Name</TitleHighlight>
				<p className="text-sm font-light">Maria Musstermann</p>
			</div>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">Telefon</TitleHighlight>
				<p className="text-sm font-light">+49 170 123 456 78</p>
			</div>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">E-Mail</TitleHighlight>
				<p className="text-sm font-light">maria@beispiel.de</p>
			</div>
			<div className="flex justify-between py-2 border-b border-accent-1/20">
				<TitleHighlight className="text-xs" color="text-text">Wünsche</TitleHighlight>
				<p className="text-sm font-light">Nuss Allergie</p>
			</div>
		</div>
	)
}