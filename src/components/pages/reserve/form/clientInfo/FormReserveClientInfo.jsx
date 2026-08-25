import { useRef } from "react";
import FilledButton from "../../../../common/utils/button/FilledButton";
import OutlinedButton from "../../../../common/utils/button/OutlinedButton";
import FormReserveClientInfoInput from "./FormReserveClientInfoInput";

export default function FormReserveClientInfo({ progress = 0, setProgress = null }) {
	
	const nameRef = useRef(null);
	const telefonRef = useRef(null);
	const emailRef = useRef(null);
	const wishRef = useRef(null);

	function onNext() {
		if (nameRef.current.value === "") { return }
		if (telefonRef.current.value === "") { return }
		if (emailRef.current.value === "") { return }
		if (wishRef.current.value === "") { return }

		if (setProgress !== null)
		{ setProgress(progress++) }
	}
	
	return (
		<div className={ progress === 1 ? "" : "hidden" }>
			<div className="flex flex-col gap-6">
				<FormReserveClientInfoInput title="Vor- und Nachname" type="text" maxLength="20" name="name" placeholder="Maria Musstermann" ref={ nameRef } />
				<FormReserveClientInfoInput title="Telefonnummer" type="tel" maxLength="14" name="phone" placeholder="+49 170 123 456 78" ref={ telefonRef } />
				<FormReserveClientInfoInput title="E-Mail-Adresse" type="email" maxLength="50" name="email" placeholder="maria@beispiel.de" ref={ emailRef } />
				<FormReserveClientInfoInput title="Besondere Wünsche (Optional)" textarea={ true } name="wish" maxLength="20" placeholder="Ihre Wünsch..." ref={ wishRef } />
				<div className="flex gap-4 mt-6">
					<OutlinedButton className="border-text text-text w-full md:w-3xs" 
						onClick={() => {
							if (setProgress !== null)
							{ setProgress(progress--) }
						}}>
						Zurück
					</OutlinedButton>
					<FilledButton className="bg-accent-2 text-background w-full" 
						onClick={ onNext }>
						Weiter
					</FilledButton>
				</div>
			</div>
		</div>
	)
}