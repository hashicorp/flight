import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconIdentityService24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                    <path d="M12 7.25a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5zM9.329 12h-1.46a4.26 4.26 0 012.42-2.892A8.401 8.401 0 009.33 12zm-.055 1.5H7.78a4.254 4.254 0 002.51 3.392A8.4 8.4 0 019.275 13.5zm4.436 3.392a4.254 4.254 0 002.51-3.392h-1.494a8.4 8.4 0 01-1.016 3.392zm-.49-3.392A6.9 6.9 0 0112 16.804a6.9 6.9 0 01-1.22-3.304h2.44zm-.066-1.5h-2.308A6.9 6.9 0 0112 9.196 6.9 6.9 0 0113.154 12zm1.517 0h1.46a4.26 4.26 0 00-2.42-2.892c.492.895.819 1.875.96 2.892z" />
                    <path d="M7 2.75C7 1.784 7.784 1 8.75 1h6.5c.966 0 1.75.784 1.75 1.75V3h3.25A2.75 2.75 0 0123 5.75v12.5A2.75 2.75 0 0120.25 21H3.75A2.75 2.75 0 011 18.25V5.75A2.75 2.75 0 013.75 3H7v-.25zM20.25 4.5H17v.25a1.75 1.75 0 01-1.75 1.75h-6.5A1.75 1.75 0 017 4.75V4.5H3.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h16.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25zM8.5 4.75v-2a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v2a.25.25 0 01-.25.25h-6.5a.25.25 0 01-.25-.25z" />
                </g>
            </svg>
        );
    }
);
