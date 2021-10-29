import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFileCheck16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M3.25 1.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h4a.75.75 0 010 1.5h-4A2.25 2.25 0 011 13.75V2.25A2.25 2.25 0 013.25 0h6.293c.331 0 .65.132.884.366l4.207 4.207c.234.235.366.553.366.884V6.75a.75.75 0 01-1.5 0V6H9.75A.75.75 0 019 5.25V1.5H3.25zm7.25 1.06l1.94 1.94H10.5V2.56z" />
                    <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm-1.712-1.272a.75.75 0 01-.016 1.06l-2.406 2.334a.75.75 0 01-1.044 0l-1.094-1.06a.75.75 0 011.044-1.078l.572.555 1.884-1.827a.75.75 0 011.06.016z" />
                </g>
            </svg>
        );
    }
);
