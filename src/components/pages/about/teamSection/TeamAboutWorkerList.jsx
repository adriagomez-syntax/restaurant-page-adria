import TeamAboutWorker from "./TeamAboutWorker"
import team from "../../../../assets/data/team.json" with { type: 'json' }

export default function TeamAboutWorkerList() {
	return (
		<ul className="flex flex-col md:flex-row gap-4">
			{team.map((worker, index) => (
				<TeamAboutWorker key={ index } data={ worker } index={ index } />
			))}
		</ul>
	)
}