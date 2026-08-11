import { Link } from 'react-router-dom'
import '../utils/css/ButtonAnimation.css'

export default function NavbarLink({ name, path }) {
    return (
        <li key={ name } className="ButtonAnimation font-secondary italic md:font-primary md:not-italic text-xl md:uppercase md:text-xs md:text-text hover:text-accent-1 hover:bg-background-card align-middle px-4 py-1">
            <Link to={ path }>{ name }</Link>
        </li>
    )
}