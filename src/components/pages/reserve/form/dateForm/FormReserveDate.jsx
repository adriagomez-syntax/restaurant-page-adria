import FormReserveDateHour from "./FormReserveDateHour";
import FormReserveDateDate from "./FormReserveDateDate";
import FormReserveDateDiners from "./FormReserveDateDiners";
import FilledButton from "../../../../common/utils/button/FilledButton";

export default function FormReserveDate({ className = "" }) {
	return (
		<div className={ className }>
			<div className="flex flex-col gap-6">
				<FormReserveDateDate />
				<FormReserveDateHour />
				<FormReserveDateDiners />
				<FilledButton className="bg-accent-2 text-background mt-4">Weiter</FilledButton>
			</div>
		</div>
	)
}