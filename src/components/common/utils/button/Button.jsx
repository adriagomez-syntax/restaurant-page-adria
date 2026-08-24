export default function Button({ type = "button", onClick = null, disabled = false, className = "", children }) {
	const finalClass = className + " " + "uppercase hover:opacity-75 transition cursor-pointer active:scale-95 duration-200 disabled:opacity-75 disabled:cursor-default disabled:active:scale-100";
    
	return (
		<button type={ type } onClick={ onClick } className={ finalClass } disabled={ disabled } >
			{ children }
		</button>
	)
}