import { useState } from 'react';
import {
    CodeArrayDisplay,
    ExportDefault,
    ImportDisplay,
    MainForScreen,
} from '../../components';
import Header from './Header';
import CloseProjectsList, { type CloseProject } from './CloseProjectsList';
import LiveProjectsList from './LiveProjectsList';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectDetail from './components/ProjectDetails';

function Projects() {
    const [openLiveProjects, setOpenLiveProjects] = useState(false);

    const [openCloseProjects, setOpenCloseProjects] =
        useState<CloseProject | null>(null);

    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-1 ">
                        <Header
                            setOpenCloseProjects={setOpenCloseProjects}
                            openLiveProjects={openLiveProjects}
                            openCloseProjects={openCloseProjects}
                            setOpenLiveProjects={(value) => {
                                if (openCloseProjects !== null) {
                                    setOpenCloseProjects(null);
                                } else {
                                    setOpenLiveProjects(value);
                                }
                            }}
                        />
                        {openCloseProjects !== null && (
                            <ImportDisplay
                                imports={[
                                    `${openCloseProjects.name
                                        .split(' ')
                                        .join('_')}`,
                                ]}
                                fromPath={
                                    openLiveProjects
                                        ? './LiveProjectsList'
                                        : './CloseProjectsList'
                                }
                            />
                        )}

                        {openCloseProjects === null && (
                            <CodeArrayDisplay
                                variableName={
                                    openLiveProjects
                                        ? 'liveProjects'
                                        : 'closeProjects'
                                }
                            />
                        )}
                        {openCloseProjects === null ? (
                            <AnimatePresence mode="wait">
                                {openLiveProjects ? (
                                    <motion.div
                                        key="live"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <LiveProjectsList
                                            onProjectClick={
                                                setOpenCloseProjects
                                            }
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <CloseProjectsList
                                            onProjectClick={
                                                setOpenCloseProjects
                                            }
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        ) : (
                            <ProjectDetail project={openCloseProjects} />
                        )}

                        {openCloseProjects === null && (
                            <span className="text-yellow-600">];</span>
                        )}
                        <br />
                        <ExportDefault
                            moduleName={
                                openCloseProjects !== null
                                    ? `${openCloseProjects.name
                                          .split(' ')
                                          .join('_')}`
                                    : openLiveProjects
                                    ? 'LiveProjectsList'
                                    : 'CloseProjectsList'
                            }
                        />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Projects;
