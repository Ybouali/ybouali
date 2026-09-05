import { whoIAm } from '../../../data/who-i-am';
import { Section } from './Section';

export function JourneySection() {
    return (
        <Section eyebrow="// HOW DID I GET HERE?" title="Engineering Journey">
            <div className="flex flex-col relative w-full mt-8 md:mt-12">
                {/* Timeline Rail */}
                <div className="absolute left-[7px] md:left-[120px] top-2 bottom-0 w-[2px] bg-owl-border" />

                {whoIAm.journey.map((stage, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0">
                        {/* Mobile Date */}
                        <div className="md:hidden flex items-center pl-8 mb-2 w-full">
                            <span className="text-sm font-bold text-owl-text">{stage.date}</span>
                        </div>

                        {/* Desktop Date */}
                        <div className="hidden md:flex justify-end pr-8 w-[120px] shrink-0 pt-0.5">
                            <span className="text-sm font-bold text-owl-text">{stage.date}</span>
                        </div>

                        {/* Milestone Node */}
                        <div 
                            className={`absolute left-0 md:left-[113px] top-1 md:top-1.5 w-4 h-4 rounded-full border-[3px] border-owl-bg z-10 transition-colors ${
                                stage.current 
                                    ? 'bg-owl-cyan shadow-[0_0_8px_var(--color-owl-cyan)]' 
                                    : 'bg-owl-blue shadow-[0_0_0_2px_var(--color-owl-border)]'
                            }`} 
                        />

                        {/* Content */}
                        <div className="flex flex-col pl-8 md:pl-10 w-full">
                            <span className="text-xs font-mono text-owl-purple uppercase tracking-widest mb-1">
                                {stage.category}
                            </span>
                            <h3 className="text-xl font-bold text-owl-text mb-1">
                                {stage.title}
                            </h3>
                            <span className="text-sm font-mono text-owl-orange mb-3">
                                {stage.organization}
                            </span>
                            
                            <p className="text-base text-owl-text-muted leading-relaxed max-w-2xl mb-4">
                                {stage.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {stage.technologies.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-owl-keyword">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
