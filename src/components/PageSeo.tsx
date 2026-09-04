import { Helmet } from 'react-helmet-async';

type PageSeoProps = {
    title: string;
    description: string;
    path?: string;
};

function PageSeo({ title, description, path = '/' }: PageSeoProps) {
    const url = `https://ybouali.dev${path}`;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
        </Helmet>
    );
}

export default PageSeo;
