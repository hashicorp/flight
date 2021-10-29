import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconOctagon16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M3.923.659A2.25 2.25 0 015.514 0h4.972c.597 0 1.169.237 1.59.659l3.265 3.264c.422.422.659.994.659 1.591v4.972a2.25 2.25 0 01-.659 1.59l-3.264 3.265a2.25 2.25 0 01-1.591.659H5.514a2.25 2.25 0 01-1.59-.659L.658 12.077A2.25 2.25 0 010 10.486V5.514c0-.597.237-1.169.659-1.59L3.923.658zm1.591.841a.75.75 0 00-.53.22L1.72 4.984a.75.75 0 00-.22.53v4.972c0 .199.079.39.22.53l3.264 3.264c.14.141.331.22.53.22h4.972a.75.75 0 00.53-.22l3.264-3.264a.75.75 0 00.22-.53V5.514a.75.75 0 00-.22-.53L11.016 1.72a.75.75 0 00-.53-.22H5.514z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);