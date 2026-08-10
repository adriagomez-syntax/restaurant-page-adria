import Section from "../../../common/utils/Section";
import MenuCategory from "./MenuCategory";
import DishList from "./dishes/DishList.jsx";
import { menu } from "../../../../assets/data.js"

export default function MenuSection() {
    return (
        <section className="flex-1 py-4 flex min-h-screen flex-col bg-background border-b-background-card border-b">
            <div className="px-4 pb-4 border-b-background-card border-b">
                <MenuCategory />
            </div>
            <DishList data={menu.Tapas} />
            <p className="text-text text-xs font-light text-center py-4 px-4 md:mx-auto">
                Alle Preise in Euro inkl. MwSt. • Allergene auf Anfrage •
                Tagesaktuelle Gerichte auf der Tafel
            </p>
        </section>
    )
}