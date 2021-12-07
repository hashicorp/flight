import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#000"
                    d="M1 1l10.96 22L22.997 1H1zm12.264 4.414h1.275v1.277h-1.275V5.414zm-2.54 5.102H9.449V9.241h1.275v1.275zm0-1.913H9.449V7.328h1.275v1.275zm0-1.912H9.449V5.414h1.275v1.277zm1.914 5.739H11.36v-1.283h1.277v1.283zm0-1.914H11.36V9.241h1.277v1.275zm0-1.913H11.36V7.328h1.277v1.275zm0-1.912H11.36V5.414h1.277v1.277zm.626.637h1.275v1.275h-1.275V7.328zm0 3.192V9.241h1.275v1.275l-1.275.004z"
                />
            </svg>
        );
    }
);