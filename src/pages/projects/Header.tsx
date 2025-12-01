interface HeaderProps {
    openLiveProjects: boolean;
    setOpenLiveProjects: (open: boolean) => void;
    openCloseProjects: CloseProject | null;
}

import { DeveloperInfo, SendButton } from '../../components';
import type { CloseProject } from './CloseProjectsList';

function Header({
    openLiveProjects,
    setOpenLiveProjects,
    openCloseProjects,
}: HeaderProps) {
    return (
        <div className="relative flex flex-row w-full  items-center justify-between gap-3">
            <DeveloperInfo
                labelOne="from"
                labelTwo="description"
                valueOne="Projects.tsx"
                valueTwo={
                    openLiveProjects
                        ? 'Active projects currently live and running'
                        : 'Completed projects and past case studies.'
                }
            />
            <div className=" absolute top-0 right-0 ">
                <SendButton
                    label={
                        openCloseProjects !== null
                            ? 'Back to Projects'
                            : openLiveProjects
                            ? 'Live Projects'
                            : 'Close Projects'
                    }
                    showIcon={false}
                    onClick={() => setOpenLiveProjects(!openLiveProjects)}
                />
            </div>
        </div>
    );
}

export default Header;
