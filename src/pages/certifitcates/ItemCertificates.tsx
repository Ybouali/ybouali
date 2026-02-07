import { Card } from '../../components';
import type { CertificateType } from './ListCertificates';
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
}: CertificateType) {
    return (
        <Card
            className="rounded-xl border border-gray-700 hover:border-blue-500 transition-all cursor-pointer "
            onClick={() => {
                window.open(verificationURL, '_blank', 'noopener,noreferrer');
            }}
        >
            <div className="flex items-start mb-4">
                <AcademicCapIcon className="h-6 w-6 text-gray-700 mr-2 shrink-0 mt-1" />
                <h3 className="text-lg md:text-xl font-semibold text-purple-400 leading-tight">
                    {courseName}
                </h3>
            </div>
            <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-start">
                    <GlobeAltIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="font-medium text-purple-200 break-words">
                        {`Platform: ${platform}`}
                    </span>
                </p>
                <p className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="font-medium text-purple-200">
                        {`Issued Date: ${issuedDate}`}
                    </span>
                </p>
                <p className="flex items-start">
                    <IdentificationIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="font-medium text-purple-200 break-all">
                        {`Certificate ID: ${certificateID}`}
                    </span>
                </p>
                {verificationURL && (
                    <div className="pt-2">
                        <span className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
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
