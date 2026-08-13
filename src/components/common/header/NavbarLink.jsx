import { NavLink } from 'react-router'
import '../utils/css/ButtonAnimation.css'

export default function NavbarLink({ name, path }) {
	return (
		<NavLink to={ path } 
			className={({ isActive }) => isActive ? "text-accent-1 bg-background-card" : "md:text-text"}>
			<li key={ name } className="ButtonAnimation font-secondary italic md:font-primary md:not-italic text-xl md:uppercase md:text-xs hover:text-accent-1 hover:bg-background-card align-middle px-4 py-1">
				{ name }
			</li>
		</NavLink>
	)
}