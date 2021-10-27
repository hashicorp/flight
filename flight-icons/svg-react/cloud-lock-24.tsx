import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloudLock24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M12.178 1.615a8.87 8.87 0 00-8.103.832 8.971 8.971 0 00-2.883 3.06 9.05 9.05 0 00-.404 8.189c.386.863 1.302 2.042 1.848 2.665a.75.75 0 101.129-.987c-.533-.609-1.32-1.645-1.608-2.29a7.56 7.56 0 01.338-6.832 7.472 7.472 0 012.4-2.549 7.37 7.37 0 016.734-.692 7.431 7.431 0 012.859 2.008 7.521 7.521 0 011.64 3.104.75.75 0 00.726.564h1.288c1 .001 1.97.35 2.746.987a4.413 4.413 0 011.52 2.518 4.444 4.444 0 01-.394 2.923 4.394 4.394 0 01-1.37 1.585.75.75 0 00.867 1.224 5.895 5.895 0 001.838-2.126 5.945 5.945 0 00.527-3.91 5.914 5.914 0 00-2.036-3.374 5.84 5.84 0 00-3.698-1.327h-.726a9.017 9.017 0 00-1.802-3.159 8.932 8.932 0 00-3.436-2.413zM12.75 18.75a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M8 14.014v-.93c0-1.078.417-2.114 1.165-2.881A3.96 3.96 0 0112 9a3.96 3.96 0 012.835 1.203A4.127 4.127 0 0116 13.083v.93a2.25 2.25 0 012 2.237v4.5A2.25 2.25 0 0115.75 23h-7.5A2.25 2.25 0 016 20.75v-4.5a2.25 2.25 0 012-2.236zM9.5 14v-.917c0-.69.268-1.35.739-1.833A2.46 2.46 0 0112 10.5c.657 0 1.29.267 1.761.75.471.483.739 1.142.739 1.833V14h-5zm6.25 1.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h7.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
