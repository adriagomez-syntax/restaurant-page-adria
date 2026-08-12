export default function TitleHighlight({ className = "", color = "text-secondary", children }) {
	return (
		<h3 className={className + " " + color + " " + "text-sm tracking-widest uppercase font-light"}>
			{ children }
		</h3>
	)
}