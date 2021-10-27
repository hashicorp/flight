import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFolderMinus16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M5.75 7.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
                    <path
                        fillRule="evenodd"
                        d="M2.25 1A2.25 2.25 0 000 3.25v9.5A2.25 2.25 0 002.25 15h11.5A2.25 2.25 0 0016 12.75v-7.5A2.25 2.25 0 0013.75 3H9.871a.75.75 0 01-.53-.22L8.22 1.66A2.25 2.25 0 006.629 1H2.25zM1.5 3.25a.75.75 0 01.75-.75h4.379a.75.75 0 01.53.22L8.28 3.84a2.25 2.25 0 001.591.659h3.879a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75v-9.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
