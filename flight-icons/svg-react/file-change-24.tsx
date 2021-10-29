import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconFileChange24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.458 15.328c.218-.26.487-.58.899-.745a1.12 1.12 0 01.778-.026c.324.1.766.356 1.313.95.667.726 1.325 1.17 1.979 1.37.667.204 1.27.135 1.774-.067a3.433 3.433 0 001.127-.768 5.357 5.357 0 00.41-.459l.02-.022.032-.04.012-.013a.75.75 0 10-1.104-1.016c-.05.054-.101.115-.156.18-.218.26-.487.58-.899.745a1.12 1.12 0 01-.778.026c-.324-.1-.766-.356-1.313-.95-.667-.726-1.325-1.17-1.979-1.37a2.619 2.619 0 00-1.774.067 3.433 3.433 0 00-1.127.768 5.4 5.4 0 00-.326.356l-.085.103-.018.022a4.557 4.557 0 01-.045.053.75.75 0 101.104 1.016c.05-.054.101-.115.156-.18z" />
                    <path
                        fillRule="evenodd"
                        d="M3 3.75A2.75 2.75 0 015.75 1h7.586c.464 0 .909.184 1.237.513l5.914 5.914c.329.328.513.773.513 1.237V20.25A2.75 2.75 0 0118.25 23H5.75A2.75 2.75 0 013 20.25V3.75zM5.75 2.5c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V9h-5.75a.75.75 0 01-.75-.75V2.5H5.75zm8.75 1.06l3.94 3.94H14.5V3.56z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
