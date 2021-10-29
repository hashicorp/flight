import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconEvent16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M8.675 4.173a.75.75 0 00-1.35 0l-1.14 2.359-2.546.38a.75.75 0 00-.418 1.273l1.85 1.84-.437 2.6a.75.75 0 001.094.786L8 12.19l2.272 1.22a.75.75 0 001.094-.785l-.437-2.602 1.85-1.839a.75.75 0 00-.418-1.273l-2.545-.38-1.14-2.359zM7.362 7.542L8 6.222l.638 1.32a.75.75 0 00.565.415l1.459.218-1.066 1.059a.75.75 0 00-.21.656l.247 1.476-1.278-.686a.75.75 0 00-.71 0l-1.278.686.248-1.476a.75.75 0 00-.211-.656l-1.066-1.06 1.46-.217a.75.75 0 00.564-.415z" />
                    <path d="M12 .75a.75.75 0 00-1.5 0V1h-5V.75a.75.75 0 00-1.5 0V1H2.25A2.25 2.25 0 000 3.25v10.5A2.25 2.25 0 002.25 16h11.5A2.25 2.25 0 0016 13.75V3.25A2.25 2.25 0 0013.75 1H12V.75zm-8 2.5V2.5H2.25a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V3.25a.75.75 0 00-.75-.75H12v.75a.75.75 0 01-1.5 0V2.5h-5v.75a.75.75 0 01-1.5 0z" />
                </g>
            </svg>
        );
    }
);