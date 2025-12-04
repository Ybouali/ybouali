import { posts } from '../../data/Blogs';
import BlogItem from './BlogItem';

export interface BlogPost {
    title: string;
    blurb: string;
    whyItMatters: string;
    content: string;
    date?: string;
    author?: string;
    tags?: string[];
    imageUrl?: string[];
    avatartUrl?: string;
    codeExample?: string[];
}

type ListBlogsProps = {
    setOpenBlog: (blog: BlogPost) => void;
};

function ListBlogs({ setOpenBlog }: ListBlogsProps) {
    return (
        <div className="flex flex-col gap-6 w-full ">
            {posts.map((blog, index) => (
                <BlogItem
                    key={index}
                    blog={blog}
                    onClick={() => setOpenBlog(blog)}
                />
            ))}
        </div>
    );
}

export default ListBlogs;
