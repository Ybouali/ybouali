import ItemEducation from './ItemEdication';
import { educations } from '../../data/education';

function ListEducations() {
    return (
        <div className="flex flex-col gap-4 w-full ">
            {educations.map((edu) => (
                <ItemEducation key={edu.id} {...edu} />
            ))}
        </div>
    );
}

export default ListEducations;
