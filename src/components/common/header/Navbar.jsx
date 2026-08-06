import Logo from "./Logo"
import NavbarLink from "./NavbarLink"
import { pageList } from "../../../assets/data.js"

export default function Navbar() {
    return (
        <nav className="flex-1 flex flex-row justify-between items-center">
            <Logo />
            <div className="flex flex-row">
                {pageList.map((page) => (
                    <NavbarLink key={page.href} name={page.name} href={page.href} />
                ))}
            </div>
        </nav>
    )
}