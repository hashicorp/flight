import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconUnfoldOpen16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 1a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L8 2.852 5.3 5.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 018 1zM8 15a.75.75 0 00.55-.24l3.25-3.5a.75.75 0 10-1.1-1.02L8 13.148 5.3 10.24a.75.75 0 10-1.1 1.02l3.25 3.5A.75.75 0 008 15zM1.75 7.124a.626.626 0 100 1.253h.5a.627.627 0 000-1.253h-.5zM4.75 7.124a.626.626 0 100 1.253h.5a.627.627 0 000-1.253h-.5zM7.75 7.124a.626.626 0 100 1.253h.5a.627.627 0 000-1.253h-.5zM10.75 7.124a.627.627 0 000 1.253h.5a.627.627 0 000-1.253h-.5zM13.75 7.124a.627.627 0 000 1.253h.5a.627.627 0 000-1.253h-.5z" />
                </g>
            </svg>
        );
    }
);
