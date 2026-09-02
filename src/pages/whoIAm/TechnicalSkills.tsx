import { Card } from '../../components';

function TechnicalSkills() {
    const skills = {
        backend: [
            'Python',
            'FastAPI',
            'Node.js',
            'TypeScript',
            'C++',
        ],
        infrastructure: ['Docker', 'Kafka', 'Temporal', 'Nginx'],
        databases: ['PostgreSQL', 'Redis', 'MongoDB'],
        aiAndRAG: ['LangChain', 'LangGraph', 'Vector Databases'],
        frontend: ['React', 'Tailwind CSS', 'Vite'],
    };
    return (
        <Card className="flex flex-col w-full items-start justify-between gap-4 p-4">
            <p className="text-lg font-semibold text-[#4e6a40]">
                {`// Technical Stack`}
            </p>
            <div className="text-base text-gray-300 font-mono w-full overflow-hidden">
                <span className="text-purple-400">const</span>
                <span className="text-white">{` stack `}</span>
                <span className="text-white">{' = '}</span>
                <span className="text-[#4e6a40]">{'['}</span>
                {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={category} className="ml-4 my-1">
                        <span className="text-[#6d9f71]">
                            {category}:
                        </span>
                        <span className="text-white"> {'['}</span>
                        <div className="ml-4 flex flex-wrap gap-1">
                            {skillList.map((skill, skillIndex) => (
                                <span
                                    key={skill}
                                    className="text-yellow-600 whitespace-nowrap"
                                >
                                    '{skill}'
                                    {skillIndex < skillList.length - 1 ? ',' : ''}
                                </span>
                            ))}
                        </div>
                        <span className="text-white">{']'}</span>
                        <span className="text-[#4e6a40]">
                            {index < Object.entries(skills).length - 1
                                ? ','
                                : ''}
                        </span>
                    </div>
                ))}
                <span className="text-[#4e6a40]">]</span>
                <span className="text-white">;</span>
            </div>
        </Card>
    );
}

export default TechnicalSkills;
