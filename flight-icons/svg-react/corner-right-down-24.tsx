import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCornerRightDown24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    d="M3.75 2.5a.75.75 0 000 1.5h7c.847 0 1.669.357 2.282 1.009.615.653.968 1.549.968 2.491v10.878l-3.957-4.146a.75.75 0 00-1.086 1.036l5.25 5.5a.75.75 0 001.085 0l5.25-5.5a.75.75 0 00-1.085-1.036L15.5 18.378V7.5c0-1.312-.49-2.579-1.375-3.52A4.634 4.634 0 0010.75 2.5h-7z"
                />
            </svg>
        );
    }
);
