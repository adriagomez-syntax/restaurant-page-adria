import MediaButton from "./MediaButton";

export default function FooterMedia() {
	return (
		<div className="max-w-xs md:ml-auto">
			<h3 className="text-accent-1 italic text-xl py-4 font-secondary">Der Spanische Traum</h3>
			<p className="text-text font-light text-md">Authentische spanische Küche mitten in Stuttgart. Herzlich willkommen.</p>
			<div className="mt-4 flex flex-row gap-4">
				<MediaButton media="Facebook" />
				<MediaButton media="LinkedIn" />
				<MediaButton media="Instagram" />
			</div>
		</div>
	)
}