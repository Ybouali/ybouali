interface HeaderProps {
    openLiveProjects: boolean;
    setOpenLiveProjects: (open: boolean) => void;
}

import { DeveloperInfo, SendButton } from '../../components';

function Header({ openLiveProjects, setOpenLiveProjects }: HeaderProps) {
    return (
        <div className="relative flex flex-row  items-center justify-between gap-3">
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
                        openLiveProjects ? 'Live Projects' : 'Close Projects'
                    }
                    showIcon={false}
                    onClick={() => setOpenLiveProjects(!openLiveProjects)}
                />
            </div>
        </div>
    );
}

export default Header;
