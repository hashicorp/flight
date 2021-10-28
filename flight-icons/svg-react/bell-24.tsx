import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBell24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M20 14.15c0 1.304 1.019 2.35 2.25 2.35a.75.75 0 010 1.5H1.75a.75.75 0 010-1.5C2.981 16.5 4 15.454 4 14.15V8.983C4 4.665 7.702 1 12 1s8 3.665 8 7.983v5.167zM5.5 8.983C5.5 5.5 8.524 2.5 12 2.5s6.5 3 6.5 6.483v5.167c0 .873.29 1.693.782 2.35H4.718a3.917 3.917 0 00.782-2.35V8.983z"
                        clipRule="evenodd"
                    />
                    <path d="M10.42 20.414a.75.75 0 00-1.34.672C9.63 22.188 10.703 23 12 23c1.296 0 2.369-.812 2.92-1.914a.75.75 0 10-1.34-.672c-.347.691-.953 1.086-1.58 1.086-.627 0-1.233-.395-1.58-1.086z" />
                </g>
            </svg>
        );
    }
);
