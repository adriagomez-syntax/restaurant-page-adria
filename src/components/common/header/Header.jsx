import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="header fixed w-full bg-dark flex flex-row justify-between px-4 border-b-">
            <Navbar />
        </header>
    )
}