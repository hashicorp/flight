import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSidebarShow24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M11.735 8.295a.75.75 0 011.03-1.09l4.5 4.25a.75.75 0 010 1.09l-4.5 4.25a.75.75 0 01-1.03-1.09L15.658 12l-3.923-3.705z" />
                    <path
                        fillRule="evenodd"
                        d="M2 4.75A2.75 2.75 0 014.75 2h14.5A2.75 2.75 0 0122 4.75v14.5A2.75 2.75 0 0119.25 22H4.75A2.75 2.75 0 012 19.25V4.75zM4.75 3.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25H7v-17H4.75zm14.5 17H8.5v-17h10.75c.69 0 1.25.56 1.25 1.25v14.5c0 .69-.56 1.25-1.25 1.25z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
