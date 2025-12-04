import { motion } from 'framer-motion';
import { Card } from '../../components';
import type { BlogPost } from './ListBlogs';

interface BlogItemProps {
    blog: BlogPost;
    onClick: (blog: BlogPost) => void;
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

function BlogItem({ blog, onClick }: BlogItemProps) {
    return (
        <Card
            onClick={() => onClick(blog)}
            className="flex items-center cursor-pointer"
        >
            <motion.div
                variants={parentVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group flex items-center gap-4 cursor-pointer transition-colors duration-700 ease-in-out  w-full "
            >
                <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-20 h-20 object-cover rounded border border-[#333333]"
                />
                <div>
                    <h3 className="m-0 text-lg font-bold text-white">
                        {blog.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#a0a0a0]">{blog.blurb}</p>
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

export default BlogItem;
