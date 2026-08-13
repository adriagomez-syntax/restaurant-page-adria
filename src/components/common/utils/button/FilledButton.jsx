import BigButton from "./BigButton"

export default function FilledButton({ type = "click", onClick = null, className = "", children }) {
    
	return (
		<BigButton type={ type } onClick={ onClick } className={ className }>
			{children}
		</BigButton>
	)
}