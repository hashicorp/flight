import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFilm24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M3.75 1A2.75 2.75 0 001 3.75v16.5A2.75 2.75 0 003.75 23h16.5A2.75 2.75 0 0023 20.25V3.75A2.75 2.75 0 0020.25 1H3.75zM21.5 6V3.75c0-.69-.56-1.25-1.25-1.25H18V6h3.5zM18 7.5h3.5V11H18V7.5zm-1.5-5h-9V11h9V2.5zm5 10V16H18v-3.5h3.5zm0 5H18v4h2.25c.69 0 1.25-.56 1.25-1.25V17.5zm-5-5v9h-9v-9h9zm-14 5v2.75c0 .69.56 1.25 1.25 1.25H6v-4H2.5zM6 16H2.5v-3.5H6V16zm-3.5-5V7.5H6V11H2.5zm0-5H6V2.5H3.75c-.69 0-1.25.56-1.25 1.25V6z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
