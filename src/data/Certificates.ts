import certificatesData from './certificates.json';

export interface Certificate {
    id: string;
    courseName: string;
    platform: string;
    issuedDate: string;
    certificateID: string;
    verificationURL: string;
    yourName: string;
}

export const certificates: Certificate[] = certificatesData as Certificate[];
