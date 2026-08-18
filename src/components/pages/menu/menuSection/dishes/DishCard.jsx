import ImgHighlight from "../../../../common/utils/ImgHighlight";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function DishCard({ index, img, name, tags, desc, price }) {
	return (
		<div className="flex gap-4 justify-center items-center p-4 rounded-xs shadow-sm shadow-accent-1/20 border border-background-mid hover:shadow-md transition">
			<div className="w-50">
				<ImgHighlight src={ img } alt={ name } className="size-32 bg-background-mid rounded-xs object-cover" />
			</div>
			<div className="w-full flex flex-col gap-1">
				<div className="flex gap-1 items-center">
					<TitleHighlight className="font-secondary">{ (index + 1).toString().padStart(2, '0') }</TitleHighlight>
					<h3 className="font-secondary font-light text-2xl">{ name }</h3>
				</div>
				<div className="flex items-center gap-2">
					{tags.map((tag) => (
						<span key={ tag } className="text-xs text-accent-3 text-shadow-2xs tracking-widest font-light bg-accent-3/10 rounded-xs px-2 py-1 uppercase">{ tag }</span>
					))}
				</div>
				<p className="text-text text-sm text-wrap font-light line-clamp-2">{ desc }</p>
				<p className="text-accent-1 font-light font-secondary text-xl">{ price.toFixed(2) } €</p>
			</div>
		</div>
	)
}