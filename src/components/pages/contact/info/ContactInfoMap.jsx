import { FaMapMarkedAlt } from "react-icons/fa";

export default function ContactInfoMap() {
	return (
		<div className="w-full flex flex-col gap-4 justify-center items-center p-16 border border-accent-1/20 bg-background-card">
			<FaMapMarkedAlt className="text-accent-1" />
			<div className="flex flex-col gap-1 text-text text-xs font-light">
				<p>Stauffenbergstraße 1</p>
				<p>70173 Stuttgart</p>
			</div>
		</div>
	)
}