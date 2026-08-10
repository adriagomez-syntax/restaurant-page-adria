import BigButton from "./BigButton"

export default function FilledButton({ onClick, colorBg, colorText, children }) {
    return (
        <BigButton onClick={onClick} className={`bg-${colorBg} text-${colorText}`}>
            {children}
        </BigButton>
    )
}