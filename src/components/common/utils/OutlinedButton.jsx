import Button from "./Button"

export default function OutlinedButton({ onClick, color, children }) {
    return (
        <Button onClick={onClick} className={`border-${color} border-2 text-${color}`}>
            {children}
        </Button>
    )
}