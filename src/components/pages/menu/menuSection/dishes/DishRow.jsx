import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function DishRow({ index, name, desc, tags, price }) {
	return (
		<li className="flex px-4 justify-between items-start md:mx-60 min-h-20 py-8 not-last:border-b-primary not-last:border-b hover:bg-background-mid transition">
			<div className="flex-1 flex">
				<TitleHighlight className="font-secondary">
					{index.toString().padStart(2, 0)}
				</TitleHighlight>
				<div className="px-6">
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