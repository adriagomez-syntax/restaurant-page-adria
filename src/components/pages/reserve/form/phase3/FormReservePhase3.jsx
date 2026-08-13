import FilledButton from "../../../../common/utils/button/FilledButton";
import OutlinedButton from "../../../../common/utils/button/OutlinedButton";
import FormReservePhase3Resume from "./FormReservePhase3Resume";

export default function FormReservePhase3() {
	return (
		<div className="flex flex-col gap-8">
			<FormReservePhase3Resume />
			<div className="flex gap-4">
				<OutlinedButton className="border-text text-text w-full md:w-3xs">Zurück</OutlinedButton>
				<FilledButton className="bg-accent-2 text-background w-full">Reservierung Bestätigen</FilledButton>
			</div>
		</div>

	)
}