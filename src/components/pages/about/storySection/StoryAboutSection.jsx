import SectionWidth from "../../../common/utils/SectionWidth";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import StoryAboutSlogan from "./StoryAboutSlogan"
import StoryAboutResume from "./StoryAboutResume"
import StoryAboutImage from "./StoryAboutImage";

export default function StoryAboutSection() {
	return (
		<SectionWidth classNameParent="bg-background py-16 min-h-screen" className="flex flex-col justify-center items-center md:flex-row gap-4">
			<div className="flex-1 flex flex-col gap-4">
				<TitleHighlight>Die Geschichte</TitleHighlight>
				<StoryAboutSlogan />
				<StoryAboutResume />
			</div>
			<StoryAboutImage />
		</SectionWidth>
	)
}