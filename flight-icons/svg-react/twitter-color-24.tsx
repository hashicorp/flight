import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTwitterColor24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    fill="#1D9BF0"
                    d="M20.748 7.512c.013.194.013.388.013.584 0 5.964-4.54 12.842-12.842 12.842v-.003A12.777 12.777 0 011 18.91a9.063 9.063 0 006.68-1.87 4.52 4.52 0 01-4.217-3.135 4.5 4.5 0 002.038-.078 4.514 4.514 0 01-3.62-4.424v-.057c.627.35 1.33.543 2.048.565a4.52 4.52 0 01-1.397-6.027 12.81 12.81 0 009.302 4.716 4.518 4.518 0 017.692-4.117c1.01-.2 1.98-.57 2.866-1.096a4.53 4.53 0 01-1.984 2.497A8.977 8.977 0 0023 5.174a9.169 9.169 0 01-2.252 2.338z"
                />
            </svg>
        );
    }
);
