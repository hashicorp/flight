import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconType24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M3 3.75A.75.75 0 013.75 3h16a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V4.5h-6.5v15h2a.75.75 0 010 1.5H9a.75.75 0 010-1.5h2v-15H4.5v1.75a.75.75 0 01-1.5 0v-2.5z"
                />
            </svg>
        );
    }
);
