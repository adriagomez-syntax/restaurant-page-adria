import SectionWidth from "../../../common/utils/SectionWidth";
import FormReserveProgress from "./FormReserveProgress";
import FormReservePhase1 from "./Phase1/FormReservePhase1";

export default function FormReserveSection() {
	return (
		<SectionWidth classNameParent="bg-background py-16" className="w-full flex justify-center items-center">
			<form className="w-full md:w-[40vw]">
				<FormReserveProgress />
				<FormReservePhase1 />
			</form>
		</SectionWidth>
	)
}