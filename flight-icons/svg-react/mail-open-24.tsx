import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMailOpen24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M13 .335a2.75 2.75 0 00-2 0l-8.25 3.22A2.75 2.75 0 001 6.116V18.25A2.75 2.75 0 003.75 21h16.5A2.75 2.75 0 0023 18.25V6.116a2.75 2.75 0 00-1.75-2.561L13 .335zm-1.454 1.397a1.25 1.25 0 01.908 0l8.25 3.22c.48.187.796.65.796 1.164v.134a.746.746 0 00-.4.116l-9.11 5.753L2.5 6.425v-.309c0-.514.316-.977.796-1.164l8.25-3.22zM2.5 8.175v8.264l5.165-5.165-5.165-3.1zm.031 10.354c.127.556.625.971 1.219.971h16.5a1.25 1.25 0 001.219-.97l-6.51-6.511-2.559 1.615a.75.75 0 01-.786.01l-2.623-1.575-6.46 6.46zM21.5 16.44V7.887l-5.242 3.31L21.5 16.44z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
