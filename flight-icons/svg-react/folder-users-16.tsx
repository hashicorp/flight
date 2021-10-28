import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFolderUsers16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M2.25 2.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h.25a.75.75 0 010 1.5h-.25A2.25 2.25 0 010 12.75v-9.5A2.25 2.25 0 012.25 1h4.379a2.25 2.25 0 011.59.659L9.342 2.78c.14.141.331.22.53.22h3.879A2.25 2.25 0 0116 5.25v5.25a.75.75 0 01-1.5 0V5.25a.75.75 0 00-.75-.75H9.871a2.25 2.25 0 01-1.59-.659L7.158 2.72a.75.75 0 00-.53-.22H2.25z" />
                    <path d="M4.574 11.76c.383-.463.936-.76 1.551-.76h2.75c.615 0 1.168.297 1.55.76A2.61 2.61 0 0111 13.418v.833a.75.75 0 01-1.5 0v-.833c0-.285-.095-.536-.231-.702-.134-.161-.28-.215-.394-.215h-2.75c-.114 0-.26.054-.394.215a1.113 1.113 0 00-.231.702v.833a.75.75 0 01-1.5 0v-.833c0-.6.195-1.197.574-1.656z" />
                    <path
                        fillRule="evenodd"
                        d="M7.5 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6.5 8a1 1 0 112 0 1 1 0 01-2 0z"
                        clipRule="evenodd"
                    />
                    <path d="M11.518 11.589a.75.75 0 01.893-.572c.567.125 1.089.41 1.474.834.388.426.614.969.615 1.546v.853a.75.75 0 01-1.5 0v-.851a.8.8 0 00-.224-.538 1.306 1.306 0 00-.687-.379.75.75 0 01-.572-.893zM11.42 5.52a.75.75 0 10-.34 1.46c.283.066.52.212.682.4A.95.95 0 0112 8a.95.95 0 01-.238.62 1.272 1.272 0 01-.681.4.75.75 0 10.338 1.46 2.77 2.77 0 001.481-.884A2.45 2.45 0 0013.5 8a2.45 2.45 0 00-.6-1.596 2.77 2.77 0 00-1.48-.885z" />
                </g>
            </svg>
        );
    }
);
