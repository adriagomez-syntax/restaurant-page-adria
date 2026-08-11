import { Link } from "react-router-dom";
import FilledButton from "../../../common/utils/FilledButton";
import OutlinedButton from "../../../common/utils/OutlinedButton";

export default function HeroButtons() {
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-15 mb-8 md:mb-20">
            <FilledButton colorBg="accent-2" colorText="background">
                <Link to="/reservation">Tisch Reservieren</Link>
            </FilledButton>
            <OutlinedButton color="accent-1">
                <Link to="menu">Speisekarte Ansehen</Link>
            </OutlinedButton>
        </div>
    )
}