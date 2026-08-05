import StoryYears from "./StoryYears";
import StorySlogan from "./StorySlogan";
import StoryResume from "./StoryResume";
import Button from "./Button";
import storyImage from '../assets/Foto2.jpg'

export default function StorySection() {
    return (
        <section>
            <StoryYears />
            <img src={storyImage} alt="Unsere Geschichte" />
            <h3>Unsere Geschichte</h3>
            <StorySlogan />
            <StoryResume />
            <Button text="Mehr über uns" onClick={() => { window.location = "#Über uns" }} />
        </section>
    )
}