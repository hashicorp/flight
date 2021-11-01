import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconDocsDownload16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M2 3.25A2.25 2.25 0 014.25 1h8.5c.69 0 1.25.56 1.25 1.25V4.5a.75.75 0 01-1.5 0v-2H4.25a.75.75 0 00-.75.75v6.878c.235-.083.487-.128.75-.128h.25a.75.75 0 010 1.5h-.25a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h1a.75.75 0 010 1.5h-1A2.25 2.25 0 012 12.75v-9.5z" />
                    <path d="M8.826 10.826a.6.6 0 01.848 0l.726.725V9a.6.6 0 011.2 0v2.551l.726-.725a.6.6 0 11.848.848l-1.75 1.75a.6.6 0 01-.848 0l-1.75-1.75a.6.6 0 010-.848z" />
                    <path
                        fillRule="evenodd"
                        d="M11 6.05a4.95 4.95 0 100 9.9 4.95 4.95 0 000-9.9zM7.45 11a3.55 3.55 0 117.1 0 3.55 3.55 0 01-7.1 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
