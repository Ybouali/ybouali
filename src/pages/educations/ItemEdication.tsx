import { Card } from '../../components';
import type { Education } from '../../data/education';
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
}: Education) {
    return (
        <Card className="flex flex-col md:flex-row items-start gap-4 p-4 md:p-6 rounded-xl hover:border-owl-blue transition-all">
            <img
                src={urlLogo}
                alt={school}
                className="w-12 h-12 rounded-full object-cover bg-owl-bg shrink-0 border border-owl-border"
            />
            <div className="flex-1 w-full">
                <h3 className="text-lg md:text-xl font-semibold text-owl-text flex flex-wrap items-center gap-2">
                    <AcademicCapIcon className="h-5 w-5 text-owl-blue shrink-0" />
                    <span>{degree}</span>
                </h3>
                <p className="text-base text-owl-text-muted mt-1">
                    {fieldOfStudy}
                </p>

                <div className="flex flex-col gap-1 mt-2">
                    <a
                        href={urlSchool}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base md:text-lg font-medium text-owl-blue hover:text-owl-cyan hover:underline flex items-center gap-1 w-fit"
                    >
                        <LinkIcon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{school}</span>
                    </a>
                    <div className="flex flex-wrap gap-4 text-sm text-owl-text-muted">
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

                <p className="mt-3 text-sm md:text-base text-owl-text leading-relaxed">
                    {description}
                </p>
            </div>
        </Card>
    );
}

export default ItemEducation;
