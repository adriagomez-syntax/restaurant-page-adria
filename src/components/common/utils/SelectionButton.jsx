import Button from "./Button"

export default function SelectionButton({ isActive = false, activeClass, inactiveClass, children }) {
    let finalClass = "text-xs tracking-widest font-semibold px-5 py-2 rounded-xs";
    finalClass += " " + (isActive ? activeClass : inactiveClass);
    
    return (
        <Button className={ finalClass  }>
            { children }
        </Button>
    )
}