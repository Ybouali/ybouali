import { DeveloperInfo, SendButton } from '../../components';
import type { BlogPost } from './ListBlogs';

interface HeaderProps {
    openBlog: BlogPost | null;
    setOpenBlog: (blog: BlogPost | null) => void;
}

function Header({ openBlog, setOpenBlog }: HeaderProps) {
    return (
        <div className="relative flex flex-row w-full  items-center justify-between gap-3">
            <DeveloperInfo
                labelOne="from"
                labelTwo="description"
                valueOne={openBlog !== null ? 'BlogDetails.tsx' : 'Blogs.tsx'}
                valueTwo={
                    openBlog !== null
                        ? `${openBlog.title}`
                        : 'Professional blogs and articles'
                }
            />
            <div className=" absolute top-0 right-0 ">
                <SendButton
                    label={openBlog !== null ? 'Back to Blogs' : 'Blogs'}
                    showIcon={false}
                    onClick={() => {
                        setOpenBlog(null);
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
