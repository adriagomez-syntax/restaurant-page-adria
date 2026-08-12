export default function SloganText({ className = "", children }) {
	return (
		<div className={ className + " " + "text-4xl font-secondary font-light md:text-5xl" }>
			{ children }
		</div>
	)
}