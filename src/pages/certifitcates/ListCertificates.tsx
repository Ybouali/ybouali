import { certificates } from '../../data/Certificates';
import ItemCertificates from './ItemCertificates';

export type CertificateType = {
    courseName: string;
    platform: string;
    issuedDate: string;
    certificateID: string;
    verificationURL: string;
    yourName: string;
};

function ListCertificates() {
    return (
        <div className="flex flex-col gap-6 w-full ">
            {certificates.map((certificate, index) => (
                <ItemCertificates key={index} {...certificate} />
            ))}
        </div>
    );
}

export default ListCertificates;
