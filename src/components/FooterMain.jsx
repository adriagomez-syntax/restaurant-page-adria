import FooterMedia from "./FooterMedia";
import FooterNavigation from "./FooterNavigation";
import FooterKontakt from "./FooterKontakt";
import FooterSchedule from "./FooterSchedule";

export default function FooterMain() {
    return (
        <div>
            <FooterMedia />
            <FooterNavigation />
            <FooterKontakt />
            <FooterSchedule />
        </div>
    )
}