import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCollections16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M3.05 4.75a.7.7 0 01.7-.7h3.5a.7.7 0 110 1.4h-3.5a.7.7 0 01-.7-.7zM3.75 7.05a.7.7 0 100 1.4h2.5a.7.7 0 100-1.4h-2.5z" />
                    <path
                        fillRule="evenodd"
                        d="M0 3.25A2.25 2.25 0 012.25 1h6.5c.883 0 1.648.51 2.016 1.25h.984c.698 0 1.3.409 1.582 1h.918c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 01-1.75 1.75h-.918c-.281.591-.884 1-1.582 1h-.984A2.25 2.25 0 018.75 15h-6.5A2.25 2.25 0 010 12.75v-9.5zm13.5 8h.75a.25.25 0 00.25-.25V5a.25.25 0 00-.25-.25h-.75v6.5zm-2.5 1v-8.5h.75A.25.25 0 0112 4v8a.25.25 0 01-.25.25H11zM2.25 2.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-6.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
