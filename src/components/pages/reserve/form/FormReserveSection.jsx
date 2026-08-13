import SectionWidth from "../../../common/utils/SectionWidth";
import FormReserveProgress from "./progress/FormReserveProgress";
import FormReserveDate from "./dateForm/FormReserveDate";
import FormReserveClientInfo from "./clientInfo/FormReserveClientInfo";
import FormReserveConfirm from "./confirm/FormReserveConfirm";
import FormReserveFinish from "./FormReserveFinish";

export default function FormReserveSection() {
	return (
		<SectionWidth classNameParent="bg-background py-16" className="w-full flex justify-center items-center">
			<form className="w-full md:w-[40vw]">
				<FormReserveProgress />
				<FormReserveDate className="" />
				<FormReserveClientInfo className="hidden" />
				<FormReserveConfirm className="hidden" />
			</form>
			<FormReserveFinish className="hidden" />
		</SectionWidth>
	)
}