import { NavLink } from "react-router-dom";
import Button from "../../../common/utils/Button";

export default function CategoryButton({ index, children }) {
	const defaultClasses = "text-xs tracking-widest font-semibold px-5 py-2 rounded-xs";
    
	return (
		<li key={ index }>
			<NavLink to={ "/menu/" + index }>
				{({ isActive }) => (
					<Button className={defaultClasses + " " + (isActive ? 
						"text-background-card bg-accent-1"
						: "text-text border border-background-card"
					)}>
						{ children }
					</Button>
				)}    
			</NavLink>
		</li>
	)
}