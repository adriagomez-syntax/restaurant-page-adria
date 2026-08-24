import Logo from "./Logo"
import NavbarLink from "./NavbarLink"
import pageList from "../../../assets/data/pages.json" with { type: 'json' }
import Button from "../utils/button/Button.jsx"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
	
	const [showMenu, setShowMenu] = useState(false)

	function NavbarEvent() {
		setShowMenu(!showMenu);
	}
	
	return (
		<nav className={(showMenu ? "flex-col min-h-screen md:min-h-auto" : "") + " flex-1 flex md:flex-row justify-between items-center"}>
			<Logo />
			<div className={(showMenu ? "flex-col items-center md:items-end mt-5 md:mt-0" : "") + " md:flex-1 h-full flex gap-4 "}>
				<Button onClick={NavbarEvent} className="md:hidden">
                	{showMenu ? 
						<FiX className="text-5xl hover:text-accent-1 active:text-red-500 transition" /> :  
						<FiMenu className="active:text-accent-1" />}   
				</Button>
				<div className={(showMenu ? "absolut" : "hidden") + " flex top-0 left-0 z-10 md:z-10 flex-1 md:flex bg-background md:bg-none md:relative md:top-auto md:left-auto transition"}>
					<ul className="flex-1 flex flex-col items-center gap-4 md:flex-row md:justify-end md:min-w-full md:min-h-full">
						{pageList.map(( page ) => (
							<NavbarLink key={ page.name } name={ page.name } path={ page.path } />
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}