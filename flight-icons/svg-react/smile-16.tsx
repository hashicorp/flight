import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSmile16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                <g fill={color}>
                    <path d="M8 12c-1.01 0-1.782-.504-2.267-.945a4.72 4.72 0 01-.564-.614 3.31 3.31 0 01-.212-.305.75.75 0 011.284-.775 3.214 3.214 0 00.5.584c.341.31.769.555 1.259.555.49 0 .918-.246 1.258-.555a3.214 3.214 0 00.5-.584.75.75 0 011.285.775l-.212.305c-.128.167-.317.39-.564.614C9.782 11.495 9.01 12 8 12zM5 6a1 1 0 011-1h.007a1 1 0 010 2H6a1 1 0 01-1-1zM10 5a1 1 0 100 2h.007a1 1 0 100-2H10z" />
                    <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
