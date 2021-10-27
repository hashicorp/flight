import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAlertOctagonFill16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M3.882.805A2.75 2.75 0 015.827 0h4.346c.73 0 1.429.29 1.945.805l3.076 3.077A2.75 2.75 0 0116 5.827v4.346c0 .73-.29 1.429-.806 1.945l-3.076 3.076a2.75 2.75 0 01-1.945.806H5.827a2.75 2.75 0 01-1.945-.806L.805 12.118A2.75 2.75 0 010 10.173V5.827c0-.73.29-1.429.805-1.945L3.882.805zM7 11a1 1 0 011-1h.007a1 1 0 110 2H8a1 1 0 01-1-1zm1.75-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
