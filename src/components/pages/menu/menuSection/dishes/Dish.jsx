import { Link } from "react-router";
import SloganText from "../../../../common/hero/SloganText";
import WelcomeText from "../../../../common/hero/WelcomeText";
import FilledButton from "../../../../common/utils/button/FilledButton";
import ImgHighlight from "../../../../common/utils/ImgHighlight";
import SectionWidth from "../../../../common/utils/SectionWidth";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function Dish({ category, name, desc, img, price, tags }) {
	return (
		<SectionWidth first={true} classNameParent="min-h-screen bg-background" className="flex-col">
			<ImgHighlight src={ img } alt={ name } />
			<SloganText className="py-4">{ name }</SloganText>
			<div className="flex items-center gap-2">
				{tags.map(tag => (
					<span key={ tag } className="text-xs text-accent-3 text-shadow-2xs tracking-widest font-light bg-accent-3/10 rounded-xs px-2 py-1 uppercase">{ tag }</span>
				))}
			</div>
			<WelcomeText className="py-4">{ desc }</WelcomeText>
			<TitleHighlight className="mb-4">{ price + " €" }</TitleHighlight>
			<Link to={`/menu/${category}`}>
				<FilledButton className="py-4 w-full md:w-50 bg-accent-1 text-background">
					{"< Zurück"}
				</FilledButton>
			</Link>
		</SectionWidth>
	)
}