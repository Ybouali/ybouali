import { useState } from 'react';
import {
    CodeArrayDisplay,
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import ListBlogs, { type BlogPost } from './ListBlogs';
import { motion } from 'framer-motion';

function Blogs() {
    const [openBlog, setOpenBlog] = useState<BlogPost | null>(null);

    return (
        <MainForScreen>
            <div className="w-full">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-3 ">
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="blogs.tsx"
                            valueTwo="Professional blogs and articles"
                        />
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
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-white">
                                    test
                                </h2>
                                <p className="mb-4 text-gray-300">test</p>
                                <button
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                    onClick={() => setOpenBlog(null)}
                                >
                                    Back to Blogs
                                </button>
                            </div>
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
