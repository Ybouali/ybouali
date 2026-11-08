import { motion } from 'framer-motion';
import type { Certificate } from '../../../data/Certificates';

type CertificateCardProps = {
    certificate: Certificate;
    index: number;
};

function CertificateCard({ certificate, index }: CertificateCardProps) {
    const hasVerification = Boolean(certificate.verificationURL);
    const host = hasVerification
        ? certificate.verificationURL.replace(/^https?:\/\//, '').split('/')[0]
        : null;

    const content = (
        <>
            <div className="flex flex-col gap-3 flex-1 min-w-0">
                <span className="font-mono text-xs uppercase tracking-widest text-owl-purple">
                    {'// '}
                    {certificate.platform}
                </span>

                <h3 className="text-base md:text-lg font-semibold text-owl-text leading-snug tracking-tight group-hover:text-owl-cyan transition-colors">
                    {certificate.courseName}
                </h3>

                <dl className="flex flex-col gap-1 font-mono text-xs text-owl-comment">
                    <div className="flex flex-wrap gap-x-2 min-w-0">
                        <dt className="text-owl-keyword shrink-0">issued</dt>
                        <dd className="text-owl-text-muted">{certificate.issuedDate}</dd>
                    </div>
                    {certificate.certificateID && (
                        <div className="flex flex-wrap gap-x-2 min-w-0">
                            <dt className="text-owl-keyword shrink-0">id</dt>
                            <dd className="text-owl-text-muted break-all">
                                {certificate.certificateID}
                            </dd>
                        </div>
                    )}
                </dl>
            </div>

            {hasVerification && (
                <div className="mt-4 pt-3 border-t border-owl-border flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-owl-blue group-hover:text-owl-cyan transition-colors">
                        Verify credential
                    </span>
                    <span className="font-mono text-[10px] text-owl-comment truncate">
                        {host} ↗
                    </span>
                </div>
            )}
        </>
    );

    const className = `group flex flex-col h-full min-w-0 rounded-lg border border-owl-border bg-owl-surface p-5 shadow-sm shadow-black/10 transition-colors duration-300 hover:border-owl-blue/50 hover:bg-owl-surface-hover ${
        hasVerification ? 'cursor-pointer' : ''
    }`;

    if (hasVerification) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full min-w-0"
            >
                <a
                    href={certificate.verificationURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    aria-label={`Verify credential: ${certificate.courseName} (opens in a new tab)`}
                >
                    {content}
                </a>
            </motion.div>
        );
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={className}
        >
            {content}
        </motion.article>
    );
}

export default CertificateCard;
