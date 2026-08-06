import Button from "./Button"

export default function OutlinedButton({ onClick, children }) {
    return (
        <Button onClick={onClick} className="border-amber border-2 text-amber">
            {children}
        </Button>
    )
}