import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMesh16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M15.681 10.243A8.001 8.001 0 0016 8a7.97 7.97 0 00-2.047-5.345A1.752 1.752 0 0012.25.5h-.007c-.321 0-.623.087-.882.238A7.97 7.97 0 008 0a7.963 7.963 0 00-4.321 1.266A1.742 1.742 0 002.75 1h-.007a1.75 1.75 0 00-1.48 2.684A7.963 7.963 0 000 8a7.985 7.985 0 002.994 6.24 1.75 1.75 0 001.75 1.71h.006c.353 0 .681-.104.956-.284A8.004 8.004 0 008 16a7.985 7.985 0 006.245-3h.005a1.75 1.75 0 001.431-2.757zM2.573 4.492a1.758 1.758 0 01-.043-.005A6.47 6.47 0 001.5 8c0 1.918.83 3.642 2.152 4.832.112-.09.234-.165.366-.225-.029-3.003-.435-5.146-1.445-8.115zM6.5 14.2c0 .042-.001.084-.004.125.482.114.986.175 1.504.175a6.484 6.484 0 004.858-2.181 1.742 1.742 0 01-.242-1.713 32.908 32.908 0 00-2.306-2.179c-.067.116-.136.232-.205.347-.942 1.56-2.101 3.078-3.71 4.829.068.186.105.387.105.597zm7.826-4.698a1.776 1.776 0 00-.076-.002h-.007a1.75 1.75 0 00-.53.082 33.906 33.906 0 00-2.675-2.503c.484-.967.918-1.976 1.352-3.085a1.74 1.74 0 00.601-.158 6.518 6.518 0 011.335 5.666zM8 1.5c.89 0 1.738.179 2.51.503a1.755 1.755 0 00.476 1.464c-.379.964-.75 1.836-1.152 2.662C8.338 5.013 6.66 3.984 4.499 2.823a1.784 1.784 0 00-.013-.292A6.47 6.47 0 018 1.5zM4.094 4.309c.957 2.878 1.371 5.082 1.42 8.034 1.44-1.591 2.471-2.96 3.306-4.344.105-.174.208-.348.307-.524-1.41-1.072-2.989-2.056-5.033-3.166z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
