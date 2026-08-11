import { Link } from "react-router-dom";

export default function FooterBottomLegalLink({ name, path }) {
    return (
        <li key={ name } className="hover:text-secondary">
            <Link to={ path }>
                { name }
            </Link>
        </li>
    )
}