import { WhoIAmHero } from './components/WhoIAmHero';
import { JourneySection } from './components/JourneySection';
import { CapabilityGrid } from './components/CapabilityGrid';
import { PhilosophySection } from './components/PhilosophySection';
import { CurrentFocus } from './components/CurrentFocus';
import { TechStack } from './components/TechStack';
import PageSeo from '../../components/PageSeo';

export default function WhoIAm() {
    return (
        <>
            <PageSeo
                title="Who I Am | Yassine Bouali"
                description="Learn about Yassine Bouali's background, engineering journey, capabilities, technical philosophy, and current focus."
                path="/who-i-am"
            />

            <div className="flex flex-col h-full w-full custom-scrollbar overflow-y-auto overflow-x-hidden relative">
                <div className="w-full">
                    <div className="w-[min(100%-2rem,1200px)] mx-auto pt-10 pb-32">
                        <div className="flex flex-col items-start gap-24 md:gap-32">
                            <WhoIAmHero />
                            <JourneySection />
                            <CapabilityGrid />
                            <PhilosophySection />
                            <CurrentFocus />
                            <TechStack />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
