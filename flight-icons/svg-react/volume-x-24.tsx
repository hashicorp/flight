import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconVolumeX24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M9.046 4.804C10.162 3.748 12 4.538 12 6.074v11.851c0 1.536-1.838 2.327-2.954 1.27l-3.3-3.127A.25.25 0 005.574 16H2.75A1.75 1.75 0 011 14.25v-4.5C1 8.783 1.784 8 2.75 8h2.824a.25.25 0 00.172-.069l3.3-3.127zm1.454 1.27a.25.25 0 00-.422-.18l-3.3 3.126a1.75 1.75 0 01-1.204.48H2.75a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h2.824c.448 0 .878.171 1.203.48l3.301 3.127a.25.25 0 00.422-.182V6.075z"
                        clipRule="evenodd"
                    />
                    <path d="M22.78 8.22a.75.75 0 010 1.06L20.06 12l2.72 2.72a.75.75 0 11-1.06 1.06L19 13.06l-2.72 2.72a.75.75 0 11-1.06-1.06L17.94 12l-2.72-2.72a.75.75 0 011.06-1.06L19 10.94l2.72-2.72a.75.75 0 011.06 0z" />
                </g>
            </svg>
        );
    }
);
