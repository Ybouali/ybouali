import { whoIAm } from '../../../data/who-i-am';

export function CurrentFocus() {
    return (
        <div className="flex flex-col gap-4 w-full mt-4 max-w-[1200px] mx-auto">
            <span className="font-mono text-xs md:text-sm text-owl-comment uppercase tracking-widest">
                {'// CURRENTLY EXPLORING'}
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
                {whoIAm.currentFocus.map((focus) => (
                    <span
                        key={focus}
                        className="px-4 py-1.5 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border text-owl-text font-mono text-sm rounded-full transition-colors cursor-default"
                    >
                        {focus}
                    </span>
                ))}
            </div>
        </div>
    );
}
