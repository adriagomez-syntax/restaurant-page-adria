import Button from "./Button"

export default function SelectionButton({ children }) {
    return (
        <Button className="border-background-card border text-text text-xs tracking-widest font-semibold px-5 py-2 rounded-xs has-checked:bg-accent-1 has-checked:text-background-card">
            { children }
            <input type="radio" name="maneuCategory" className="hidden"></input>
        </Button>
    )
}