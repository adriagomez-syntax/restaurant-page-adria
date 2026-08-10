import { menu } from "../../../../assets/data.js"
import CategoryButton from "./CategoryButton.jsx"

export default function MenuCategory() {
    return (
        <ul className="flex gap-2 overflow-x-scroll md:ml-40">
            {Object.keys(menu).map((category) => (
                <CategoryButton>
                    { category }
                </CategoryButton>
            ))}
        </ul>
    )
}