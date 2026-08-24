import FilledButton from "../../../../common/utils/button/FilledButton";
import OutlinedButton from "../../../../common/utils/button/OutlinedButton";
import FormReserveConfirmResume from "./FormReserveConfirmResume";

export default function FormReserveConfirm({ progress = 0, setProgress = null }) {
	return (
		<div className={ progress === 2 ? "" : "hidden" }>
			<div className="flex flex-col gap-8" >
				<FormReserveConfirmResume />
				<div className="flex gap-4">
					<OutlinedButton className="border-text text-text w-full md:w-3xs"
						onClick={() => {
							if (setProgress !== null)
							{ setProgress(progress--) }
						}}>Zurück</OutlinedButton>
					<FilledButton className="bg-accent-2 text-background w-full" 
						onClick={() => {
							if (setProgress !== null)
							{ setProgress(progress++) }
						}}>Reservierung Bestätigen</FilledButton>
				</div>
			</div>
		</div>

	)
}