import TitleHighlight from "../../../common/utils/TitleHighlight";

export default function TeamAboutWorker({ data, index}) {
	const imgLink = "images/workers/" + data.img;
	
	return (
		<li key={ index } className="flex flex-col gap-4 py-4">
			<div className="overflow-hidden">
				<img src={ imgLink } className="max-h-700 object-cover rounded-xs hover:opacity-90 hover:scale-105 transition duration-200" alt={ data.name } />
			</div>
			<div className="flex flex-col gap-1 pt-4">
				<TitleHighlight color="text-accent-2">{ data.job }</TitleHighlight>
				<h3 className="font-secondary text-lg">{ data.name }</h3>
			</div>
			<p className="text-text text-sm font-light">{ data.text }</p>
		</li>
	)
}