import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.ybouali.dev";

type PageSeoProps = {
  title: string;
  description: string;
  path?: string;
};

function normalizePath(path: string): string {
  if (!path) return "/";
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return withLeading === "/" ? "/" : withLeading.replace(/\/+$/, "");
}

function PageSeo({ title, description, path }: PageSeoProps) {
  const location = useLocation();
  const canonicalPath = normalizePath(path ?? location.pathname);
  const url = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default PageSeo;
