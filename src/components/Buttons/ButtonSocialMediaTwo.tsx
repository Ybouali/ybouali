import type { IconType } from '../../types';

import myCv from '/assets/cv/Yassine_Bouali_CV.pdf';

type Props = {
    icon: IconType;
    label: string;
    url: string;
    isDownload?: boolean;
};
function ButtonSocialMediaTwo({
    icon: Icon,
    label,
    url,
    isDownload = false,
}: Props) {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = myCv;
        link.download = 'Yassine_Bouali_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div
            onClick={() => {
                if (isDownload) {
                    downloadCV();
                } else {
                    window.open(url, '_blank', 'noopener,noreferrer');
                }
            }}
            className="group  flex flex-row w-[200px] items-center gap-2.5 justify-start rounded-md bg-owl-bg border border-owl-border px-4 py-2 text-owl-text transition-all duration-500 hover:border-owl-blue hover:text-owl-cyan cursor-pointer "
        >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-owl-surface transition-all duration-500 group-hover:bg-owl-blue group-hover:scale-110">
                <Icon className="h-7 w-7 text-owl-text-muted group-hover:text-owl-bg" />
            </div>

            <button
                onClick={() => {
                    if (isDownload) {
                        downloadCV();
                    } else {
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
