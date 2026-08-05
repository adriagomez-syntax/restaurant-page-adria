import { contactInfo } from "../../../../assets/data.js"

export default function FooterKontakt() {
    return (
        <div>
            <h3>Kontakt</h3>
            <p>{contactInfo.address}</p>
            <p>{contactInfo.city}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
        </div>
    )
}