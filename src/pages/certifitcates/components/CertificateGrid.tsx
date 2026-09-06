import {
certificates,
type Certificate,
} from '../../../data/Certificates';
import CertificateCard from './CertificateCard';

function groupByPlatform() {
const groups: { platform: string; items: Certificate[] }[] = [];

for (const certificate of certificates) {
    const existing = groups.find(
        (group) => group.platform === certificate.platform
    );

    if (existing) {
        existing.items.push(certificate);
    } else {
        groups.push({
            platform: certificate.platform,
            items: [certificate],
        });
    }
}

return groups;


}

function CertificateGrid() {
const groups = groupByPlatform();


return (
    <div className="flex flex-col gap-10 w-full min-w-0">
        {groups.map((group, groupIndex) => (
            <section key={group.platform} className="w-full min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                    <h2 className="font-mono text-sm text-owl-comment">
                        {'// '}
                        {group.platform}
                    </h2>

                    <span className="font-mono text-xs text-owl-text-muted">
                        {group.items.length}{' '}
                        {group.items.length === 1
                            ? 'credential'
                            : 'credentials'}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                    {group.items.map((certificate, itemIndex) => {
                        const index =
                            groups
                                .slice(0, groupIndex)
                                .reduce(
                                    (total, currentGroup) =>
                                        total + currentGroup.items.length,
                                    0
                                ) + itemIndex;

                        return (
                            <CertificateCard
                                key={certificate.id}
                                certificate={certificate}
                                index={index}
                            />
                        );
                    })}
                </div>
            </section>
        ))}
    </div>
);


}

export default CertificateGrid;
