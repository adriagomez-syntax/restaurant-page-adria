import DescriptionSection from "./DescriptionSection";
import MenuSection from "./menuSection/MenuSection";

export default function Menu() {
    return (
        <main className="flex flex-col flex-1">
            <DescriptionSection />
            <MenuSection />
        </main>
    )
}