import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGcp16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M11.87 3.465l-.002-.003a5.935 5.935 0 00-5.586-1.217 5.89 5.89 0 00-3.98 4.092 4.206 4.206 0 00-.149 6.792 4.255 4.255 0 002.558.87h6.52a4.234 4.234 0 004.078-2.961A4.2 4.2 0 0013.637 6.3a5.835 5.835 0 00-1.767-2.835zm-7.828 7.78c.21.095.438.16.67.16l6.518.002c.9 0 1.63-.725 1.63-1.619s-.73-1.619-1.63-1.619v-.323a3.226 3.226 0 00-1.187-2.56h-.002c-1.339-1.078-3.305-.912-4.465.354l-.014.015c.996.2 1.897.751 2.525 1.568L6.198 9.101a1.63 1.63 0 00-3.097.439 1.617 1.617 0 00.942 1.704l-.001.001z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);