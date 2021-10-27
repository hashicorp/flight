import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconWifi24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M1.916 9.31a15.25 15.25 0 0120.168 0 .75.75 0 00.992-1.125 16.75 16.75 0 00-22.152 0 .75.75 0 10.992 1.125z" />
                    <path d="M5.48 12.874a10.25 10.25 0 0113.12 0 .75.75 0 00.96-1.152 11.75 11.75 0 00-15.04 0 .75.75 0 00.96 1.152zM12.005 15.5a5.25 5.25 0 00-3.04.97.75.75 0 01-.87-1.223 6.75 6.75 0 017.82 0 .75.75 0 11-.87 1.223 5.25 5.25 0 00-3.04-.97zM12 19a1 1 0 100 2h.01a1 1 0 100-2H12z" />
                </g>
            </svg>
        );
    }
);
