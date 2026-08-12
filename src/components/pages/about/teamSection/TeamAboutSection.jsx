import SloganText from "../../../common/hero/SloganText";
import SectionWidth from "../../../common/utils/SectionWidth";
import TitleHighlight from "../../../common/utils/TitleHighlight";
import TeamAboutWorkerList from "./TeamAboutWorkerList";

export default function TeamAboutSection() {
	return (
		<SectionWidth className="py-16 flex-col gap-6" classNameParent="bg-background">
			<TitleHighlight>Das Team</TitleHighlight>
			<SloganText>
				Die Menschen hinter dem Traum
			</SloganText>
			<TeamAboutWorkerList />
		</SectionWidth>
	)
}