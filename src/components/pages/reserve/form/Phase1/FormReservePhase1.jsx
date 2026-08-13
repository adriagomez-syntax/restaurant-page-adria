import FormReservePhase1Hour from "./FormReservePhase1Hour";
import FormReservePhase1Date from "./FormReservePhase1Date";
import FormReservePhase1Diners from "./FormReservePhase1Diners";
import FilledButton from "../../../../common/utils/button/FilledButton";

export default function FormReservePhase1() {
	return (
		<div className="flex flex-col gap-6 mt-12">
			<FormReservePhase1Date />
			<FormReservePhase1Hour />
			<FormReservePhase1Diners />
			<FilledButton className="bg-accent-2 text-background mt-4">Weiter</FilledButton>
		</div>
	)
}