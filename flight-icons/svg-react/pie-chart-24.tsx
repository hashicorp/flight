import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconPieChart24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M11.75 1a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75A11.25 11.25 0 0011.75 1zm.75 10.5V2.529a9.751 9.751 0 018.971 8.971H12.5z"
                        clipRule="evenodd"
                    />
                    <path d="M8.08 3.344a.75.75 0 10-.62-1.366A11.002 11.002 0 001 12c0 6.075 4.925 11 11 11 4.457 0 8.294-2.65 10.022-6.46a.75.75 0 00-1.366-.619A9.502 9.502 0 0112 21.501 9.5 9.5 0 012.5 12a9.502 9.502 0 015.58-8.657z" />
                </g>
            </svg>
        );
    }
);
