import Button from "./Button";

export default function BigButton({ className, children }) {
	return (
		<Button className={className + " min-h-15 p-4 rounded-sm"}>
			{ children }
		</Button>
	)
}