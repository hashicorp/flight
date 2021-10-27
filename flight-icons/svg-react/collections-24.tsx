import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCollections24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M5 6.75A.75.75 0 015.75 6h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 015 6.75zM5.75 9a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
                    <path
                        fillRule="evenodd"
                        d="M1 4.75A2.75 2.75 0 013.75 2h10.5c.854 0 1.617.39 2.121 1h.879c.854 0 1.617.39 2.121 1h.879A2.75 2.75 0 0123 6.75v10.5A2.75 2.75 0 0120.25 20h-.879c-.504.61-1.267 1-2.121 1h-.879c-.504.61-1.267 1-2.121 1H3.75A2.75 2.75 0 011 19.25V4.75zM19.989 18.5h.261c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25h-.261c.007.082.011.166.011.25v12.5c0 .084-.004.168-.011.25zM17 4.75c0-.084-.004-.168-.011-.25h.261c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25h-.261c.007-.082.011-.166.011-.25V4.75zM3.75 3.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H3.75z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
