import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHistory16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M1.5 1.25a.75.75 0 011.5 0v1.851A7 7 0 111 8a.75.75 0 011.5 0 5.5 5.5 0 101.725-4H5.75a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-3.5z" />
                    <path d="M8.25 4a.75.75 0 01.75.75v3.763l1.805.802a.75.75 0 01-.61 1.37l-2.25-1A.75.75 0 017.5 9V4.75A.75.75 0 018.25 4z" />
                </g>
            </svg>
        );
    }
);
