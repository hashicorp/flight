import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconUnlock16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    d="M10.239 2.25A2.46 2.46 0 0112 1.5c.657 0 1.29.267 1.761.75.471.483.739 1.142.739 1.833a.75.75 0 001.5 0 4.127 4.127 0 00-1.165-2.88A3.96 3.96 0 0012 0a3.96 3.96 0 00-2.835 1.203A4.127 4.127 0 008 4.083V5H2.25A2.25 2.25 0 000 7.25v5.5A2.25 2.25 0 002.25 15h7.5A2.25 2.25 0 0012 12.75v-5.5A2.25 2.25 0 009.75 5H9.5v-.917c0-.69.268-1.35.739-1.833zm-8.739 5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v5.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-5.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
