import { Link } from "react-router-dom";
import FilledButton from "../../../common/utils/FilledButton";
import OutlinedButton from "../../../common/utils/OutlinedButton";

export default function HeroButtons() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-15 mb-8 md:mb-20">
            <FilledButton className="bg-accent-2 text-background">
                <Link to="reserve">Tisch Reservieren</Link>
            </FilledButton>
            <OutlinedButton className="border-accent-1 text-accent-1">
                <Link to="menu">Speisekarte Ansehen</Link>
            </OutlinedButton>
        </div>
    )
}