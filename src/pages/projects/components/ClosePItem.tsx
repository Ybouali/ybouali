import { motion } from 'framer-motion';
import type { CloseProject } from '../CloseProjectsList';
import { Card } from '../../../components';

interface ClosePItemProps {
    project: CloseProject;
    onClick: (project: CloseProject) => void;
}

const parentVariants = {
    rest: {
        transition: { staggerChildren: 0.1 },
    },
    hover: {
        transition: { staggerChildren: 0.1 },
    },
};

const iconVariants = {
    rest: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 0 },
};

function ClosePItem({ project, onClick }: ClosePItemProps) {
    return (
        <Card
            onClick={() => onClick(project)}
            className="flex items-center cursor-pointer"
        >
            <motion.div
                variants={parentVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
            className="group flex items-center gap-4 cursor-pointer transition-colors duration-700 ease-in-out w-full"
            >
                <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded border border-[#333333] shrink-0 bg-black/20"
                />
                <div className="min-w-0 flex-1">
                    <h3 className="m-0 text-base md:text-lg font-bold text-white truncate">
                        {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#a0a0a0] line-clamp-2 md:line-clamp-none">
                        {project.smallDescription}
                    </p>
                </div>
                <motion.div
                    className="ml-auto"
                    variants={iconVariants}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#d4d4d4"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </Card>
    );
}

export default ClosePItem;
