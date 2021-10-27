import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTv16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    fillRule="evenodd"
                    d="M6.624.334a.75.75 0 00-1.248.832L6.599 3H2.25A2.25 2.25 0 000 5.25v7.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-7.5A2.25 2.25 0 0013.75 3H9.401l1.223-1.834A.75.75 0 109.376.334L8 2.398 6.624.334zM7.989 4.5a.798.798 0 00.022 0h5.739a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h5.739z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
