export default function Main({ children, className = "" }) {
	return (
		<main className={className + " flex flex-col flex-1"}>
			{ children }
		</main>
	)
}