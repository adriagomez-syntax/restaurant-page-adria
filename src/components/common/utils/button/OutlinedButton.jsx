import BigButton from "./BigButton"

export default function OutlinedButton({ type = "click", onClick = null, className = "", children }) {
	return (
		<BigButton type={ type } onClick={ onClick } className={ className + " " + "border-2" }>
			{children}
		</BigButton>
	)
}