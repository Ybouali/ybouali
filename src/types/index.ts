import type { SVGProps } from 'react';

type Page = {
    page_name: string;
    selected: boolean;
    icon_name: string;
    description: string;
};

type IconType = React.FC<
    SVGProps<SVGSVGElement> & {
        className?: string;
        width?: number;
        height?: number;
    }
>;

export type { Page, IconType };
