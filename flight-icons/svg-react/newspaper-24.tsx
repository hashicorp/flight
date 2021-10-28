import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconNewspaper24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.75 13a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zM9 16.75a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" />
                    <path
                        fillRule="evenodd"
                        d="M10.75 4.5A1.75 1.75 0 009 6.25v3.5c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0019 9.75v-3.5a1.75 1.75 0 00-1.75-1.75h-6.5zm-.25 1.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-6.5a.25.25 0 01-.25-.25v-3.5z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M19.75 23H4.25a2.75 2.75 0 01-2.75-2.75v-12A2.75 2.75 0 014.25 5.5H5.5V3.75A2.75 2.75 0 018.25 1h11.5a2.75 2.75 0 012.75 2.75v16.5A2.75 2.75 0 0119.75 23zM21 3.75v16.5c0 .69-.56 1.25-1.25 1.25H6.7c.192-.375.3-.8.3-1.25V3.75c0-.69.56-1.25 1.25-1.25h11.5c.69 0 1.25.56 1.25 1.25zM3 20.25a1.25 1.25 0 102.5 0V7H4.25C3.56 7 3 7.56 3 8.25v12z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
