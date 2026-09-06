import MarkdownBody from '../../../components/MarkdownBody';

type ArticleContentProps = {
    content: string;
};

function ArticleContent({ content }: ArticleContentProps) {
    return (
        <article className="article-body min-w-0">
            <MarkdownBody content={content} />
        </article>
    );
}

export default ArticleContent;
