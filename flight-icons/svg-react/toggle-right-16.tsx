import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconToggleRight16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M13 8a2 2 0 10-4 0 2 2 0 004 0z" />
                    <path
                        fillRule="evenodd"
                        d="M11 3a5 5 0 010 10H5A5 5 0 015 3h6zm3.5 5A3.5 3.5 0 0011 4.5H5a3.5 3.5 0 100 7h6A3.5 3.5 0 0014.5 8z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
