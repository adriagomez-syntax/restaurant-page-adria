import HeroSection from '../components/pages/home/heroSection/HeroSection'
import InfoSection from '../components/pages/home/infoSection/InfoSection'
import StorySection from '../components/pages/home/storySection/StorySection'
import ReservierungSection from '../components/pages/home/reservationSection/ReservationSection'
import ScheduleSection from '../components/pages/home/scheduleSection/ScheduleSection'
import Main from '../components/common/utils/Main'

export default function HomePage() {
    return (
        <Main>
            <HeroSection />
            <InfoSection />
            <StorySection />
            <ReservierungSection />
            <ScheduleSection />
        </Main>
    )
}