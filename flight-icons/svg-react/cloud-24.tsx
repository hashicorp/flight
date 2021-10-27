import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloud24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M5.836 3.558a8.864 8.864 0 014.895-.373 8.906 8.906 0 014.356 2.297 9.009 9.009 0 012.325 3.705h.726a5.84 5.84 0 014.147 1.733A5.929 5.929 0 0124 15.094a5.929 5.929 0 01-1.715 4.174A5.84 5.84 0 0118.138 21H8.929a8.878 8.878 0 01-4.721-1.361 8.976 8.976 0 01-3.295-3.675 9.062 9.062 0 01.953-9.47 8.934 8.934 0 013.97-2.936zm.509 1.41a7.434 7.434 0 00-3.289 2.439 7.562 7.562 0 00-.795 7.9 7.475 7.475 0 002.745 3.062 7.378 7.378 0 003.93 1.131h9.202a4.34 4.34 0 003.082-1.288 4.429 4.429 0 001.28-3.118c0-1.17-.461-2.292-1.28-3.118a4.34 4.34 0 00-3.082-1.289h-1.289a.75.75 0 01-.726-.563 7.515 7.515 0 00-2.074-3.56 7.407 7.407 0 00-3.623-1.91 7.364 7.364 0 00-4.081.314z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
