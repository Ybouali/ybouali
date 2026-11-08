import { Link } from "react-router-dom";
import type { IconType } from "../../types";

type Props = {
  icon: IconType;
  label: string;
  url?: string;
  to?: string;
  isDownload?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};
function ButtonSocialMediaTwo({ icon: Icon, label, url, to, onClick }: Props) {
  const content = (
    <>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-owl-surface transition-all duration-500 group-hover:bg-owl-blue group-hover:scale-110">
        <Icon className="h-7 w-7 text-owl-text-muted group-hover:text-owl-bg" />
      </div>

      <span className="text-sm font-semibold">{label}</span>
    </>
  );

  const className =
    "group flex flex-row w-[200px] items-center gap-2.5 justify-start rounded-md bg-owl-bg border border-owl-border px-4 py-2 text-owl-text transition-all duration-500 hover:border-owl-blue hover:text-owl-cyan cursor-pointer";

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}

export default ButtonSocialMediaTwo;
