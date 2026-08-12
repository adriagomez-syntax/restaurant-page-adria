export default function Section({ first = "false", className, children }) {
	const classFinal = className + " flex-1 flex p-4" + (first === "true" ? " mt-15" : "")
    
	return (
		<section className={classFinal}>
			{children}
		</section>
	)
}