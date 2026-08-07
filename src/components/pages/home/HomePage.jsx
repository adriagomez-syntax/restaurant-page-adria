import HeroSection from './heroSection/HeroSection'
import InfoSection from './infoSection/InfoSection'
import StorySection from './storySection/StorySection'
import ReservierungSection from './reservationSection/ReservationSection'
import ScheduleSection from './scheduleSection/ScheduleSection'

export default function HomePage() {
    return (
        <main className="flex flex-col flex-1">
            <HeroSection />
            <InfoSection />
            <StorySection />
            <ReservierungSection />
            <ScheduleSection />
        </main>
    )
}