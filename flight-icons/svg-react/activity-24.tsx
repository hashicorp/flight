import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconActivity24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M9.003 2a.75.75 0 01.71.519l5.278 16.27 2.294-7.265A.75.75 0 0118 11h4a.75.75 0 010 1.5h-3.45l-2.835 8.976a.75.75 0 01-1.428.005L8.99 5.151l-2.278 6.836A.75.75 0 016 12.5H2A.75.75 0 012 11h3.46l2.828-8.487A.75.75 0 019.003 2z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
