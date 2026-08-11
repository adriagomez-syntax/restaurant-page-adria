import FooterBottomLegalLink from "./FooterBottomLegalLink"

const legalLinks = [
    { name: "Impressum", path: "legal" },
    { name: "Datenschutz", path: "data-protection" },
    { name: "AGB", path: "terms" },
]

export default function FooterBottomLegal() {
    return (
        <ul className="flex flex-row gap-4">
            {legalLinks.map((link) => (
                <FooterBottomLegalLink key={ link.name } name={ link.name } path={ link.path } />
            ))}
        </ul>
    )
}