import { Card } from '../../components';

function TechnicalSkills() {
    const skills = {
        frontEnd: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'typeScript',
            'Tailwind CSS',
        ],
        backEnd: ['Node.js', 'Express.js', 'Django', 'Java', 'Spring Boot'],
        mobile: ['React Native', 'Flutter'],
        databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        tools: ['Git', 'Docker', 'Postman', 'VS Code', 'And more...'],
    };
    return (
        <Card className="flex flex-col-reverse md:flex-col w-full items-start justify-between gap-4 p-2 ">
            <p className="text-lg font-semibold text-[#4e6a40] ">
                {`// Technical Skills`}
            </p>
            <div className="text-md text-gray-300 ">
                <span className="text-lg text-purple-400 ">const</span>
                <span className="text-lg text-white">{` bio `}</span>
                <span className="text-lg text-white">{' = '}</span>
                <span className="text-lg text-[#4e6a40]">{'['}</span>
                {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={category} className="ml-4">
                        <span className="text-lg text-[#6d9f71]">
                            {category}:
                        </span>
                        <span className="text-lg text-white"> {'['}</span>
                        <br />
                        {skillList.map((skill, skillIndex) => (
                            <span
                                key={skill}
                                className="text-lg text-yellow-600"
                            >
                                {'\u00A0\u00A0'}'{skill}'
                                {skillIndex < skillList.length - 1 ? ', ' : ' '}
                            </span>
                        ))}
                        <br />
                        <span className="text-lg text-white">{']'}</span>
                        <span className="text-lg text-[#4e6a40]">
                            {index < Object.entries(skills).length - 1
                                ? ','
                                : ''}
                        </span>
                    </div>
                ))}
                <span className="text-lg text-[#4e6a40]">]</span>
                <span className="text-lg text-white">;</span>
                {/* <span className="text-lg text-[#4e6a40]">{'['}</span>
                {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={category} className="ml-4">
                        <span className="text-lg text-[#6d9f71]">
                            {category}:
                        </span>
                        <span className="text-lg text-white">{' [ '}</span>
                        <br />
                        {skillList.map((skill, skillIndex) => (
                            <span
                                key={skill}
                                className="text-lg text-yellow-600"
                            >
                                {`' ${skill} '${
                                    skillIndex < skillList.length - 1
                                        ? ', '
                                        : ''
                                }`}
                            </span>
                        ))}
                        <br />
                        <span className="text-lg text-white">{' ] '}</span>
                        <span className="text-lg text-[#4e6a40]">
                            {index < Object.entries(skills).length - 1
                                ? ','
                                : ''}
                        </span>
                    </div>
                ))}
                <span className="text-lg text-[#4e6a40]">{']'}</span>
                <span className="text-lg text-white">{';'}</span> */}
            </div>
        </Card>
    );
}

export default TechnicalSkills;
