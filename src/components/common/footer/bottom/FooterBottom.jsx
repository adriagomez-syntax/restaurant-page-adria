import FooterBottomLegal from "./FooterBottomLegal"

export default function FooterBottom() {
    return (
        <div className="text-stone/50 text-sm font-light flex flex-col md:flex-row justify-between gap-4 p-4">
            <p>© 2026 Der Spanische Traum GmbH • Alle Rechte vorbehalten</p>
            <FooterBottomLegal />
        </div>
    )
}