import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPack24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12.317 5.685L15.8 3.59a.697.697 0 01.317-.083c.348 0 .633.297.633.66v4.191a.671.671 0 01-.317.577l-4.116 2.475a.622.622 0 01-.634 0L7.567 8.935a.715.715 0 01-.317-.577v-4.19c0-.116.016-.232.08-.33a.617.617 0 01.87-.248l3.483 2.095c.19.116.444.116.634 0zM6.433 14.685L2.95 12.59a.617.617 0 00-.87.247.599.599 0 00-.08.33v4.191c0 .231.127.445.317.578l4.116 2.474c.19.116.444.116.634 0l4.116-2.474a.671.671 0 00.317-.578v-4.19c0-.364-.285-.66-.633-.66a.697.697 0 00-.317.082l-3.483 2.095a.622.622 0 01-.634 0zM16.933 14.685L13.45 12.59a.617.617 0 00-.87.247.598.598 0 00-.08.33v4.191c0 .231.127.445.317.578l4.116 2.474c.19.116.444.116.634 0l4.116-2.474a.671.671 0 00.317-.578v-4.19c0-.364-.285-.66-.633-.66a.697.697 0 00-.317.082l-3.483 2.095a.622.622 0 01-.634 0z" />
                </g>
            </svg>
        );
    }
);
