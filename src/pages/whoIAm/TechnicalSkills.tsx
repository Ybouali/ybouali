import { Card } from '../../components';
import { site } from '../../data/site';

function TechnicalSkills() {
    const skills = site.skills;
    const entries = Object.entries(skills);
    return (
        <Card className="flex flex-col w-full items-start justify-between gap-4 p-4">
            <p className="text-lg font-semibold text-owl-comment font-mono">
                {'// Technical Stack'}
            </p>
            <div className="text-base text-owl-text font-mono w-full overflow-hidden">
                <span className="text-owl-purple">const</span>
                <span className="text-owl-text">{` stack `}</span>
                <span className="text-owl-text">{' = '}</span>
                <span className="text-owl-green">{'{'}</span>
                {entries.map(([category, skillList], index) => (
                    <div key={category} className="ml-4 my-1">
                        <span className="text-owl-cyan">{category}:</span>
                        <span className="text-owl-text"> {'['}</span>
                        <div className="ml-4 flex flex-wrap gap-1">
                            {skillList.map((skill, skillIndex) => (
                                <span
                                    key={skill}
                                    className="text-owl-warning whitespace-nowrap"
                                >
                                    '{skill}'
                                    {skillIndex < skillList.length - 1
                                        ? ','
                                        : ''}
                                </span>
                            ))}
                        </div>
                        <span className="text-owl-text">{']'}</span>
                        <span className="text-owl-green">
                            {index < entries.length - 1 ? ',' : ''}
                        </span>
                    </div>
                ))}
                <span className="text-owl-green">{'}'}</span>
                <span className="text-owl-text">;</span>
            </div>
        </Card>
    );
}

export default TechnicalSkills;
