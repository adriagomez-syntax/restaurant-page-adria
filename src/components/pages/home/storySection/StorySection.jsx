import { Link } from "react-router-dom";
import StoryYears from "./StoryYears";
import StorySlogan from "./StorySlogan";
import StoryResume from "./StoryResume";
import Section from "../../../common/utils/Section";
import OutlinedButton from "../../../common/utils/OutlinedButton";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import storyImage from "../../../../assets/images/Foto2.jpg"

export default function StorySection() {
	return (
		<Section className="py-20 bg-background min-h-screen">
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:max-w-[75vw] md:mx-auto">
				<div className="min-w-1/2">
					<StoryYears />
					<img className="rounded-sm" src={storyImage} alt="Unsere Geschichte" />
				</div>
				<div className="flex flex-col gap-8">
					<TitleHighlight>Unsere Geschichte</TitleHighlight>
					<StorySlogan />
					<StoryResume />
					<div className="flex flex-col md:block">
						<Link to="/about">
							<OutlinedButton className="w-full md:w-auto border-secondary text-secondary">
                                Mehr über uns
							</OutlinedButton>
						</Link>
					</div>
				</div>
			</div>
		</Section>
	)
}