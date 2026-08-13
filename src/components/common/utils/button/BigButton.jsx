import Button from "./Button";

export default function BigButton({ type = "click", onClick = null, className = "", children }) {
	return (
		<Button type={ type } className={className + " min-h-15 p-4 rounded-sm"} onClick={ onClick }>
			{ children }
		</Button>
	)
}