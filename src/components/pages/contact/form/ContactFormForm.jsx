import { useState } from "react";
import FilledButton from "../../../common/utils/button/FilledButton";
import Input from "../../../common/utils/Input";
import TextArea from "../../../common/utils/TextArea";
import TitleHighlight from "../../../common/utils/TitleHighlight";

export default function ContactFormForm() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function onFormSubmit(event) {
		event.preventDefault()
		console.log("Name: " + name)
		console.log("Email: " + email)
		console.log("Subject: " + subject)
		console.log("Message: " + message)
		console.log("Form senden!")
	}
	
	return (
		<form onSubmit={onFormSubmit} className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">Ihr Name</TitleHighlight>
				<Input type="text" name="name" maxLength="20" placeholder="Max Mustermann" value={ name } 
					onChange={event => setName(event.target.value)} />
			</div>
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">E-Mail-Adresse</TitleHighlight>
				<Input type="email" name="email" maxLength="50" placeholder="max@beispiel.de" value={ email } 
					onChange={event => setEmail(event.target.value)} />
			</div>
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">Betreff</TitleHighlight>
				<Input type="text" name="subject" maxLength="50" placeholder="Anfrage / Feedback" value={ subject }
					onChange={event => setSubject(event.target.value)} />
			</div>
			<div className="flex flex-col gap-2">
				<TitleHighlight className="text-text text-xs">Ihre Nachricht</TitleHighlight>
				<TextArea type="text" name="body" maxLength="500" placeholder="Schreiben Sie uns..."
					onChange={event => setMessage(event.target.value)}>
					{ message }
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