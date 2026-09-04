import { useParams } from 'react-router-dom';
import {
    CodeArrayDisplay,
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import ListBlogs from './ListBlogs';
import BlogDetails from './BlogDetails';
import PageSeo from '../../components/PageSeo';

function Blogs() {
    const { slug } = useParams();

    return (
        <MainForScreen>
            <PageSeo
                title="Writing | Yassine Bouali"
                description="Latest brain dumps — notes from the editor, not a content mill."
                path={slug ? `/blog/${slug}` : '/blog'}
            />
            <div className="w-full">
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="flex flex-col items-start pb-10 gap-4">
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="blog.json"
                            valueTwo={
                                slug
                                    ? 'One brain dump, fully expanded'
                                    : 'Latest brain dumps'
                            }
                        />

                        {slug ? (
                            <BlogDetails />
                        ) : (
                            <>
                                <CodeArrayDisplay variableName="blogs" />
                                <ListBlogs />
                                <span className="text-owl-warning">];</span>
                            </>
                        )}

                        <ExportDefault
                            moduleName={slug ? slug.replace(/-/g, '_') : 'Blogs'}
                        />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Blogs;
