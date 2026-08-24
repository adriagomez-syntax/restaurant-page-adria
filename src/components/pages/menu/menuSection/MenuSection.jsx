import MenuCategory from "./MenuCategory";
import DishList from "./dishes/DishList.jsx";
import MenuTaxes from "./MenuTaxes.jsx";
import DishGrid from "./dishes/DishGrid.jsx";
import menu from "../../../../assets/data/dishes.json" with { type: 'json' }
import Button from "../../../common/utils/button/Button.jsx";
import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { useState } from "react";

export default function MenuSection({ selected = 0 }) {
	
	const [option, setOption] = useState(0);
	
	return (
		<section className="flex-1 py-4 flex-col bg-background border-b-background-card border-b">
			<div className="flex-1 max-w-full px-4 pb-4 border-b-background-card border-b">
				<div className="flex gap-4 justify-between md:mx-40">
					<MenuCategory />
					<div className="flex gap-4 items-center">
						<p className="text-center align-middle">
							|
						</p>
						<div className="flex gap-2">
							<Button onClick={() => setOption(0)} disabled={option === 0}>
								<FaListUl />
							</Button>
							<Button>
								<FiGrid onClick={() => setOption(1)} disabled={option === 1} />
							</Button>
						</div>
					</div>
				</div>
			</div>
			{typeof(menu[selected]) !== "undefined" ?
				<>
					<DishList category={ selected } data={ menu[selected].dishes } 
						className={option === 0 ? "" : "hidden"} />
					<DishGrid category={ selected} data={ menu[selected].dishes } 
						className={option === 1 ? "" : "hidden"} />
				</>
				: ""
			}
			<MenuTaxes />
		</section>
	)
}