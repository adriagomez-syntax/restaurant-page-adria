import FilledButton from "../../../../common/utils/button/FilledButton";
import OutlinedButton from "../../../../common/utils/button/OutlinedButton";
import FormReserveConfirmResume from "./FormReserveConfirmResume";

export default function FormReserveConfirm({ className = ""}) {
	return (
		<div className={ className }>
			<div className="flex flex-col gap-8" >
				<FormReserveConfirmResume />
				<div className="flex gap-4">
					<OutlinedButton className="border-text text-text w-full md:w-3xs">Zurück</OutlinedButton>
					<FilledButton className="bg-accent-2 text-background w-full">Reservierung Bestätigen</FilledButton>
				</div>
			</div>
		</div>

	)
}