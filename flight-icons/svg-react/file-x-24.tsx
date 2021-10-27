import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFileX24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M5.75 2.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h4.5a.75.75 0 010 1.5h-4.5A2.75 2.75 0 013 20.25V3.75A2.75 2.75 0 015.75 1h7.586c.464 0 .909.184 1.237.513l5.914 5.914c.329.328.513.773.513 1.237v3.586a.75.75 0 01-1.5 0V9h-5.75a.75.75 0 01-.75-.75V2.5H5.75zm8.75 1.06l3.94 3.94H14.5V3.56z" />
                    <path d="M14 14a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6zm5.78 3.28a.75.75 0 10-1.06-1.06L17 17.94l-1.72-1.72a.75.75 0 10-1.06 1.06L15.94 19l-1.72 1.72a.75.75 0 101.06 1.06L17 20.06l1.72 1.72a.75.75 0 101.06-1.06L18.06 19l1.72-1.72z" />
                </g>
            </svg>
        );
    }
);
