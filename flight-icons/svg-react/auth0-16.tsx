import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAuth016 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill={color}
                    d="M12.549 1h-4.55l1.407 4.38h4.548l-3.68 2.61 1.406 4.405c2.37-1.725 3.143-4.336 2.274-7.016L12.55 1zM2.045 5.38h4.55L8 1H3.45L2.045 5.38c-.868 2.68-.094 5.29 2.275 7.015L5.725 7.99l-3.68-2.612zm2.275 7.015L8 15l3.68-2.605L8 9.745l-3.68 2.65z"
                />
            </svg>
        );
    }
);
