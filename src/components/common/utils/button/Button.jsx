export default function Button({ type = "click", onClick = null, className = "", children }) {
	const finalClass = className + " " + "uppercase hover:opacity-75 transition cursor-pointer active:scale-95 duration-200";
    
	return (
		<button type={ type } onClick={ onClick } className={ finalClass }>
			{ children }
		</button>
	)
}