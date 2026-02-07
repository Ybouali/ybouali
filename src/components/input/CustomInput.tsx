type Props = {
    label: string;
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CustomInput({ label, placeholder, value, type, onChange }: Props) {
    return (
        <div className="flex flex-col w-full gap-1  ">
            <div className="flex flex-row gap-2">
                <span className="text-sm text-purple-400">const</span>
                <span className="text-sm text-white">{label}</span>
                <span className="text-sm text-white">{'='}</span>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id="custom-input"
                className=" text-white border border-indigo-500/50 p-2 rounded bg-[#252526] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
            />
        </div>
    );
}

export default CustomInput;
