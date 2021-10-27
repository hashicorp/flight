import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconUserCircle16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M8 3a3 3 0 100 6 3 3 0 000-6zM6.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    <path d="M.25 8a7.75 7.75 0 1115.5 0A7.75 7.75 0 01.25 8zM8 1.75a6.25 6.25 0 00-5.274 9.604c.15-.194.325-.369.514-.533C3.855 10.286 4.67 10 5.5 10h5c.83 0 1.645.286 2.26.82.189.165.365.34.514.534A6.25 6.25 0 008 1.75zm0 12.5a6.228 6.228 0 01-4.238-1.656c.035-.196.153-.372.462-.641.323-.281.78-.453 1.276-.453h5c.495 0 .953.172 1.276.453.31.269.427.445.462.641A6.228 6.228 0 018 14.25z" />
                </g>
            </svg>
        );
    }
);
