import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconShoppingBag16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M6.5 7.25a.75.75 0 00-1.5 0c0 .76.34 1.468.91 1.975A3.15 3.15 0 008 10a3.15 3.15 0 002.09-.775c.57-.507.91-1.215.91-1.975a.75.75 0 00-1.5 0c0 .301-.134.61-.407.854A1.651 1.651 0 018 8.5c-.424 0-.816-.15-1.093-.396A1.145 1.145 0 016.5 7.25z" />
                    <path
                        fillRule="evenodd"
                        d="M3.448.746A2.25 2.25 0 015.121 0h5.758a2.25 2.25 0 011.673.746l1.871 2.081c.371.413.577.949.577 1.504v9.419A2.25 2.25 0 0112.75 16h-9.5A2.25 2.25 0 011 13.75V4.331c0-.555.205-1.091.577-1.504L3.448.746zm1.673.754a.75.75 0 00-.558.249L2.99 3.5H13.01l-1.574-1.751a.75.75 0 00-.558-.249H5.12zM2.5 13.75V5h11v8.75a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
