import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTrash24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M9.75 9a.75.75 0 01.75.75v8.5a.75.75 0 01-1.5 0v-8.5A.75.75 0 019.75 9zM15 9.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5z" />
                    <path
                        fillRule="evenodd"
                        d="M7 5V3.75A2.75 2.75 0 019.75 1h4.5A2.75 2.75 0 0117 3.75V5h4.25a.75.75 0 010 1.5H20v13.75A2.75 2.75 0 0117.25 23H6.75A2.75 2.75 0 014 20.25V6.5H2.75a.75.75 0 010-1.5H7zm1.5-1.25c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25V5h-7V3.75zm-3 2.75v13.75c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V6.5h-13z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
