import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFrown16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    <path d="M5 6a1 1 0 011-1h.007a1 1 0 010 2H6a1 1 0 01-1-1zM10 5a1 1 0 100 2h.007a1 1 0 100-2H10z" />
                    <path
                        fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                        clipRule="evenodd"
                    />
                    <path d="M5.785 9.777C6.279 9.403 7.035 9 8 9c.965 0 1.721.403 2.215.777.25.189.441.377.573.52.078.085.153.171.22.265a.75.75 0 01-.17 1.047.759.759 0 01-1.046-.17 2.736 2.736 0 00-.482-.466c-.331-.25-.776-.473-1.31-.473-.535 0-.979.222-1.31.473-.177.134-.35.29-.484.469a.75.75 0 01-1.215-.88l.001-.001c.217-.3.5-.562.793-.784z" />
                </g>
            </svg>
        );
    }
);
