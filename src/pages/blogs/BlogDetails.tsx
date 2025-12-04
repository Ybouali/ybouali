import { motion } from 'framer-motion';
import type { BlogPost } from './ListBlogs';
import { Card } from '../../components';

function BlogDetails({
    title,
    date,
    blurb,
    whyItMatters,
    content,
    tags,
    imageUrl,
    codeExample,
}: BlogPost) {
    return (
        <Card>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {imageUrl && (
                    <motion.img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-64 object-cover rounded-t-lg mb-4"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
                <header className="mb-4">
                    <motion.h1
                        className="text-3xl font-bold text-blue-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        {title}
                    </motion.h1>
                    {date && (
                        <p className="text-sm text-gray-400 mt-1">
                            Posted on {date}
                        </p>
                    )}
                </header>
                <section className="mb-4">
                    <p className="text-lg text-gray-300 italic">{blurb}</p>
                </section>
                <section className="mb-4">
                    <h2 className="text-xl font-semibold text-green-400 mb-2">
                        Why It Matters
                    </h2>
                    <p className="text-gray-200">{whyItMatters}</p>
                </section>
                <section className="mb-4">
                    <h2 className="text-xl font-semibold text-purple-400 mb-2">
                        Full Content
                    </h2>
                    <p className="text-gray-100">{content}</p>
                    {codeExample && (
                        <>
                            <br />
                            <h2 className="text-xl font-semibold text-purple-400 mb-2">
                                Code Example
                            </h2>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="bg-gray-800 p-1 my-2 rounded-md overflow-x-auto"
                            >
                                <pre className="text-sm font-mono text-blue-600 ">
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: codeExample
                                                .join('\n')
                                                .replace(
                                                    /\$(.+?)\$/g,
                                                    '<span class="text-blue-400">$1</span>'
                                                ),
                                        }}
                                    />
                                </pre>
                            </motion.div>
                        </>
                    )}
                </section>
                {tags && tags.length > 0 && (
                    <footer className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-400">Tags:</span>
                        {tags.map((tag, index) => (
                            <motion.span
                                key={index}
                                className="px-3 py-1 bg-gray-800 text-cyan-300 rounded-full text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.3,
                                }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </footer>
                )}
            </motion.article>
        </Card>
    );
}

export default BlogDetails;
