import { motion } from 'framer-motion';
import type { CloseProject } from '../CloseProjectsList/index';
import { Card } from '../../../components';

interface ProjectDetailProps {
    project: CloseProject;
}

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const iconVariants = {
    rest: { opacity: 0, x: -5 },
    hover: { opacity: 1, x: 0 },
};

function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <Card className="max-w-2xl mx-auto">
            <motion.div
                // className="bg-[#1e1e1e] text-[#d4d4d4] p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-md mb-4 border border-[#333333]"
                />
                <h2 className="text-2xl font-bold text-white mb-2">
                    {project.name}
                </h2>
                <p className="text-sm text-[#a0a0a0] mb-4">
                    {project.smallDescription}
                </p>
                <div className="mb-4">
                    <span className="font-semibold text-white mr-2">Tags:</span>
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-[#252526] text-[#d4d4d4] px-2 py-1 rounded-md text-xs mr-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <motion.ul
                    className="list-disc pl-5 mb-4"
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {project.details.map((detail, index) => (
                        <motion.li
                            key={index}
                            className="text-sm mb-2 text-purple-400 "
                            variants={itemVariants}
                        >
                            {detail}
                        </motion.li>
                    ))}
                </motion.ul>
                <motion.div className="flex flex-row items-center justify-between  ">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            className="group inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Project
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 ml-2"
                                variants={iconVariants}
                                initial="rest"
                                whileHover="hover"
                                transition={{ duration: 0.2 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </motion.svg>
                        </a>
                    )}
                    <a
                        href={project.projectUrl}
                        className="group inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project on GitHub
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 ml-2"
                            variants={iconVariants}
                            initial="rest"
                            whileHover="hover"
                            transition={{ duration: 0.2 }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </motion.svg>
                    </a>
                </motion.div>
            </motion.div>
        </Card>
    );
}

export default ProjectDetail;
