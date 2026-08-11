import { Link } from "react-router-dom";
import SelectionButton from "../../../common/utils/SelectionButton";

export default function CategoryButton({ index, selected, children }) {
    return (
        <li key={ index }>
                <Link to={ "/menu/" + index }>
                    <SelectionButton isActive={ index == selected } 
                    defColor="text" borderColor="background-card" 
                    selColor="background-card" bgColor="accent-1">
                        { children }
                    </SelectionButton>
                </Link>
            </li>
    )
}