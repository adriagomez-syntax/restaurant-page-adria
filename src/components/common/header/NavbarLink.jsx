export default function NavbarLink({ name, href }) {
    return (
        <a className="uppercase text-xs text-stone hover:text-gold hover:bg-dark-card align-middle px-4 py-1" href={href}>
            {name}
        </a>
    )
}