import FilledButton from "../../../common/utils/button/FilledButton";

export default function FormReserveFinish({ progress = 0, setProgress = null }) {
	const persons = 2;
	const date = "2026-08-03";
	const hour = "22:00";
	const email = "maria@beispiel.de";
	
	return (
		<div className={ (progress === 3 ? "" : "hidden") + " flex flex-col gap-8 justify-center items-center" }>
			<p className="text-6xl">🥂</p>
			<p className="font-secondary font-light text-accent-1 text-4xl">¡Hasta pronto!</p>
			<div className="flex flex-col gap-4 px-8 text-wrap text-text text-center font-light">
				<p>
					{ "Ihre Reservierung für " }
					<span className="text-primary font-medium">{ persons + " Personen" }</span>
					{" am "}
					<span className="text-primary font-medium">{ date }</span>
					{" um " }
					<span className="text-primary font-medium">{ hour }</span>
					{" Uhr ist bestätigt."}
				</p>
				<div className="flex flex-col gap-2 text-sm">
					<p>
						{ "Eine Bestätigung wurde an " }
						<span className="text-primary font-medium">{ email }</span>
						{" gesendet."}
					</p>
					<p>Bei Änderungen rufen Sie uns unter +49 69 987 654 32 an.</p>
				</div>
			</div>
			<FilledButton className="bg-accent-2 text-background mt-2"
				onClick={() => {
					if (setProgress !== null)
					{ setProgress(0) }
				}}>
				Weitere Reservierung
			</FilledButton>
		</div>
	)
}