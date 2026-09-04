import { Card } from '../../components';
import type { Certificate } from '../../data/Certificates';
import {
    AcademicCapIcon,
    CalendarIcon,
    GlobeAltIcon,
    IdentificationIcon,
    LinkIcon,
} from '@heroicons/react/24/outline';

function ItemCertificates({
    courseName,
    platform,
    issuedDate,
    certificateID,
    verificationURL,
}: Certificate) {
    return (
        <Card
            className="rounded-xl hover:border-owl-blue transition-all cursor-pointer"
            onClick={() => {
                window.open(verificationURL, '_blank', 'noopener,noreferrer');
            }}
        >
            <div className="flex items-start mb-4">
                <AcademicCapIcon className="h-6 w-6 text-owl-cyan mr-2 shrink-0 mt-1" />
                <h3 className="text-lg md:text-xl font-semibold text-owl-purple leading-tight">
                    {courseName}
                </h3>
            </div>
            <div className="space-y-3 text-sm text-owl-text-muted">
                <p className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="font-medium text-owl-cyan break-words">
                        {`Platform: ${platform}`}
                    </span>
                </p>
                <p className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="font-medium text-owl-cyan">
                        {`Issued Date: ${issuedDate}`}
                    </span>
                </p>
                <p className="flex items-start">
                    <IdentificationIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="font-medium text-owl-cyan break-all">
                        {`Certificate ID: ${certificateID}`}
                    </span>
                </p>
                {verificationURL && (
                    <div className="pt-2">
                        <span className="flex items-center text-owl-blue hover:text-owl-cyan transition-colors">
                            <LinkIcon className="h-5 w-5 mr-2 shrink-0" />
                            Verify Certificate
                        </span>
                    </div>
                )}
            </div>
        </Card>
    );
}

export default ItemCertificates;
