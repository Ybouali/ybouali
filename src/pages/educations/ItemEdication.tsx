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
        <Card className="flex flex-col md:flex-row items-start gap-4 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <img
                src={urlLogo}
                alt={school}
                className="w-12 h-12 rounded-full object-cover bg-gray-800 shrink-0"
            />
            <div className="flex-1 w-full">
                <h3 className="text-lg md:text-xl font-semibold text-white flex flex-wrap items-center gap-2">
                    <AcademicCapIcon className="h-5 w-5 text-blue-400 shrink-0" />
                    <span>{degree}</span>
                </h3>
                <p className="text-base text-gray-300 mt-1">{fieldOfStudy}</p>
                
                <div className="flex flex-col gap-1 mt-2">
                    <a
                        href={urlSchool}
                        target="_blank"
                        className="text-base md:text-lg font-medium text-blue-400 hover:underline flex items-center gap-1 w-fit"
                    >
                        <LinkIcon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{school}</span>
                    </a>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <p className="flex items-center gap-1">
                            <MapPinIcon className="h-4 w-4 shrink-0" />
                            {location}
                        </p>
                        <p className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4 shrink-0" />
                            {dates}
                        </p>
                    </div>
                </div>
                
                <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                    {description}
                </p>
            </div>
        </Card>
    );
}

export default ItemEducation;
