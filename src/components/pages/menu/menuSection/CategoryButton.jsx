import { Link } from "react-router-dom";
import SelectionButton from "../../../common/utils/SelectionButton";

export default function CategoryButton({ index, selected, children }) {
    return (
        <li key={ index }>
                <Link to={ "/menu/" + index }>
                    <SelectionButton isActive={ index == selected } 
                    activeClass="text-background-card bg-accent-1"
                    inactiveClass="text-text border border-background-card">
                        { children }
                    </SelectionButton>
                </Link>
            </li>
    )
}