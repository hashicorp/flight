import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSearch16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M7.25 2a5.25 5.25 0 103.144 9.455l2.326 2.325a.75.75 0 101.06-1.06l-2.325-2.326A5.25 5.25 0 007.25 2zM3.5 7.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
