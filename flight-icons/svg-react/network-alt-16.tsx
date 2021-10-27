import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconNetworkAlt16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M16 8a.75.75 0 00-.22-.53l-3.5-3.5a.75.75 0 10-1.06 1.06L14.19 8l-2.97 2.97a.75.75 0 101.06 1.06l3.5-3.5A.75.75 0 0016 8zM.22 8.53a.75.75 0 010-1.06l3.5-3.5a.75.75 0 011.06 1.06L1.81 8l2.97 2.97a.75.75 0 11-1.06 1.06l-3.5-3.5z" />
                    <path d="M5 7a1 1 0 000 2h.01a1 1 0 100-2H5zM7 8a1 1 0 011-1h.01a1 1 0 010 2H8a1 1 0 01-1-1zM11 7a1 1 0 100 2h.01a1 1 0 100-2H11z" />
                </g>
            </svg>
        );
    }
);
