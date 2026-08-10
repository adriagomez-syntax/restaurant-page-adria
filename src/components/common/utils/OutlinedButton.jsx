import BigButton from "./BigButton"

export default function OutlinedButton({ onClick, color, children }) {
    return (
        <BigButton onClick={onClick} className={`border-${color} border-2 text-${color}`}>
            {children}
        </BigButton>
    )
}