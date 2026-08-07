import FooterMedia from "./FooterMedia";
import FooterNavigation from "./FooterNavigation";
import FooterKontakt from "./FooterKontakt";
import FooterSchedule from "./FooterSchedule";

export default function FooterMain() {
    return (
        <div className="flex-1 border-b border-background-mid flex flex-col md:flex-row gap-8 p-4 pb-8">
            <FooterMedia />
            <FooterNavigation />
            <FooterKontakt />
            <FooterSchedule />
        </div>
    )
}