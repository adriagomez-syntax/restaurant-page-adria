import BigButton from "./BigButton"

export default function FilledButton({ onClick, className = "", children }) {
    
	return (
		<BigButton onClick={onClick} className={className}>
			{children}
		</BigButton>
	)
}