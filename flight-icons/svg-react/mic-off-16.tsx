import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMicOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8 0c-.78 0-1.538.29-2.104.821a2.862 2.862 0 00-.627.857.75.75 0 001.354.644c.07-.147.17-.286.3-.407A1.578 1.578 0 018 1.5c.413 0 .8.154 1.078.415.276.26.422.601.422.946v3.443a.75.75 0 001.5 0V2.861c0-.775-.329-1.507-.896-2.04A3.077 3.077 0 008 0z" />
                    <path
                        fillRule="evenodd"
                        d="M5 6.06L1.22 2.28a.75.75 0 011.06-1.06l12.5 12.5a.75.75 0 11-1.06 1.06L11.338 12.4a5.575 5.575 0 01-2.588 1.05V14.5h1.75a.75.75 0 010 1.5h-5a.75.75 0 010-1.5h1.75v-1.05a5.553 5.553 0 01-3.131-1.514A5.3 5.3 0 012.5 8.135V6.75a.75.75 0 011.5 0v1.385a3.8 3.8 0 001.164 2.725A4.071 4.071 0 008 12c.815 0 1.602-.24 2.262-.677l-.726-.726A3.113 3.113 0 018 11c-.78 0-1.538-.29-2.104-.821A2.797 2.797 0 015 8.139V6.06zm1.5 1.5v.579c0 .345.146.686.422.946.278.26.665.415 1.078.415.134 0 .266-.016.392-.047L6.5 7.56z"
                        clipRule="evenodd"
                    />
                    <path d="M12.03 6.75a.75.75 0 011.5 0v1.385c0 .266-.02.53-.06.79a.75.75 0 11-1.483-.227c.029-.185.043-.374.043-.563V6.75z" />
                </g>
            </svg>
        );
    }
);
