import Logo from "./Logo"
import NavbarLink from "./NavbarLink"
import { pageList } from "../../../assets/data.js"

export default function Navbar() {
    return (
        <nav>
            <Logo />
            {pageList.map((page) => (
                <NavbarLink key={page.href} name={page.name} href={page.href} />
            ))}
        </nav>
    )
}