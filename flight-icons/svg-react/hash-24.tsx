import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconHash24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M10.363 3.009a.75.75 0 01.629.853L10.365 8h4.483l.66-4.362a.75.75 0 111.484.224L16.365 8h2.885a.75.75 0 010 1.5h-3.113l-.681 4.5h3.794a.75.75 0 010 1.5h-4.022l-.736 4.863a.75.75 0 11-1.483-.225l.702-4.638H9.228l-.736 4.863a.75.75 0 11-1.483-.225L7.71 15.5H4.75a.75.75 0 010-1.5h3.189l.681-4.5H4.75a.75.75 0 010-1.5h4.098l.66-4.362a.75.75 0 01.855-.63zM13.938 14l.682-4.5h-4.482L9.455 14h4.482z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
