export default function Input({ className = "", type = "text", name = "", maxLength = "50", placeholder = "", onChange = null, ref = null }) {
	const finalClass = className + " " + "text-text font-light text-sm border border-accent-1/20 bg-background-card rounded-xs p-3";
	
	return (
		<input type={ type } name={ name } maxLength={ maxLength } className={ finalClass } placeholder={ placeholder } onChange={ onChange } ref={ ref } />
	)
}