import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWaypoint24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M6 8.468h2L15 20.6l5-8.666L16 5h-4l4 6.934-1 1.733L10 5H0l9 15.6 2-3.466-5-8.666zM21.003 10.194L24 5h-5.994l2.997 5.194z" />
                </g>
            </svg>
        );
    }
);
