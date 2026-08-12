import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className="header fixed z-10 w-full bg-background flex flex-row justify-between px-4 border-b-">
			<Navbar />
		</header>
	)
}