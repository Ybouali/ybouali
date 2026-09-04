import type { ProjectStatus } from '../../../data/projects';

const statusStyles: Record<ProjectStatus, string> = {
    live: 'text-owl-bg bg-owl-green',
    dev: 'text-owl-bg bg-owl-orange',
    archived: 'text-owl-text-muted bg-owl-bg border border-owl-border',
};

const statusLabel: Record<ProjectStatus, string> = {
    live: 'live',
    dev: 'wip',
    archived: 'archived',
};

function StatusBadge({ status }: { status: ProjectStatus }) {
    return (
        <span
            className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${statusStyles[status]}`}
        >
            {statusLabel[status]}
        </span>
    );
}

export default StatusBadge;
