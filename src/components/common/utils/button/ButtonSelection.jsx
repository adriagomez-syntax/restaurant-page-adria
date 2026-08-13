import Button from "./Button";

export default function ButtonSelection({ className = "", onClick = null, children }) {
	const active = false;
	const finalClass = className + " " + 
		(active ? "bg-accent-1 text-background" : "bg-background-card text-text") + " " + 
		"text-center text-sm font-light border border-accent-1/20 rounded-xs p-3"

	return (
		<Button type="click" className={ finalClass } onClick={ onClick }>
			{ children }
		</Button>
	)
}