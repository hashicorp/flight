import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGuide24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M2.75 3A1.75 1.75 0 001 4.75v12.5c0 .966.784 1.75 1.75 1.75h5.175c2.342 0 3.325 1.19 3.325 2.25a.75.75 0 001.5 0c0-1.06.983-2.25 3.325-2.25h5.175A1.75 1.75 0 0023 17.25V4.75A1.75 1.75 0 0021.25 3H16.1c-1.7 0-2.958.505-3.777 1.439-.119.136-.226.278-.323.426a3.789 3.789 0 00-.323-.426C10.858 3.505 9.6 3 7.9 3H2.75zm10 15.443c.845-.598 1.996-.943 3.325-.943h5.175a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H16.1c-1.4 0-2.192.406-2.648.927-.473.54-.702 1.334-.702 2.323v10.693zm-1.5 0V7.75c0-.99-.229-1.783-.702-2.323C10.092 4.906 9.3 4.5 7.9 4.5H2.75a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h5.175c1.329 0 2.48.345 3.325.943z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
