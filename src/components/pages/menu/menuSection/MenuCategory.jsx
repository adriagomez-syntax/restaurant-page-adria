import { menu } from "../../../../assets/data.js"
import CategoryButton from "./CategoryButton.jsx"

export default function MenuCategory({ selected }) {
    return (
        <nav>
            <ul className="flex gap-2 overflow-x-scroll md:ml-40">
                {menu.map((category, index) => (
                    <CategoryButton key={ index } index={ index } selected={ selected }>
                        { category.name }
                    </CategoryButton>
                ))}
            </ul>
        </nav>
    )
}