import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBatteryCharging16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.605 3.944a.75.75 0 10-1.21-.888l-2.75 3.75a.75.75 0 00.368 1.155l3.524 1.175-2.142 2.92a.75.75 0 101.21.888l2.75-3.75a.75.75 0 00-.368-1.156L5.463 6.864l2.142-2.92z" />
                    <path d="M2.25 4.5a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h.5a.75.75 0 010 1.5h-.5A2.25 2.25 0 010 10.75v-5.5A2.25 2.25 0 012.25 3h.5a.75.75 0 010 1.5h-.5zM9.5 3.75a.75.75 0 01.75-.75h.5A2.25 2.25 0 0113 5.25v5.5A2.25 2.25 0 0110.75 13h-.5a.75.75 0 010-1.5h.5a.75.75 0 00.75-.75v-5.5a.75.75 0 00-.75-.75h-.5a.75.75 0 01-.75-.75zM14.75 6a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75z" />
                </g>
            </svg>
        );
    }
);
