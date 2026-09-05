
import { WhoIAmHero } from './components/WhoIAmHero';
import { JourneySection } from './components/JourneySection';
import { CapabilityGrid } from './components/CapabilityGrid';
import { PhilosophySection } from './components/PhilosophySection';
import { CurrentFocus } from './components/CurrentFocus';
import { TechStack } from './components/TechStack';

export default function WhoIAm() {
    return (
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
    );
}
