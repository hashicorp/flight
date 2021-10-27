import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAppleColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#000"
                    d="M15.073 5.203c.62-.747 1.057-1.772 1.057-2.797 0-.15-.01-.289-.042-.406-1.004.043-2.21.673-2.937 1.527-.566.64-1.1 1.676-1.1 2.702 0 .16.032.31.043.363.064.01.17.02.267.02.908 0 2.04-.597 2.712-1.409zm.705 1.634c-1.506 0-2.734.918-3.513.918-.844 0-1.933-.864-3.257-.864C6.52 6.89 4 8.95 4 12.828c0 2.424.929 4.986 2.082 6.63C7.075 20.848 7.94 22 9.19 22c1.238 0 1.783-.822 3.32-.822 1.56 0 1.901.8 3.268.8 1.356 0 2.264-1.238 3.107-2.466.961-1.41 1.356-2.776 1.367-2.84-.075-.022-2.67-1.079-2.67-4.047 0-2.563 2.04-3.716 2.157-3.802-1.345-1.932-3.395-1.986-3.961-1.986z"
                />
            </svg>
        );
    }
);
