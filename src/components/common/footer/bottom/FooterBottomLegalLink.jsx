import { Link } from "react-router";

export default function FooterBottomLegalLink({ name, path }) {
	return (
		<li key={ name } className="hover:text-secondary">
			<Link to={ path }>
				{ name }
			</Link>
		</li>
	)
}