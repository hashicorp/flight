import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGlobePrivate24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M8.804 11A15.149 15.149 0 0112 2.916a15.087 15.087 0 012.813 5.763.75.75 0 001.456-.358 16.614 16.614 0 00-2.596-5.674 9.512 9.512 0 017.542 7.035.75.75 0 101.456-.364C21.473 4.539 17.15 1 12 1 5.925 1 1 5.925 1 12c0 5.243 3.667 9.627 8.575 10.732a.75.75 0 00.33-1.464c-4.082-.918-7.169-4.465-7.392-8.768h4.754c.128 2.606.86 5.13 2.117 7.367a.75.75 0 101.308-.734A15.221 15.221 0 018.77 12.5H12.5a.75.75 0 000-1.5H8.804zM7.3 11H2.552a9.506 9.506 0 017.775-8.353A16.673 16.673 0 007.299 11z"
                        clipRule="evenodd"
                    />
                    <path d="M18 19a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 0118 19z" />
                    <path
                        fillRule="evenodd"
                        d="M14 15.014a2.25 2.25 0 00-2 2.236v4.5A2.25 2.25 0 0014.25 24h7.5A2.25 2.25 0 0024 21.75v-4.5a2.25 2.25 0 00-2-2.236v-.93a4.127 4.127 0 00-1.165-2.881A3.96 3.96 0 0018 10a3.96 3.96 0 00-2.835 1.203A4.127 4.127 0 0014 14.083v.93zM15.5 15v-.917c0-.69.268-1.35.739-1.833A2.46 2.46 0 0118 11.5c.657 0 1.29.267 1.761.75.471.483.739 1.142.739 1.833V15h-5zm-1.25 1.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-7.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
