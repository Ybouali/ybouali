import { whoIAm } from '../../../data/who-i-am';
import { Section } from './Section';

export function TechStack() {
    return (
        <Section eyebrow="// WHAT I USE" title="Technical Stack">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-4">
                {Object.entries(whoIAm.techStack).map(([category, techs]) => (
                    <div key={category} className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold text-owl-cyan uppercase tracking-wider">{category}</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2">
                            {techs.map((tech, idx) => (
                                <div key={tech} className="flex items-center">
                                    <span className="text-base text-owl-text">{tech}</span>
                                    {idx < techs.length - 1 && (
                                        <span className="text-owl-text-muted ml-3">·</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
