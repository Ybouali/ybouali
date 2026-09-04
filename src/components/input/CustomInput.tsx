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
                <span className="text-sm text-owl-purple">const</span>
                <span className="text-sm text-owl-text">{label}</span>
                <span className="text-sm text-owl-text">{'='}</span>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="text-owl-text border border-owl-blue/40 p-2 rounded bg-owl-bg focus:border-owl-cyan focus:outline-none focus:ring-1 focus:ring-owl-cyan transition-all"
            />
        </div>
    );
}

export default CustomInput;
