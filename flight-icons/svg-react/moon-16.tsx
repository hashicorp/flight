import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMoon16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M8.09 1.382a.75.75 0 01-.05.814 4.121 4.121 0 005.764 5.764.75.75 0 011.193.672 7.014 7.014 0 11-7.63-7.629.75.75 0 01.723.379zm-2.06 1.46a5.513 5.513 0 107.128 7.128A5.621 5.621 0 016.03 2.843z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
