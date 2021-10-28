import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconPin16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M9.121 1.4a1.25 1.25 0 011.76.008l3.707 3.708a1.25 1.25 0 010 1.768l-2.014 2.014a.75.75 0 01-.53.22h-1.16L9.452 10.55l-.248 2.231c-.103.924-1.16 1.435-1.945.88-.578-.409-1.458-1.052-2.18-1.68l-2.799 2.8a.75.75 0 01-1.06-1.061l2.799-2.8c-.628-.721-1.271-1.6-1.68-2.18-.555-.784-.044-1.841.88-1.944l2.23-.248 1.387-1.386V3.956a.75.75 0 01.225-.535L9.12 1.4zm.874 1.244L8.335 4.27v1.202a.75.75 0 01-.219.53L6.324 7.795a.75.75 0 01-.447.215l-2.053.228c.516.713 1.202 1.61 1.765 2.173s1.46 1.25 2.173 1.765l.228-2.053a.75.75 0 01.215-.447l1.838-1.839a.75.75 0 01.53-.22h1.16L13.351 6 9.995 2.644z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
