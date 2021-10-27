import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLearnLink16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12.75 0a.75.75 0 000 1.5h.69l-1.97 1.97a.75.75 0 001.06 1.06l1.97-1.97v.69a.75.75 0 001.5 0V.75a.75.75 0 00-.75-.75h-2.5z" />
                    <path
                        fillRule="evenodd"
                        d="M8.075 4.074a.75.75 0 00-.65 0l-6.75 3.25a.75.75 0 000 1.352L2 9.314v3.511a.75.75 0 00.064.302l.686-.302c-.686.302-.686.304-.686.304l.002.004.003.006.006.013a1.268 1.268 0 00.075.139c.047.08.116.184.21.303.19.238.483.533.917.82.871.575 2.265 1.086 4.45 1.086 2.177 0 3.487-.508 4.271-1.122.39-.305.632-.623.78-.884a2.194 2.194 0 00.19-.447l.01-.041.004-.017.001-.007.001-.003v-.001s0-.002-.734-.153l.735.151c.01-.05.015-.1.015-.151v-3.27l1.825-.88a.75.75 0 000-1.35l-6.75-3.25zm3.425 6.203l-3.425 1.649a.75.75 0 01-.65 0L3.5 10.036v2.579l.033.043c.098.123.276.309.57.504.585.386 1.679.838 3.623.838 1.95 0 2.902-.454 3.348-.803.225-.176.34-.34.396-.44a.878.878 0 00.03-.057v-2.423zm-3.75.14L2.729 8 7.75 5.582 12.771 8 7.75 10.418z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
