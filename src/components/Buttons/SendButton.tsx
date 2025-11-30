import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Props {
    onClick?: () => void;
    label?: string;
    showIcon?: boolean;
}

function SendButton({
    onClick,
    label = 'Send Message',
    showIcon = true,
}: Props) {
    return (
        <div className="w-full flex justify-center items-center  cursor-pointer ">
            <button
                onClick={onClick}
                className="flex justify-center items-center cursor-pointer bg-[#4e6a40] text-white py-2 px-4 rounded hover:bg-[#7cbf4a] flex-1 duration-700 "
            >
                {showIcon && (
                    <PaperAirplaneIcon className="h-5 w-5 inline-block mr-2 -rotate-20 " />
                )}
                {label}
            </button>
        </div>
    );
}

export default SendButton;
