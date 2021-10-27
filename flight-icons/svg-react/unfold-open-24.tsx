import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconUnfoldOpen24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12 2a.75.75 0 01.543.232l5.25 5.5a.75.75 0 11-1.085 1.036L12 3.836 7.293 8.768a.75.75 0 01-1.086-1.036l5.25-5.5A.75.75 0 0112 2zM12 22a.75.75 0 00.543-.232l5.25-5.5a.75.75 0 00-1.085-1.036L12 20.164l-4.707-4.932a.75.75 0 00-1.086 1.036l5.25 5.5A.75.75 0 0012 22zM1.25 11a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM6.25 11a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM11.25 11a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM16.25 11a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM21.25 11a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
                </g>
            </svg>
        );
    }
);
