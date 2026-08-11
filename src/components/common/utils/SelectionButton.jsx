import Button from "./Button"

export default function SelectionButton({ isActive = false, defColor, borderColor, selColor, bgColor, children }) {
    let finalClass = "text-xs tracking-widest font-semibold px-5 py-2 rounded-xs";
    if (isActive)   finalClass += " text-" + selColor + " bg-" + bgColor;
    else            finalClass += " text-" + defColor + " border border-" + borderColor;
    
    return (
        <Button className={ finalClass }>
            { children }
        </Button>
    )
}