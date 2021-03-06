import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSyncReverse16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 1.5A6.5 6.5 0 0114.5 8 .75.75 0 0016 8 8 8 0 002.5 2.19v-.94a.75.75 0 00-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 000-1.5H3.31A6.479 6.479 0 018 1.5zM.75 7.25A.75.75 0 000 8a8 8 0 0013.5 5.81v.94a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75h-3a.75.75 0 000 1.5h1.44A6.5 6.5 0 011.5 8a.75.75 0 00-.75-.75z" />
                </g>
            </svg>
        );
    }
);
