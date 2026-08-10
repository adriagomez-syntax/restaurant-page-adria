import SelectionButton from "../../../common/utils/SelectionButton";

export default function CategoryButton({ children }) {
    return (
        <li>
            <SelectionButton color="background-card" >
                { children }
            </SelectionButton>
        </li>
    )
}