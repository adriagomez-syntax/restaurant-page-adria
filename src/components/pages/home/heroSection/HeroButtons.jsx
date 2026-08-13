import { Link } from "react-router";
import FilledButton from "../../../common/utils/FilledButton";
import OutlinedButton from "../../../common/utils/OutlinedButton";

export default function HeroButtons() {
	return (
		<div className="flex flex-col md:flex-row gap-4 mt-15 mb-8 md:mb-20">
			<Link to="/reserve">
				<FilledButton className="w-full md:w-auto bg-accent-2 text-background">
                    Tisch Reservieren
				</FilledButton>
			</Link>
			<Link to="/menu">
				<OutlinedButton className="w-full md:w-auto border-accent-1 text-accent-1">
                    Speisekarte Ansehen
				</OutlinedButton>
			</Link>
		</div>
	)
}