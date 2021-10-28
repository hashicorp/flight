import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconEdit24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M17.055 2.884a2.75 2.75 0 013.89 0l.171.171a2.75 2.75 0 010 3.89l-9.005 9.005A4.75 4.75 0 0110.516 17L6.28 18.696a.75.75 0 01-.975-.975l1.695-4.237a4.749 4.749 0 011.051-1.595l9.005-9.005zm2.829 1.06a1.25 1.25 0 00-1.768 0l-.555.556L19.5 6.44l.555-.556a1.25 1.25 0 000-1.768l-.171-.172zM18.439 7.5L16.5 5.56l-7.39 7.39a3.25 3.25 0 00-.719 1.09l-1.045 2.614 2.613-1.046a3.25 3.25 0 001.091-.719L18.44 7.5z"
                        clipRule="evenodd"
                    />
                    <path d="M3.75 4.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V13a.75.75 0 011.5 0v7.25A2.75 2.75 0 0118.25 23H3.75A2.75 2.75 0 011 20.25V5.75A2.75 2.75 0 013.75 3H11a.75.75 0 010 1.5H3.75z" />
                </g>
            </svg>
        );
    }
);
