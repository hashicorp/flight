import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconPencilTool16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12.988 2.177a1.75 1.75 0 00-2.475 0L3.26 9.429a2.75 2.75 0 00-.609.923l-1.347 3.37a.75.75 0 00.975.974l3.368-1.347a2.75 2.75 0 00.924-.61l7.252-7.252a1.75 1.75 0 000-2.475l-.835-.835zm-1.415 1.06a.25.25 0 01.354 0l.836.836a.25.25 0 010 .354l-.638.637-1.19-1.19.638-.637zM9.875 4.936L4.32 10.49a1.25 1.25 0 00-.277.42l-.698 1.744 1.744-.698c.157-.063.3-.157.42-.277l5.554-5.554-1.19-1.19z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
