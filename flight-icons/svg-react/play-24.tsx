import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPlay24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M4 4.814C4 3.436 5.52 2.6 6.684 3.334l11.378 7.186a1.75 1.75 0 010 2.96L6.684 20.665C5.52 21.401 4 20.564 4 19.185V4.816zm1.883-.211a.25.25 0 00-.383.211v14.372a.25.25 0 00.383.211l11.378-7.186a.25.25 0 000-.422L5.884 4.603z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
