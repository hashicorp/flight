import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSortAsc16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                    <path d="M15.78 5.72a.75.75 0 01-1.06 1.06L13 5.06v4.69a.75.75 0 01-1.5 0V5.06L9.78 6.78a.75.75 0 01-1.06-1.06l3-3a.748.748 0 01.528-.22h.004a.748.748 0 01.528.22l3 3zM3 10.5A.75.75 0 013 9h6a.75.75 0 010 1.5H3zM2.25 12.75c0 .414.336.75.75.75h10a.75.75 0 000-1.5H3a.75.75 0 00-.75.75zM3 7.5A.75.75 0 013 6h3a.75.75 0 010 1.5H3zM2.25 3.75c0 .414.336.75.75.75h3A.75.75 0 006 3H3a.75.75 0 00-.75.75z" />
                </g>
            </svg>
        );
    }
);
