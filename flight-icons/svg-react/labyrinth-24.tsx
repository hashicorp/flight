import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLabyrinth24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill={color}
                    d="M1.694 10.094C2.59 5.216 6.864 1.52 12 1.52c5.45 0 9.929 4.16 10.432 9.479h-2.525a7.977 7.977 0 00-5.63-6.639.75.75 0 10-.428 1.438A6.469 6.469 0 115.55 12.5h2.543c.122.964.593 1.82 1.28 2.435a.75.75 0 101.001-1.118 2.437 2.437 0 113.25 0 .75.75 0 001 1.118A3.938 3.938 0 108.19 11H5.609a6.477 6.477 0 014.543-5.201.75.75 0 10-.427-1.438 7.969 7.969 0 1010.23 8.139h2.513c-.26 5.555-4.847 9.98-10.467 9.98-5.136 0-9.41-3.697-10.306-8.574a.75.75 0 00-1.476.271C1.243 19.754 6.127 23.98 12 23.98c6.616 0 11.98-5.363 11.98-11.98C23.98 5.385 18.615.022 12 .022 6.127.02 1.243 4.246.218 9.823a.75.75 0 101.476.27z"
                />
            </svg>
        );
    }
);
