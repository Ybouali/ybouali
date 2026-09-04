import { certificates } from '../../data/Certificates';
import ItemCertificates from './ItemCertificates';

function ListCertificates() {
    return (
        <div className="flex flex-col gap-4 w-full ">
            {certificates.map((certificate) => (
                <ItemCertificates key={certificate.id} {...certificate} />
            ))}
        </div>
    );
}

export default ListCertificates;
