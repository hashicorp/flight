import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSignOut16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M6.5 1.75A.75.75 0 005.75 1h-2.5A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h2.5a.75.75 0 000-1.5h-2.5a.75.75 0 01-.75-.75v-9.5a.75.75 0 01.75-.75h2.5a.75.75 0 00.75-.75z" />
                    <path d="M9.97 3.72a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H6A.75.75 0 016 7h6.19L9.97 4.78a.75.75 0 010-1.06z" />
                </g>
            </svg>
        );
    }
);
