export type CertificateType = {
    courseName: string;
    platform: string;
    issuedDate: string;
    certificateID: string;
    verificationURL: string;
    yourName: string;
    visuals: string;
};

function ListCertificates() {
    return <div className="flex flex-col gap-6 w-full "></div>;
}

export default ListCertificates;
