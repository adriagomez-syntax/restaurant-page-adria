import Main from "../components/common/utils/Main";
import HeroAboutSection from "../components/pages/about/hero/HeroAboutSection";
import StoryAboutSection from "../components/pages/about/story/StoryAboutSection";
import ValuesAboutSection from "../components/pages/about/values/ValuesAboutSection";

export default function AboutPage() {
	return (
		<Main>
			<HeroAboutSection />
			<StoryAboutSection />
			<ValuesAboutSection />
		</Main>
	)
}