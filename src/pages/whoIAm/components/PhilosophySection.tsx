import { whoIAm } from '../../../data/who-i-am';
import { Section } from './Section';

export function PhilosophySection() {
    return (
        <Section eyebrow="// HOW DO I THINK?" title="Engineering Philosophy">
            <div className="flex flex-col gap-8 mt-6 max-w-3xl">
                <div className="font-mono text-xl md:text-2xl text-owl-string leading-snug border-l-4 border-owl-purple pl-6 py-2">
                    {whoIAm.philosophy.slice(0, 5).map((principle, index) => (
                        <div key={index}>{principle}</div>
                    ))}
                </div>
                <div className="text-lg text-owl-text-muted italic pl-6">
                    {whoIAm.philosophy[5]}
                </div>
            </div>
        </Section>
    );
}
