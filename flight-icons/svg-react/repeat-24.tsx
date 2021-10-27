import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconRepeat24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M17.515.455a.75.75 0 00-1.03 1.09L19.614 4.5H6.75A4.75 4.75 0 002 9.25v2a.75.75 0 001.5 0v-2A3.25 3.25 0 016.75 6h12.864l-3.129 2.955a.75.75 0 001.03 1.09l4.5-4.25a.75.75 0 000-1.09l-4.5-4.25zM8.045 13.985a.75.75 0 01-.03 1.06L4.886 18H17.25a3.25 3.25 0 003.25-3.25v-2a.75.75 0 011.5 0v2a4.75 4.75 0 01-4.75 4.75H4.886l3.129 2.955a.75.75 0 01-1.03 1.09l-4.5-4.25a.75.75 0 010-1.09l4.5-4.25a.75.75 0 011.06.03z" />
                </g>
            </svg>
        );
    }
);
