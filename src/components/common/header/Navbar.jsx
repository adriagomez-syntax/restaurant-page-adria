import Logo from "./Logo"
import NavbarLink from "./NavbarLink"
import { pageList } from "../../../assets/data.js"
import Button from "../utils/Button.jsx"

export default function Navbar() {
    return (
        <nav className="flex-1 flex flex-row justify-between items-center">
            <Logo />
            <div className="md:flex-1 h-full flex">
                <Button className="md:hidden">
                    &#9776;   
                </Button>
                {/* Change to absolute when it's opened */}
                <div className="hidden flex min-h-screen min-w-screen top-0 left-0 -z-10 md:z-10 flex-1 md:flex bg-background md:bg-none md:relative md:min-h-auto md:min-w-auto md:top-auto md:left-auto">
                    <div className="flex-1 flex flex-col justify-center items-center gap-4 md:flex-row md:justify-end md:min-w-full md:min-h-full">
                        {pageList.map((page) => (
                            <NavbarLink key={page.href} name={page.name} href={page.href} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}