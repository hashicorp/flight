import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconClock24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12.5 5.75a.75.75 0 00-1.5 0V12c0 .284.16.544.415.67l4.5 2.25a.75.75 0 10.67-1.34L12.5 11.536V5.75z" />
                    <path
                        fillRule="evenodd"
                        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
