export default function FooterBottomLegalLink({ name, href }) {
    return (
        <a href={href} className="hover:text-secondary">
            {name}
        </a>
    )
}