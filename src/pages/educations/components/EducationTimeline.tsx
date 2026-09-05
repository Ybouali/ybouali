import { educations } from '../../../data/education';
import EducationItem from './EducationItem';

function EducationTimeline() {
    return (
        <div className="w-full min-w-0">
            <ol className="flex flex-col">
                {educations.map((education, index) => (
                    <li key={education.id}>
                        <EducationItem
                            education={education}
                            index={index}
                            isLast={index === educations.length - 1}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default EducationTimeline;
