import { whoIAm } from '../../../data/who-i-am';
import { Section } from './Section';

export function CapabilityGrid() {
    return (
        <Section eyebrow="// WHAT DO I BUILD?" title="Core Capabilities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mt-4">
                {whoIAm.whatIBuild.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-owl-cyan rounded-sm" />
                            <h3 className="text-lg font-bold text-owl-text">{item.category}</h3>
                        </div>
                        <p className="text-base text-owl-text-muted leading-relaxed pl-4">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
