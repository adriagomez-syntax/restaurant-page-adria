import BigButton from "./BigButton"

export default function OutlinedButton({ type = "button", onClick = null, className = "", children }) {
	return (
		<BigButton type={ type } onClick={ onClick } className={ className + " " + "border-2" }>
			{children}
		</BigButton>
	)
}