import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCaret24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12.543 3.232a.75.75 0 00-1.085 0l-5.25 5.5a.75.75 0 101.085 1.036L12 4.836l4.707 4.932a.75.75 0 001.085-1.036l-5.25-5.5zM11.457 20.768a.75.75 0 001.085 0l5.25-5.5a.75.75 0 00-1.085-1.036L12 19.164l-4.707-4.932a.75.75 0 00-1.086 1.036l5.25 5.5z" />
                </g>
            </svg>
        );
    }
);
