import type { IconType } from '../../types';

type Props = {
    icon: IconType;
    label: string;
    url: string;
};
function ButtonSocialMediaTwo({ icon: Icon, label, url }: Props) {
    return (
        <div className="group  flex flex-row w-[200px] items-center gap-2.5 justify-start rounded-md bg-[#3c3c3c] px-4 py-2 text-gray-300 transition-all duration-700 hover:bg-[#0A66C2] hover:text-white">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3c3c3c] transition-all duration-700 group-hover:bg-[#0A66C2] group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#0A66C2]/50">
                <Icon className="h-7 w-7 text-gray-400 group-hover:text-white" />
            </div>

            <button
                onClick={() =>
                    window.open(url, '_blank', 'noopener,noreferrer')
                }
                className=" text-sm font-semibold "
            >
                {label}
            </button>
        </div>
    );
}

export default ButtonSocialMediaTwo;
