import { useState } from 'react';
import { MainForScreen } from '../../components';
import Header from './Header';

function Projects() {
    const [openLiveProjects, setOpenLiveProjects] = useState(false);
    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-1 ">
                        <Header
                            openLiveProjects={openLiveProjects}
                            setOpenLiveProjects={setOpenLiveProjects}
                        />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Projects;
