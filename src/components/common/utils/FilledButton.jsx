import Button from "./Button"

export default function FilledButton({ onClick, children }) {
    return (
        <Button onClick={onClick} className="bg-purple text-dark">
            {children}
        </Button>
    )
}