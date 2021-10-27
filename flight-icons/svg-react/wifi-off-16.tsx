import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconWifiOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M1.22 1.22a.75.75 0 011.06 0l12.5 12.5a.75.75 0 11-1.06 1.06l-3.558-3.557a.749.749 0 01-.276-.122 3.25 3.25 0 00-3.765 0 .75.75 0 01-.869-1.223A4.75 4.75 0 017.94 9L6.198 7.26c-.867.25-1.68.68-2.385 1.266a.75.75 0 01-.96-1.153A8.083 8.083 0 015.02 6.08L3.513 4.573a9.914 9.914 0 00-2.07 1.405.75.75 0 11-.992-1.126c.605-.533 1.26-.997 1.954-1.387L1.22 2.28a.75.75 0 010-1.06zM8 3.5c-.42 0-.837.027-1.25.08a.75.75 0 11-.19-1.489 11.418 11.418 0 018.99 2.761.75.75 0 01-.993 1.126A9.917 9.917 0 008 3.5zM9.794 6.427a.75.75 0 01.959-.453A8.083 8.083 0 0113.2 7.372a.75.75 0 11-.96 1.153 6.583 6.583 0 00-1.993-1.14.75.75 0 01-.453-.958z" />
                    <path d="M8 12a1 1 0 100 2h.007a1 1 0 100-2H8z" />
                </g>
            </svg>
        );
    }
);
