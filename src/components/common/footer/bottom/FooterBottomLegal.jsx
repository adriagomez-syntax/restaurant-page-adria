import FooterBottomLegalLink from "./FooterBottomLegalLink"

const legalLinks = [
    { name: "Impressum", href: "/#" },
    { name: "Datenschutz", href: "/#" },
    { name: "AGB", href: "/#" },
]

export default function FooterBottomLegal() {
    return (
        <ul className="flex flex-row gap-4">
            {legalLinks.map((link) => (
                <li key={link.name}>
                    <FooterBottomLegalLink name={link.name} href={link.href} />
                </li>
            ))}
        </ul>
    )
}