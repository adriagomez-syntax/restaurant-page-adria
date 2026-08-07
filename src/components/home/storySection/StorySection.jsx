import storyImage from "../../../assets/images/Foto2.jpg"
import StoryYears from "./StoryYears";
import StorySlogan from "./StorySlogan";
import StoryResume from "./StoryResume";
import Section from "../../common/utils/Section";
import OutlinedButton from "../../common/utils/OutlinedButton";

export default function StorySection() {
    return (
        <Section className="flex-col md:flex-row justify-center items-center gap-8 py-20 min-h-screen md:max-w-[75vw] md:mx-auto">
            <div className="min-w-1/2">
                <StoryYears />
                <img className="rounded-sm" src={storyImage} alt="Unsere Geschichte" />
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="text-amber tracking-widest font-light uppercase font-mono">Unsere Geschichte</h3>
                <StorySlogan />
                <StoryResume />
                <div className="flex flex-col md:block">
                    <OutlinedButton onClick={() => { window.location = "#About" }} color="amber">
                        Mehr über uns
                    </OutlinedButton>
                </div>
            </div>
        </Section>
    )
}