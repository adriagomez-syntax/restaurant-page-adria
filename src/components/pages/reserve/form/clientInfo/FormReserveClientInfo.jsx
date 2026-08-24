import FilledButton from "../../../../common/utils/button/FilledButton";
import OutlinedButton from "../../../../common/utils/button/OutlinedButton";
import Input from "../../../../common/utils/Input";
import TextArea from "../../../../common/utils/TextArea";
import TitleHighlight from "../../../../common/utils/TitleHighlight";

export default function FormReserveClientInfo({ progress = 0, setProgress = null }) {
	return (
		<div className={ progress === 1 ? "" : "hidden" }>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<TitleHighlight className="text-xs" color="text-text">Vor- und Nachname</TitleHighlight>
					<Input type="text" maxLength="20" name="name" placeholder="Maria Musstermann" />
				</div>
				<div className="flex flex-col gap-2">
					<TitleHighlight className="text-xs" color="text-text">Telefonnummer</TitleHighlight>
					<Input type="tel" maxLength="14" name="phone" placeholder="+49 170 123 456 78" />
				</div>
				<div className="flex flex-col gap-2">
					<TitleHighlight className="text-xs" color="text-text">E-Mail-Adresse</TitleHighlight>
					<Input type="email" maxLength="50" name="email" placeholder="maria@beispiel.de" />
				</div>
				<div className="flex flex-col gap-2">
					<TitleHighlight className="text-xs" color="text-text">Besondere Wünsche (Optional)</TitleHighlight>
					<TextArea type="text" maxLength="20" placeholder="Ihre Wünsch..." />
				</div>
				<div className="flex gap-4 mt-6">
					<OutlinedButton className="border-text text-text w-full md:w-3xs" 
						onClick={() => {
							if (setProgress !== null)
							{ setProgress(progress--) }
						}}>
						Zurück
					</OutlinedButton>
					<FilledButton className="bg-accent-2 text-background w-full" 
						onClick={() => {
							if (setProgress !== null)
							{ setProgress(progress++) }
						}}>
						Weiter
					</FilledButton>
				</div>
			</div>
		</div>
	)
}