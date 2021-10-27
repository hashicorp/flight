import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSortDesc24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M3 5.75A.75.75 0 013.75 5h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75zM3.75 9a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zM16.963 20.443a.747.747 0 00.817-.163l4-4a.75.75 0 10-1.06-1.06L18 17.94V9.75a.75.75 0 00-1.5 0v8.19l-2.72-2.72a.75.75 0 10-1.06 1.06l4 4a.748.748 0 00.243.163zM3.75 13a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM3 17.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" />
                </g>
            </svg>
        );
    }
);
