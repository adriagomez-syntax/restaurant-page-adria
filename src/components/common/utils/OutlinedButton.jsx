import BigButton from "./BigButton"

export default function OutlinedButton({ onClick, className, children }) {
    return (
        <BigButton onClick={onClick} className={className + " " + "border-2"}>
            {children}
        </BigButton>
    )
}