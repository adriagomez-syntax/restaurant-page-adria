import MediaButton from "./MediaButton";

export default function FooterMedia() {
    return (
        <div>
            <h3 className="text-gold italic text-xl py-4">Der Spanische Traum</h3>
            <p className="text-stone font-light text-md">Authentische spanische Küche mitten in Stuttgart. Herzlich willkommen.</p>
            <div className="mt-4 flex flex-row gap-4">
                <MediaButton media="Facebook" />
                <MediaButton media="LinkedIn" />
                <MediaButton media="Instagram" />
            </div>
        </div>
    )
}