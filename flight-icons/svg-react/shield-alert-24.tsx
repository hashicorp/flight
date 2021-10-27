import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconShieldAlert24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    <path d="M12 7a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7zM12 15a1 1 0 100 2h.01a1 1 0 100-2H12z" />
                    <path
                        fillRule="evenodd"
                        d="M11.04 1.307a2.75 2.75 0 011.92 0l6.25 2.33A2.75 2.75 0 0121 6.214V12c0 2.732-1.462 5.038-3.104 6.774-1.65 1.744-3.562 3-4.65 3.642a2.437 2.437 0 01-2.493 0c-1.087-.643-3-1.898-4.65-3.642C4.463 17.038 3 14.732 3 12V6.214a2.75 2.75 0 011.79-2.577l6.25-2.33zm1.397 1.406a1.25 1.25 0 00-.874 0l-6.25 2.33a1.25 1.25 0 00-.813 1.17V12c0 2.182 1.172 4.136 2.693 5.744 1.514 1.6 3.294 2.772 4.323 3.38.304.18.664.18.968 0 1.03-.608 2.809-1.78 4.323-3.38C18.327 16.136 19.5 14.182 19.5 12V6.214a1.25 1.25 0 00-.813-1.171l-6.25-2.33z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
