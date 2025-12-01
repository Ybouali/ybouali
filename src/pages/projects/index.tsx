import { useState } from 'react';
import {
    CodeArrayDisplay,
    ExportDefault,
    ImportDisplay,
    MainForScreen,
} from '../../components';
import Header from './Header';
import CloseProjectsList from './CloseProjectsList';
import LiveProjectsList from './LiveProjectsList/LiveProjectsList';
import { AnimatePresence, motion } from 'framer-motion';

function Projects() {
    const [openLiveProjects, setOpenLiveProjects] = useState(false);

    const [openCloseProjects, setOpenCloseProjects] = useState<number | null>(
        null
    );

    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-1 ">
                        <Header
                            openLiveProjects={openLiveProjects}
                            setOpenLiveProjects={setOpenLiveProjects}
                        />
                        {openCloseProjects !== null && (
                            <ImportDisplay
                                imports={['Name of the Project']}
                                fromPath={'./CloseProjectsList'}
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
                                        <LiveProjectsList />
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
                        ) : null}

                        {openCloseProjects === null && (
                            <span className="text-yellow-600">];</span>
                        )}
                        <br />
                        <ExportDefault
                            moduleName={
                                openCloseProjects !== null
                                    ? 'Name of the Project'
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
