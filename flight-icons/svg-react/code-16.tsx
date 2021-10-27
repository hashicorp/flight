import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCode16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.424 2.02a.75.75 0 00-.904.556l-2.5 10.5a.75.75 0 001.46.348l2.5-10.5a.75.75 0 00-.556-.904zM11.2 4.24a.75.75 0 011.06-.04l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1L14.148 8 11.24 5.3a.75.75 0 01-.04-1.06zM4.76 5.3a.75.75 0 00-1.02-1.1L.24 7.45a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1L1.852 8 4.76 5.3z" />
                </g>
            </svg>
        );
    }
);
