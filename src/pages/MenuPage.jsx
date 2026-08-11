import DescriptionSection from "../components/pages/menu/DescriptionSection";
import MenuSection from "../components/pages/menu/menuSection/MenuSection";

export default function MenuPage() {
    return (
        <main className="flex flex-col flex-1">
            <DescriptionSection />
            <MenuSection />
        </main>
    )
}