import SectionWidth from "../../../common/utils/SectionWidth";
import FormReserveProgress from "./progress/FormReserveProgress";
import FormReserveDate from "./dateForm/FormReserveDate";
import FormReserveClientInfo from "./clientInfo/FormReserveClientInfo";
import FormReserveConfirm from "./confirm/FormReserveConfirm";
import FormReserveFinish from "./FormReserveFinish";
import { useState } from "react";

export default function FormReserveSection() {
	
	const [progress, setProgress] = useState(0);

	function onFormSubmit(event)
	{
		event.preventDefault()
	}
	
	return (
		<SectionWidth classNameParent="bg-background py-16" className="w-full flex justify-center items-center">
			<form onSubmit={ onFormSubmit } className={(progress >= 3 ? "hidden" : "") + " w-full md:w-[40vw]"}>
				<FormReserveProgress progress={ progress } />
				<FormReserveDate progress={ progress } setProgress={ setProgress } />
				<FormReserveClientInfo progress={ progress } setProgress={ setProgress } />
				<FormReserveConfirm progress={ progress } setProgress={ setProgress } />
			</form>
			<FormReserveFinish current={ progress } setProgress={ setProgress } />
		</SectionWidth>
	)
}