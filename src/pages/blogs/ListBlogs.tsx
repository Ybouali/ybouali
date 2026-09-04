import { blogs } from '../../data/blog';
import BlogItem from './BlogItem';

function ListBlogs() {
    return (
        <div className="flex flex-col gap-4 w-full">
            {blogs.map((post) => (
                <BlogItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default ListBlogs;
