import './css/ButtonAnimation.css'

export default function Button({ onClick, className = "", children }) {
	const finalClass = className + " " + "ButtonAnimation uppercase hover:opacity-75 transition cursor-pointer";
    
	return (
		<button onClick={ onClick } className={ finalClass }>
			{ children }
		</button>
	)
}