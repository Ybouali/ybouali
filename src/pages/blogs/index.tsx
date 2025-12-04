import { useState } from 'react';
import {
    CodeArrayDisplay,
    ExportDefault,
    MainForScreen,
} from '../../components';
import ListBlogs, { type BlogPost } from './ListBlogs';
import { motion } from 'framer-motion';
import Header from './Header';
import BlogDetails from './BlogDetails';

function Blogs() {
    const [openBlog, setOpenBlog] = useState<BlogPost | null>(null);

    return (
        <MainForScreen>
            <div className="w-full">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-3 ">
                        <Header openBlog={openBlog} setOpenBlog={setOpenBlog} />

                        <CodeArrayDisplay variableName={'blogs'} />

                        {openBlog === null ? (
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
                                <ListBlogs setOpenBlog={setOpenBlog} />
                            </motion.div>
                        ) : (
                            <BlogDetails {...openBlog} />
                        )}

                        <span className="text-yellow-600">];</span>

                        <ExportDefault moduleName="Blogs" />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Blogs;
