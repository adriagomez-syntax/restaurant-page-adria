import ImgHighlight from "../../../common/utils/ImgHighlight";
import TitleHighlight from "../../../common/utils/TitleHighlight";

export default function TeamAboutWorker({ data, index}) {
	const imgLink = "images/workers/" + data.img;
	
	return (
		<li key={ index } className="flex flex-col gap-4 py-4">
			<ImgHighlight src={ imgLink } alt={ data.name } className="max-h-700" />
			<div className="flex flex-col gap-1 pt-4">
				<TitleHighlight color="text-accent-2">{ data.job }</TitleHighlight>
				<h3 className="font-secondary text-lg">{ data.name }</h3>
			</div>
			<p className="text-text text-sm font-light">{ data.text }</p>
		</li>
	)
}