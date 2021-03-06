import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMessageCircleFill24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 8.75A.75.75 0 018.75 8h7a.75.75 0 010 1.5h-7A.75.75 0 018 8.75zM8 11.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM8 14.75a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z" />
                    <path
                        fillRule="evenodd"
                        d="M7.546 20.304c-.332.064-.757.185-1.228.342-1.113.37-2.194.825-3.27 1.292a.75.75 0 01-.98-.998c.086-.192.17-.384.253-.577.273-.635.704-1.675 1.024-2.628.16-.48.286-.915.352-1.255a2.32 2.32 0 00.048-.42 9.62 9.62 0 01-1.06-4.403C2.685 6.324 7.01 2 12.343 2 17.676 2 22 6.324 22 11.657c0 5.334-4.324 9.658-9.657 9.658a9.619 9.619 0 01-4.4-1.058 2.159 2.159 0 00-.397.047zM20.5 11.657a8.157 8.157 0 10-15.396 3.765c.128.246.144.513.141.7a3.764 3.764 0 01-.075.643 11.85 11.85 0 01-.403 1.447c-.185.55-.402 1.12-.606 1.631a32 32 0 011.684-.62c.495-.165.991-.31 1.417-.392.212-.041.427-.07.627-.074.18-.003.445.012.69.14A8.157 8.157 0 0020.5 11.657z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
