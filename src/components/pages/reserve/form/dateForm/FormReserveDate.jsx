import FormReserveDateHour from "./FormReserveDateHour";
import FormReserveDateDate from "./FormReserveDateDate";
import FormReserveDateDiners from "./FormReserveDateDiners";
import FilledButton from "../../../../common/utils/button/FilledButton";
import { useRef, useState } from "react";

export default function FormReserveDate({ progress = 0, setProgress = null}) {
	
	const dateRef = useRef(null);
	const [hour, setHour] = useState("");
	const [dinners, setDinners] = useState(0);

	function onNext() {
		if (dateRef.current?.value === "") { return }
		if (hour === "") { return }
		if (dinners <= 0) { return }

		if (setProgress !== null)
		{ setProgress(progress + 1) }

	}

	return (
		<div className={ progress === 0 ? "" : "hidden" }>
			<div className="flex flex-col gap-6">
				<FormReserveDateDate ref={ dateRef } />
				<FormReserveDateHour setHour={ setHour } />
				<FormReserveDateDiners setDinners={ setDinners } />
				<FilledButton className="bg-accent-2 text-background mt-4"
					onClick={ onNext }>
						Weiter
				</FilledButton>
			</div>
		</div>
	)
}