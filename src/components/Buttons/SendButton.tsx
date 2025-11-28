import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

type Props = {
    onClick?: () => void;
};

function SendButton({ onClick }: Props) {
    return (
        <div className="w-full flex justify-center items-center  cursor-pointer ">
            <button
                onClick={onClick}
                className="flex justify-center items-center cursor-pointer bg-[#4e6a40] text-white py-2 px-4 rounded hover:bg-[#7cbf4a] flex-1 duration-700 "
            >
                <PaperAirplaneIcon className="h-5 w-5 inline-block mr-2 -rotate-20 " />
                Send Message
            </button>
        </div>
    );
}

export default SendButton;
