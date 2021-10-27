import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconRandom24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM11 12a1 1 0 112 0 1 1 0 01-2 0zM5 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-1a1 1 0 100 2 1 1 0 000-2zM16.5 14a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-1 2.5a1 1 0 112 0 1 1 0 01-2 0z" />
                    <path d="M4.75 2A2.75 2.75 0 002 4.75v14.5A2.75 2.75 0 004.75 22h14.5A2.75 2.75 0 0022 19.25V4.75A2.75 2.75 0 0019.25 2H4.75zM3.5 4.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v14.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25V4.75z" />
                </g>
            </svg>
        );
    }
);
