import ImgHighlight from "../../../../common/utils/ImgHighlight";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function DishGrid({ data }) {
	return (
		<div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{ data.map((dish, index) => (
				<div key={ dish.id } className="flex gap-4 justify-center items-center">
					<div className="w-50">
						<ImgHighlight src={ dish.img } alt={ dish.name } className="size-32 rounded-xs object-cover" />
					</div>
					<div className="w-full flex flex-col gap-1">
						<div className="flex gap-1 items-center">
							<TitleHighlight className="font-secondary">{ (index + 1).toString().padStart(2, '0') }</TitleHighlight>
							<h3 className="font-secondary font-light text-2xl">{ dish.name }</h3>
						</div>
						<div className="flex items-center gap-2">
							{dish.tag.map((tag) => (
								<span key={ tag } className="text-xs text-accent-3 text-shadow-2xs tracking-widest font-light bg-accent-3/10 rounded-xs px-2 py-1 uppercase">{ tag }</span>
							))}
						</div>
						<p className="text-text text-sm text-wrap font-light">{ dish.desc }</p>
						<p className="text-accent-1 font-light font-secondary text-xl">{ dish.price.toFixed(2) } €</p>
					</div>
				</div>
			))}
		</div>
	)
}