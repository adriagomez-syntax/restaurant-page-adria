import SectionWidth from "../../../common/utils/SectionWidth";
import FormReserveProgress from "./progress/FormReserveProgress";
import FormReserveDate from "./dateForm/FormReserveDate";
import FormReserveClientInfo from "./clientInfo/FormReserveClientInfo";
import FormReserveConfirm from "./confirm/FormReserveConfirm";
import FormReserveFinish from "./FormReserveFinish";
import { useState } from "react";

export default function FormReserveSection() {
	
	const [progress, setProgress] = useState(0);
	
	return (
		<SectionWidth classNameParent="bg-background py-16" className="w-full flex justify-center items-center">
			<form className={(progress >= 3 ? "hidden" : "") + " w-full md:w-[40vw]"}>
				<FormReserveProgress current={ progress } />
				<FormReserveDate current={ progress } setProgress={ setProgress } />
				<FormReserveClientInfo current={ progress } setProgress={ setProgress } />
				<FormReserveConfirm current={ progress } setProgress={ setProgress } />
			</form>
			<FormReserveFinish current={ progress } setProgress={ setProgress } />
		</SectionWidth>
	)
}