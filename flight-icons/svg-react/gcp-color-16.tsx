import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGcpColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#EA4335"
                    d="M10.313 5.376l1.887-1.5-.332-.414a5.935 5.935 0 00-5.586-1.217 5.89 5.89 0 00-3.978 4.084c-.03.113.312-.098.463-.056l2.608-.428s.127-.124.201-.205c1.16-1.266 3.126-1.432 4.465-.354l.272.09z"
                />
                <path
                    fill="#4285F4"
                    d="M13.637 6.3a5.835 5.835 0 00-1.77-2.838l-1.83 1.819a3.226 3.226 0 011.193 2.565v.323c.9 0 1.63.725 1.63 1.62 0 .893-.73 1.618-1.63 1.618l-3.257-.002-.325.035v2.507l.325.053h3.257a4.234 4.234 0 004.08-2.962A4.2 4.2 0 0013.636 6.3z"
                />
                <path
                    fill="#34A853"
                    d="M4.711 13.999H7.97v-2.594H4.71c-.232 0-.461-.066-.672-.161l-.458.14-1.313 1.297-.114.447a4.254 4.254 0 002.557.87z"
                />
                <path
                    fill="#FBBC05"
                    d="M4.711 5.572A4.234 4.234 0 00.721 8.44a4.206 4.206 0 001.433 4.688l1.89-1.884a1.617 1.617 0 01.44-3.079 1.63 1.63 0 011.714.937l1.89-1.879a4.24 4.24 0 00-3.377-1.65z"
                />
            </svg>
        );
    }
);
