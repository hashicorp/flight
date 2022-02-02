import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconWand24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M18.875 1.15a.75.75 0 00-.975.975l.289.721a.75.75 0 010 .557l-.29.722a.75.75 0 00.976.975l.721-.289a.75.75 0 01.558 0l.721.289a.75.75 0 00.975-.975l-.289-.722a.75.75 0 010-.557l.29-.721a.75.75 0 00-.976-.975l-.721.288a.75.75 0 01-.558 0l-.721-.288zM7.125 1.15a.75.75 0 00-.975.975l.439 1.096a.75.75 0 010 .557l-.44 1.097a.75.75 0 00.976.975l1.096-.439a.75.75 0 01.558 0l1.096.439a.75.75 0 00.975-.975l-.439-1.097a.75.75 0 010-.557l.44-1.096a.75.75 0 00-.976-.975l-1.096.438a.75.75 0 01-.558 0L7.125 1.15z" />
                    <path
                        fillRule="evenodd"
                        d="M17.017 6.707a2.5 2.5 0 00-3.535 0L2.168 18.021a2.5 2.5 0 003.536 3.535l11.313-11.313a2.5 2.5 0 000-3.536zm-2.474 1.06a1 1 0 011.414 1.415l-1.591 1.591-1.414-1.414 1.59-1.591zM11.89 10.42l1.414 1.415-8.662 8.662a1 1 0 01-1.414-1.414l8.662-8.663z"
                        clipRule="evenodd"
                    />
                    <path d="M16.108 16.69a.75.75 0 010-1.38l1.334-.57a.75.75 0 00.393-.395l.572-1.333a.75.75 0 011.378 0l.572 1.333a.75.75 0 00.394.394l1.333.572a.75.75 0 010 1.378l-1.333.572a.75.75 0 00-.394.394l-.572 1.333a.75.75 0 01-1.378 0l-.572-1.333a.75.75 0 00-.393-.394l-1.334-.572z" />
                </g>
            </svg>
        );
    }
);
