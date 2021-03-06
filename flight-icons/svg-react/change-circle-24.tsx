import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconChangeCircle24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.071 12.486c.056-.065.116-.143.182-.229.284-.366.677-.874 1.264-1.128a1.5 1.5 0 011.117-.041c.46.152 1.064.539 1.795 1.398.84.988 1.66 1.583 2.465 1.85a2.998 2.998 0 002.185-.089c1.012-.438 1.715-1.388 1.933-1.682.028-.038.048-.066.06-.08a.75.75 0 00-1.143-.97 6.64 6.64 0 00-.182.227c-.284.367-.677.875-1.264 1.129a1.5 1.5 0 01-1.117.041c-.46-.152-1.064-.539-1.795-1.398-.84-.988-1.66-1.584-2.465-1.85a2.998 2.998 0 00-2.185.089c-1.012.438-1.715 1.388-1.933 1.682-.028.038-.048.066-.06.08a.75.75 0 101.143.97z" />
                    <path
                        fillRule="evenodd"
                        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
