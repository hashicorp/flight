import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconUserCircle24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM9 9a3 3 0 116 0 3 3 0 01-6 0z" />
                    <path d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 2.298.756 4.42 2.034 6.13A4.752 4.752 0 018.25 15h7.5a4.752 4.752 0 014.466 3.13A10.204 10.204 0 0022.25 12c0-5.66-4.59-10.25-10.25-10.25zm0 20.5c-2.702 0-5.16-1.045-6.99-2.753A3.25 3.25 0 018.25 16.5h7.5a3.25 3.25 0 013.24 2.997A10.214 10.214 0 0112 22.25z" />
                </g>
            </svg>
        );
    }
);
