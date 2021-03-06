import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconServer24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M5 5.75A.75.75 0 015.75 5h.5a.75.75 0 010 1.5h-.5A.75.75 0 015 5.75z" />
                    <path
                        fillRule="evenodd"
                        d="M3.75 1A2.75 2.75 0 001 3.75v4.5A2.75 2.75 0 003.75 11h16.5A2.75 2.75 0 0023 8.25v-4.5A2.75 2.75 0 0020.25 1H3.75zM2.5 3.75c0-.69.56-1.25 1.25-1.25h16.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25v-4.5z"
                        clipRule="evenodd"
                    />
                    <path d="M5.75 17a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M3.75 13A2.75 2.75 0 001 15.75v4.5A2.75 2.75 0 003.75 23h16.5A2.75 2.75 0 0023 20.25v-4.5A2.75 2.75 0 0020.25 13H3.75zM2.5 15.75c0-.69.56-1.25 1.25-1.25h16.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25v-4.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
