import MenuCategory from "./MenuCategory";
import DishList from "./dishes/DishList.jsx";
import MenuTaxes from "./MenuTaxes.jsx";
import menu from "../../../../assets/data/dishes.json" with { type: 'json' }

export default function MenuSection({ selected = 0 }) {
	return (
		<section className="flex-1 py-4 flex min-h-screen flex-col bg-background border-b-background-card border-b">
			<div className="px-4 pb-4 border-b-background-card border-b">
				<MenuCategory />
			</div>
			{typeof(menu[selected]) !== "undefined" ?
				<DishList data={ menu[selected].dishes } />
				: ""
			}
			<MenuTaxes />
		</section>
	)
}