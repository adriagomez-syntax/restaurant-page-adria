import Main from "../components/common/utils/Main";
import HeroAboutSection from "../components/pages/about/heroSection/HeroAboutSection";
import StoryAboutSection from "../components/pages/about/storySection/StoryAboutSection";
import TeamAboutSection from "../components/pages/about/teamSection/TeamAboutSection";
import ValuesAboutSection from "../components/pages/about/valuesSection/ValuesAboutSection";

export default function AboutPage() {
	return (
		<Main>
			<HeroAboutSection />
			<StoryAboutSection />
			<ValuesAboutSection />
			<TeamAboutSection />
		</Main>
	)
}