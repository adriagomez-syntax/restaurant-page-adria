export default function NavbarLink({ name, href }) {
    return (
        <a className="text-xl md:uppercase md:text-xs md:text-stone hover:text-gold hover:bg-dark-card align-middle px-4 py-1" href={href}>
            {name}
        </a>
    )
}