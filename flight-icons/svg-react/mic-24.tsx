import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMic24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M12 0c-1.05 0-2.064.399-2.816 1.118A3.79 3.79 0 008 3.858v8.285a3.79 3.79 0 001.184 2.739A4.077 4.077 0 0012 16c1.05 0 2.064-.399 2.816-1.118A3.79 3.79 0 0016 12.142V3.858a3.79 3.79 0 00-1.184-2.739A4.077 4.077 0 0012 0zm-1.78 2.202A2.578 2.578 0 0112 1.5c.674 0 1.313.256 1.78.702a2.29 2.29 0 01.72 1.655v8.286a2.29 2.29 0 01-.72 1.655A2.578 2.578 0 0112 14.5a2.578 2.578 0 01-1.78-.702 2.29 2.29 0 01-.72-1.655V3.857c0-.614.255-1.21.72-1.655z"
                        clipRule="evenodd"
                    />
                    <path d="M5.5 10A.75.75 0 004 10v2a7.63 7.63 0 002.353 5.49 8.112 8.112 0 004.897 2.226V22H8a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-3.25v-2.284a8.112 8.112 0 004.898-2.227A7.63 7.63 0 0020 12v-2a.75.75 0 00-1.5 0v2a6.13 6.13 0 01-1.894 4.41A6.634 6.634 0 0112 18.25a6.633 6.633 0 01-4.606-1.84A6.13 6.13 0 015.5 12v-2z" />
                </g>
            </svg>
        );
    }
);
