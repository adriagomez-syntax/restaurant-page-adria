import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import StorySection from './StorySection'
import ReservierungSection from './ReservierungSection'
import ScheduleSection from './ScheduleSection'

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <InfoSection />
            <StorySection />
            <ReservierungSection />
            <ScheduleSection />
        </main>
    )
}