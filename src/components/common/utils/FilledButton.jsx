import Button from "./Button"

export default function FilledButton({ onClick, colorBg, colorText, children }) {
    return (
        <Button onClick={onClick} className={`bg-${colorBg} text-${colorText}`}>
            {children}
        </Button>
    )
}