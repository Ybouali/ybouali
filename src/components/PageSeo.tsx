import { useEffect } from "react";
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

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function PageSeo({ title, description, path }: PageSeoProps) {
  const location = useLocation();
  const canonicalPath = normalizePath(path ?? location.pathname);
  const url = `${SITE_URL}${canonicalPath}`;

  useEffect(() => {
    document.title = title;
    document.head.querySelectorAll("title").forEach((t, i) => {
      if (i > 0) t.remove();
    });

    setMeta("name", "description", description);
    document.head
      .querySelectorAll('meta[name="description"]')
      .forEach((d, i) => {
        if (i > 0) d.remove();
      });

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
  }, [title, description, url]);

  return null;
}

export default PageSeo;
