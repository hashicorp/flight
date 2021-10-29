import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconOktaColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#007DC1"
                    d="M12 2C6.49 2 2 6.458 2 12s4.459 10 10 10 10-4.459 10-10S17.51 2 12 2zm0 15c-2.77 0-5-2.23-5-5s2.23-5 5-5 5 2.23 5 5-2.23 5-5 5z"
                />
            </svg>
        );
    }
);
