export default function WelcomeText({ className, children }) {
	return (
		<p className={className + " text-text font-light"}>
			{ children }
		</p>
	)
}