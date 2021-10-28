import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMicOff24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M9.184 1.118A4.077 4.077 0 0112 0c1.05 0 2.064.399 2.816 1.118A3.79 3.79 0 0116 3.858v6.5a.75.75 0 11-1.5 0v-6.5a2.29 2.29 0 00-.72-1.656A2.578 2.578 0 0012 1.5c-.674 0-1.313.256-1.78.702a2.29 2.29 0 00-.72 1.655.75.75 0 11-1.5 0 3.79 3.79 0 011.184-2.739z" />
                    <path
                        fillRule="evenodd"
                        d="M12 16c.81 0 1.6-.237 2.263-.676l1.66 1.66A6.671 6.671 0 0112 18.25a6.633 6.633 0 01-4.606-1.84A6.13 6.13 0 015.5 12v-2A.75.75 0 004 10v2a7.63 7.63 0 002.353 5.49 8.112 8.112 0 004.897 2.226V22H8a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-3.25v-2.284a8.145 8.145 0 004.244-1.661l4.726 4.725a.75.75 0 101.06-1.06L2.28 1.22a.75.75 0 00-1.06 1.06L8 9.06v3.083a3.79 3.79 0 001.184 2.739A4.077 4.077 0 0012 16zm-2.5-3.857V10.56l3.667 3.666A2.62 2.62 0 0112 14.5a2.578 2.578 0 01-1.78-.702 2.29 2.29 0 01-.72-1.655z"
                        clipRule="evenodd"
                    />
                    <path d="M20 10a.75.75 0 00-1.5 0v2c0 .552-.076 1.097-.222 1.62a.75.75 0 001.444.404A7.522 7.522 0 0020 12v-2z" />
                </g>
            </svg>
        );
    }
);
