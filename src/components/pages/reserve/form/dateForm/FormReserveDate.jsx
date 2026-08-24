import FormReserveDateHour from "./FormReserveDateHour";
import FormReserveDateDate from "./FormReserveDateDate";
import FormReserveDateDiners from "./FormReserveDateDiners";
import FilledButton from "../../../../common/utils/button/FilledButton";

export default function FormReserveDate({ progress = 0, setProgress = null}) {
	return (
		<div className={ progress === 0 ? "" : "hidden" }>
			<div className="flex flex-col gap-6">
				<FormReserveDateDate />
				<FormReserveDateHour />
				<FormReserveDateDiners />
				<FilledButton className="bg-accent-2 text-background mt-4"
					onClick={() => {
						if (setProgress !== null)
						{ console.log(progress); setProgress(progress + 1) }
					}}>
						Weiter
				</FilledButton>
			</div>
		</div>
	)
}