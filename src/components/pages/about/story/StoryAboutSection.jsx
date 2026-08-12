import Section from "../../../common/utils/Section";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import StoryAboutSlogan from "./StoryAboutSlogan"
import StoryAboutResume from "./StoryAboutResume"
import StoryAboutImage from "./StoryAboutImage";

export default function StoryAboutSection() {
	return (
		<Section className="bg-background py-16 min-h-screen">
			<div className="flex flex-col justify-center items-center md:flex-row gap-4 md:max-w-[75vw] md:mx-auto">
				<div className="flex-1 flex flex-col gap-4">
					<TitleHighlight>Die Geschichte</TitleHighlight>
					<StoryAboutSlogan />
					<StoryAboutResume />
				</div>
				<StoryAboutImage />
			</div>
		</Section>
	)
}