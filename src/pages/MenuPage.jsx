import { useParams } from "react-router-dom";
import Main from "../components/common/utils/Main";
import DescriptionSection from "../components/pages/menu/DescriptionSection";
import MenuSection from "../components/pages/menu/menuSection/MenuSection";

export default function MenuPage() {
    let { index } = useParams();
    index = parseInt(index);
    index = (isNaN(index) ? 0 : index);

    return (
        <Main>
            <DescriptionSection />
            <MenuSection selected={ index } />
        </Main>
    )
}