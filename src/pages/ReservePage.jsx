import Main from "../components/common/utils/Main";
import FormReserveSection from "../components/pages/reserve/form/FormReserveSection";
import HeroReserveSection from "../components/pages/reserve/HeroReserveSection";

export default function ReservePage() {
	return (
		<Main>
			<HeroReserveSection />
			<FormReserveSection />
		</Main>
	)
}