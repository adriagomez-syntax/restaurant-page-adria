import Dish from "./Dish";

export default function DishList({ data }) {
	return (
		<ul className="p-4 flex flex-col justify-center">
			{ data !== null ? data.map((dish, index) => (
				<Dish key={ dish.id } n={ index + 1 } dish={ dish } />
			)) : "" }
		</ul>
	)
}