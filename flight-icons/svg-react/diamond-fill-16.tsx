import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconDiamondFill16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M6.407.753L.75 6.409a2.25 2.25 0 000 3.182l5.657 5.657a2.25 2.25 0 003.182 0l5.657-5.657a2.25 2.25 0 000-3.182L9.589.753a2.25 2.25 0 00-3.182 0z"
                />
            </svg>
        );
    }
);
