import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconKeychain16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M10.027 1.14a2.708 2.708 0 114.139 3.49l-1.864 2.097a2.125 2.125 0 11-1.074-1.05l.614-.69a3.112 3.112 0 00-4.368 4.18.75.75 0 01-.11.897L4 13.553v.947h1.25v-1a.75.75 0 01.75-.75h.894l1.569-1.918a.75.75 0 01.799-.242 3.112 3.112 0 004.02-2.978.75.75 0 011.5 0 4.612 4.612 0 01-5.457 4.535l-1.494 1.828a.75.75 0 01-.581.275h-.5v1A.75.75 0 016 16H3.25a.75.75 0 01-.75-.75V14H.75a.75.75 0 01-.75-.75v-2a.75.75 0 01.21-.52l3.208-3.328a4.612 4.612 0 016.327-5.91l.282-.352zm-.56 1.913a.755.755 0 01-.118-.062 3.112 3.112 0 00-4.515 3.906c.202.445.165 1.026-.231 1.438L1.5 11.553v.947h1.431l2.987-3.098a4.613 4.613 0 013.549-6.35zm.987-.044c.889.054 1.71.36 2.393.847l.197-.222A1.208 1.208 0 1011.2 2.077l-.745.932zm-.079 3.99a.625.625 0 100 1.25.625.625 0 000-1.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
