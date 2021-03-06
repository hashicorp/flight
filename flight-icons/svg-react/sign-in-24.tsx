import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSignIn24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M14.5 2.75a.75.75 0 01.75-.75h4A2.75 2.75 0 0122 4.75v14.5A2.75 2.75 0 0119.25 22h-4a.75.75 0 010-1.5h4c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-4a.75.75 0 01-.75-.75z" />
                    <path d="M9.47 6.22a.75.75 0 011.06 0l5 5a.747.747 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06l3.72-3.72H3A.75.75 0 013 11h10.19L9.47 7.28a.75.75 0 010-1.06z" />
                </g>
            </svg>
        );
    }
);
