import { Link } from "react-router";
import DishRow from "./DishRow";

export default function DishList({ category, data }) {
	return (
		<ul className="py-4 flex flex-col justify-center">
			{ data !== null ? data.map((dish, index) => (
				<Link to={`/dish/${category}/${dish.id}`}>
					<DishRow key={ dish.id } {...dish} index={ index + 1 } />
				</Link>
			)) : "" }
		</ul>
	)
}