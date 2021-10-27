import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBeaker24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M6.75 4a.75.75 0 000 1.5h.662l1.441 2.883a.25.25 0 010 .226l-4.657 9.118C3.432 19.224 4.52 21 6.2 21h11.6c1.68 0 2.768-1.776 2.004-3.273l-4.656-9.118a.25.25 0 01-.001-.226L16.588 5.5h.662a.75.75 0 000-1.5H6.75zm8.162 1.5H9.088l1.106 2.213a1.75 1.75 0 01-.007 1.578L8.805 12h6.39l-1.383-2.709a1.75 1.75 0 01-.007-1.578L14.912 5.5zm-9.38 12.909L8.04 13.5h7.922l2.507 4.909A.75.75 0 0117.8 19.5H6.2a.75.75 0 01-.668-1.091z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
