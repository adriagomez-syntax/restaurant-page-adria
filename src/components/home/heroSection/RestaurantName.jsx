import TitleHighlight from "../../common/utils/TitleHighlight"

export default function RestaurantName() {
    return (
        <div>
            <TitleHighlight>- STUTTGART • SEIT 2018</TitleHighlight>
            <div className="text-6xl md:text-9xl flex-1 flex flex-col gap-0 py-4">
                <h1>Der</h1>
                <h2 className="text-amber italic">Spanische</h2>
                <h1>Traum</h1>
            </div>
        </div>
    )
}