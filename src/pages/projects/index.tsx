import { useState } from 'react';
import { ImportDisplay, MainForScreen } from '../../components';
import Header from './Header';
import CloseProjectsList from './CloseProjectsList';
import LiveProjectsList from './LiveProjectsList';

function Projects() {
    const [openLiveProjects, setOpenLiveProjects] = useState(false);
    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto w-5/6 ">
                    <div className="flex flex-col items-start pb-20 gap-1 ">
                        <Header
                            openLiveProjects={openLiveProjects}
                            setOpenLiveProjects={setOpenLiveProjects}
                        />
                        <ImportDisplay
                            imports={['LiveProjectsList', 'CloseProjectsList']}
                            fromPath="./projects"
                        />
                        {openLiveProjects ? (
                            <LiveProjectsList />
                        ) : (
                            <CloseProjectsList />
                        )}
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Projects;
