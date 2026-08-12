import { useParams } from "react-router-dom";
import Main from "../components/common/utils/Main";
import HeroMenuSection from "../components/pages/menu/heroSection/HeroMenuSection";
import MenuSection from "../components/pages/menu/menuSection/MenuSection";

export default function MenuPage() {
	let { index } = useParams();
	index = parseInt(index);
	index = (isNaN(index) ? 0 : index);

	return (
		<Main>
			<HeroMenuSection />
			<MenuSection selected={ index } />
		</Main>
	)
}