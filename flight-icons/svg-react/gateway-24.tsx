import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGateway24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M5.052 8.165c.624-1.654 1.469-3.072 2.593-4.071C8.753 3.108 10.164 2.5 12 2.5c2.06 0 3.592.765 4.763 1.987 1.19 1.242 2.03 2.984 2.608 4.946 1.155 3.929 1.19 8.503 1.096 10.985-.023.6-.523 1.082-1.173 1.082H4.706c-.648 0-1.15-.484-1.173-1.086a46.334 46.334 0 01.016-3.879.75.75 0 10-1.498-.07 47.832 47.832 0 00-.017 4.006C2.09 21.924 3.297 23 4.706 23h14.588c1.406 0 2.616-1.07 2.672-2.525.096-2.523.07-7.297-1.156-11.465-.614-2.086-1.545-4.08-2.964-5.561C16.405 1.946 14.488 1 12 1c-2.207 0-3.971.745-5.352 1.973-1.365 1.214-2.324 2.871-3 4.662a.75.75 0 001.404.53z" />
                    <path d="M9.207 6.482a.75.75 0 011.06-.025l5.5 5.25c.14.133.23.322.233.531v.024a.75.75 0 01-.232.53l-5.5 5.25a.75.75 0 01-1.036-1.085L13.378 13H1.75a.75.75 0 010-1.5h11.628L9.232 7.543a.75.75 0 01-.025-1.06z" />
                </g>
            </svg>
        );
    }
);
