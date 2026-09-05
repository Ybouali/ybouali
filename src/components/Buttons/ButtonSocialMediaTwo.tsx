
import type { IconType } from '../../types';



type Props = {
    icon: IconType;
    label: string;
    url?: string;
    isDownload?: boolean;
    onClick?: (e: React.MouseEvent) => void;
};
function ButtonSocialMediaTwo({
    icon: Icon,
    label,
    url,
    onClick,
}: Props) {

    return (
        <div
            onClick={(e) => {
                if (onClick) {
                    onClick(e);
                } else if (url) {
                    window.open(url, '_blank', 'noopener,noreferrer');
                }
            }}
            className="group  flex flex-row w-[200px] items-center gap-2.5 justify-start rounded-md bg-owl-bg border border-owl-border px-4 py-2 text-owl-text transition-all duration-500 hover:border-owl-blue hover:text-owl-cyan cursor-pointer "
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-owl-surface transition-all duration-500 group-hover:bg-owl-blue group-hover:scale-110">
                <Icon className="h-7 w-7 text-owl-text-muted group-hover:text-owl-bg" />
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (onClick) {
                        onClick(e);
                    } else if (url) {
                        window.open(url, '_blank', 'noopener,noreferrer');
                    }
                }}
                className=" text-sm font-semibold cursor-pointer "
            >
                {label}
            </button>
        </div>
    );
}

export default ButtonSocialMediaTwo;
