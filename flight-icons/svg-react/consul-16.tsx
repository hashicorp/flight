import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconConsul16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M4.737 14.193A7 7 0 008.006 15a6.98 6.98 0 004.735-1.847l-1.66-1.737a4.6 4.6 0 110-6.828l1.66-1.738a7 7 0 10-8.004 11.343zM13.32 11.402a.573.573 0 10.637-.953.573.573 0 00-.637.953z" />
                    <path d="M7.96 9.517a1.517 1.517 0 11-.012-3.034 1.517 1.517 0 01.013 3.034zM13.978 9.447a.574.574 0 10.637-.954.574.574 0 00-.637.954zM12.59 9.472a.574.574 0 110-1.148.574.574 0 010 1.148zM13.978 7.514a.574.574 0 10.637-.954.574.574 0 00-.637.954zM12.59 7.675a.574.574 0 110-1.148.574.574 0 010 1.148zM13.353 5.585a.574.574 0 10.635-.956.574.574 0 00-.635.956z" />
                </g>
            </svg>
        );
    }
);
