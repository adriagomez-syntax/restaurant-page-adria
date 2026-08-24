import ImgHighlight from "../../../../common/utils/ImgHighlight";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function DishRow({ index, img, name, desc, tags, price }) {
	return (
		<li className="flex px-4 justify-between items-start min-h-20 py-8 not-last:border-b-primary not-last:border-b hover:bg-background-mid transition">
			<div className="flex-1 flex gap-4">
				<ImgHighlight src={ img } alt={ name } className="size-32 bg-background-mid rounded-xs object-cover" />
				<TitleHighlight className="font-secondary">
					{index.toString().padStart(2, 0)}
				</TitleHighlight>
				<div className="flex-1 pr-6">
					<div className="flex gap-4 flex-wrap">
						<h3 className="font-secondary font-light text-2xl">
							{ name }
						</h3>
						<div className="flex items-center gap-2">
							{tags.map((tag) => (
								<span key={ tag } className="text-xs text-accent-3 text-shadow-2xs tracking-widest font-light bg-accent-3/10 rounded-xs px-2 py-1 uppercase">{ tag }</span>
							))}
						</div>
					</div>
					<p className="text-text text-sm font-light mt-2">
						{ desc }
					</p>
				</div>
			</div>
			<span className="text-accent-1 font-light font-secondary text-right text-xl">
                € { price }
			</span>
		</li>
	)
}