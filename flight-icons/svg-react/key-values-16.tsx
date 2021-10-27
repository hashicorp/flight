import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconKeyValues16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M1.75 2a.75.75 0 000 1.5h1a.75.75 0 000-1.5h-1zM6.75 5.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM1 6.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 011 6.25zM1.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM1 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.75 2a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zM6 9.75A.75.75 0 016.75 9h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 016 9.75zM6.75 12.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" />
                </g>
            </svg>
        );
    }
);
