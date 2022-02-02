import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBulb16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 0a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 018 0zM13.28 2.22a.75.75 0 010 1.06l-.707.707a.75.75 0 11-1.06-1.06l.707-.707a.75.75 0 011.06 0zM2.72 3.28a.75.75 0 011.06-1.06l.707.707a.75.75 0 01-1.06 1.06L2.72 3.28zM15.5 7.5a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM2.25 8.25a.75.75 0 000-1.5h-1a.75.75 0 000 1.5h1zM6.25 15.25A.75.75 0 017 14.5h2A.75.75 0 019 16H7a.75.75 0 01-.75-.75z" />
                    <path
                        fillRule="evenodd"
                        d="M8 3.5A4.5 4.5 0 003.5 8c0 1.53.926 2.465 1.718 3.264l.2.203c.05.05.081.124.081.208.001 1.008.818 1.825 1.826 1.825H8.69c1 0 1.811-.81 1.811-1.81 0-.083.033-.159.088-.213l.067-.066C11.492 10.592 12.5 9.605 12.5 8A4.5 4.5 0 008 3.5zM5 8a3 3 0 016 0c0 .928-.54 1.502-1.462 2.406-.347.34-.538.803-.538 1.283a.31.31 0 01-.31.311H7.324A.326.326 0 017 11.674c0-.461-.175-.914-.507-1.255l-.115-.117C5.49 9.397 5 8.894 5 8z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
