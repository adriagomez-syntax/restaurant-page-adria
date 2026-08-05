import Logo from "./Logo";
import NavbarLink from "./NavbarLink";
import { pageList } from '../assets/data'

export default function Navbar() {
    return (
        <nav>
            <Logo />
            {pageList.map((page, index) => (
                <NavbarLink key={index} page={page} />
            ))}
        </nav>
    )
}