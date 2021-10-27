import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFiles24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M5.25 1A2.25 2.25 0 003 3.25v11.5A2.25 2.25 0 005.25 17H6v.75A2.25 2.25 0 008.25 20H9v.75A2.25 2.25 0 0011.25 23h8.5A2.25 2.25 0 0022 20.75v-7.879a2.25 2.25 0 00-.659-1.59l-2.31-2.311a.746.746 0 00-.312-.187 2.25 2.25 0 00-.378-.503l-2.31-2.31a.746.746 0 00-.312-.187 2.25 2.25 0 00-.378-.503L11.72 1.66A2.25 2.25 0 0010.129 1H5.25zM4.5 3.25a.75.75 0 01.75-.75H10v3.75c0 .414.336.75.75.75h3.75v7.75a.75.75 0 01-.75.75h-8.5a.75.75 0 01-.75-.75V3.25zm8.94 2.25L11.5 3.56V5.5h1.94zM19 11.06v6.69A2.25 2.25 0 0116.75 20H10.5v.75c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-7.879a.75.75 0 00-.22-.53L19 11.061zM7.5 17.75V17h6.25A2.25 2.25 0 0016 14.75V8.06l1.28 1.281c.141.14.22.331.22.53v7.879a.75.75 0 01-.75.75h-8.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
