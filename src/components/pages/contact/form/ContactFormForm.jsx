import { useRef } from "react";
import FilledButton from "../../../common/utils/button/FilledButton";
import Input from "../../../common/utils/Input";
import TextArea from "../../../common/utils/TextArea";
import TitleHighlight from "../../../common/utils/TitleHighlight";

export default function ContactFormForm() {

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const subjectRef = useRef(null);
	const messageRef = useRef(null);

	function onFormSubmit(event) {
		event.preventDefault()
		
		if (nameRef.current.value === "")
		{
			nameRef.current.focus();
			return;
		}
		
		if (emailRef.current.value === "")
		{
			emailRef.current.focus();
			return;
		}
		
		if (subjectRef.current.value === "")
		{
			subjectRef.current.focus();
			return;
		}
		
		if (messageRef.current.value === "")
		{
			messageRef.current.focus();
			return;
		}

		console.log("Submited form!")
	}
	
	return (
		<form onSubmit={onFormSubmit} className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">Ihr Name</TitleHighlight>
				<Input type="text" name="name" maxLength="20" placeholder="Max Mustermann" 
					ref={ nameRef } />
			</div>
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">E-Mail-Adresse</TitleHighlight>
				<Input type="email" name="email" maxLength="50" placeholder="max@beispiel.de" 
					ref={ emailRef } />
			</div>
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">Betreff</TitleHighlight>
				<Input type="text" name="subject" maxLength="50" placeholder="Anfrage / Feedback"
					ref={ subjectRef } />
			</div>
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">Ihre Nachricht</TitleHighlight>
				<TextArea type="text" name="body" maxLength="500" placeholder="Schreiben Sie uns..."
					ref={ messageRef } >
				</TextArea>
			</div>
			<div className="flex">
				<FilledButton type="submit" className="w-full bg-accent-2 text-background md:w-auto">
					Nachricht Absenden
				</FilledButton>
			</div>
		</form>
	)
}