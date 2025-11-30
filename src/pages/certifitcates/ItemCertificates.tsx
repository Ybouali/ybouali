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
        <Card className=" rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-gray-700 mr-2" />
                <h3 className="text-xl font-semibold text-purple-400">
                    {courseName}
                </h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                    <GlobeAltIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium text-purple-200 ">
                        {`Platform: ${platform}`}
                    </span>
                </p>
                <p className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium text-purple-200 ">
                        {`Issued Date: ${issuedDate}`}
                    </span>
                </p>
                <p className="flex items-center">
                    <IdentificationIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium text-purple-200 ">
                        {`Certificate ID: ${certificateID}`}
                    </span>
                </p>
                {/* <p className="flex items-center">
                    <UserIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium text-purple-200 ">Issued To:</span> {yourName}
                </p> */}
                {verificationURL && (
                    <a
                        href={verificationURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <LinkIcon className="h-5 w-5 mr-2" />
                        Verify Certificate
                    </a>
                )}
            </div>
        </Card>
    );
}

export default ItemCertificates;
