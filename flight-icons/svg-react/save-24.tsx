import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSave24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
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
                    d="M4.75 2A2.75 2.75 0 002 4.75v14.5A2.75 2.75 0 004.75 22h14.5A2.75 2.75 0 0022 19.25V9.078c0-.729-.29-1.428-.805-1.944l-4.329-4.329A2.75 2.75 0 0014.922 2H4.75zm0 1.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25H6v-6.75c0-.966.784-1.75 1.75-1.75h8.5c.966 0 1.75.784 1.75 1.75v6.75h1.25c.69 0 1.25-.56 1.25-1.25V9.078c0-.331-.132-.649-.366-.883l-4.329-4.329a1.25 1.25 0 00-.883-.366H7.5v3.75c0 .138.112.25.25.25h7.5a.75.75 0 010 1.5h-7.5A1.75 1.75 0 016 7.25V3.5H4.75zM7.5 13.75v6.75h9v-6.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
