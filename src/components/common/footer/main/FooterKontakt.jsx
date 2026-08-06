import { contactInfo } from "../../../../assets/data.js"

export default function FooterKontakt() {
    return (
        <div className="max-w-xs">
            <h3 className="text-amber tracking-widest uppercase py-4">Kontakt</h3>
            <div className="flex flex-col gap-2 text-stone font-light">
                <p>{contactInfo.address}</p>
                <p>{contactInfo.city}</p>
                <p className="mt-2">{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
            </div>
        </div>
    )
}