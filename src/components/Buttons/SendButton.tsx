import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface Props {
    onClick?: () => void;
    label?: string;
    showIcon?: boolean;
    disabled?: boolean;
}

function SendButton({
    onClick,
    label = 'Send Message',
    showIcon = true,
    disabled = false,
}: Props) {
    return (
        <div className="w-full flex justify-center items-center  cursor-pointer ">
            <button
                disabled={disabled}
                onClick={onClick}
                className="flex justify-center items-center cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 flex-1 duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600 transition-all"
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
