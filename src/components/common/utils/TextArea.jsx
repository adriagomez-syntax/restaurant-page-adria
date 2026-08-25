export default function TextArea({ className = "", name = "", maxLength = "50", placeholder = "", onChange = null, ref = null }) {
	const finalClass = className + " " + "text-text font-light text-sm border border-accent-1/20 bg-background-card rounded-xs p-3 min-h-40";
	
	return (
		<textarea name={ name } maxLength={ maxLength } className={ finalClass } placeholder={ placeholder } onChange={ onChange } ref={ ref } ></textarea>
	)
}