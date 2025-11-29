import { Card } from '../../components';
import type { EducationType } from './ListEducations';
import {
    CalendarIcon,
    MapPinIcon,
    AcademicCapIcon,
    LinkIcon,
} from '@heroicons/react/24/outline';

function ItemEducation({
    school,
    dates,
    description,
    degree,
    fieldOfStudy,
    location,
    urlSchool,
    urlLogo,
}: EducationType) {
    return (
        <Card className="flex items-start gap-4 p-6  rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <img
                src={urlLogo}
                alt={school}
                className="w-12 h-12 rounded-full object-cover bg-gray-800"
            />
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <AcademicCapIcon className="h-5 w-5 text-blue-400" />
                    {degree}
                </h3>
                <p className="text-md text-gray-300">{fieldOfStudy}</p>
                <a
                    href={urlSchool}
                    className="text-lg font-medium text-blue-400 hover:underline flex items-center gap-1"
                >
                    <LinkIcon className="h-4 w-4" />
                    {school}
                </a>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    {location}
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {dates}
                </p>
                <p className="mt-2 text-gray-200">{description}</p>
            </div>
        </Card>
    );
}

export default ItemEducation;
