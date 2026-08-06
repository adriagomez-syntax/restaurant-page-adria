import heroImage from "../../../assets/images/Foto0.jpg"

export default function HeroImage() {
    return (
        <div className="mt-15 absolute inset-0 -z-10">
            <img src={heroImage} className="w-full h-full object-cover opacity-35" alt="Hero Image" />
        </div>
    )
}