import { Link } from "react-router";
import DishCard from "./DishCard";

export default function DishGrid({ category, data, className = "" }) {
	return (
		<div className={className + " grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
			{ data.map((dish, index) => (
				<Link to={`/dish/${category}/${dish.id}`}>
					<DishCard key={dish.id} {...dish} index={index} />
				</Link>
			))}
		</div>
	)
}