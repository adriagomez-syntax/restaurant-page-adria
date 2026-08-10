import FacebookLogo from "../../../../assets/images/icons8-facebook.svg";
import LinkedInLogo from "../../../../assets/images/icons8-linkedin.svg";
import InstagramLogo from "../../../../assets/images/icons8-instagram.svg";
import '../../utils/ButtonAnimation.css'

const media_data = {
    Facebook: { logo: FacebookLogo, link: "#"},
    LinkedIn: { logo: LinkedInLogo, link: "#"},
    Instagram: { logo: InstagramLogo, link: "#"}
}

export default function MediaButton({ media }) {
    const { logo, link } = media_data[media];
    return (
        <a href={link} target="_blank" className="ButtonAnimation w-10 h-10 hover:opacity-75" rel="noopener noreferrer">
            <img src={logo} alt={media} />
        </a>
    )
}