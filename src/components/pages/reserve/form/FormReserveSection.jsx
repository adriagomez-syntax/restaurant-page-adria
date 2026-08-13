import SectionWidth from "../../../common/utils/SectionWidth";
import FormReserveProgress from "./progress/FormReserveProgress";
import FormReservePhase1 from "./phase1/FormReservePhase1";
import FormReserveFinish from "./FormReserveFinish";
//import FormReservePhase2 from "./phase2/FormReservePhase2";
//import FormReservePhase3 from "./phase3/FormReservePhase3";

export default function FormReserveSection() {
	return (
		<SectionWidth classNameParent="bg-background py-16" className="w-full flex justify-center items-center">
			<form className="w-full md:w-[40vw]">
				<FormReserveProgress />
				<FormReservePhase1 />
			</form>
			<FormReserveFinish className="hidden" />
		</SectionWidth>
	)
}