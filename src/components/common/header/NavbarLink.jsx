export default function NavbarLink({ name, href }) {
    return (
        <a className="font-secondary italic md:font-primary md:not-italic text-xl md:uppercase md:text-xs md:text-text hover:text-accent-1 hover:bg-background-card align-middle px-4 py-1" href={href}>
            {name}
        </a>
    )
}