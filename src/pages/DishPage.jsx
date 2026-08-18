import { useParams } from "react-router";
import Dish from "../components/pages/menu/menuSection/dishes/Dish";
import dishes from "../assets/data/dishes.json" with { type: 'json' }
import Error404 from "./Error404";
import Main from "../components/common/utils/Main";

export default function DishPage() {
	const { id, categoryId } = useParams();
	const category = dishes.filter(value => value.id === parseInt(categoryId))
	if (category.length < 1)
	{
		return (
			<Error404 />
		)
	}
	
	const dish = category[0].dishes.filter(value => value.id === id)
	if (dish.length < 1)
	{
		return (
			<Error404 />
		)
	}

	return (
		<Main>
			<Dish category={ category[0].id } {...dish[0]} />
		</Main>
	)
}