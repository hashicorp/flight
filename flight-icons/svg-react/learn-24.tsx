import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLearn24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
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
                    d="M12.367 3.096a.75.75 0 00-.734 0l-10.25 5.75a.75.75 0 000 1.308l2.82 1.582A.747.747 0 004 12.25v5a.75.75 0 00.12.407l.63-.407-.63.408.001.001.002.002.003.005.009.013a2.202 2.202 0 00.118.162c.08.1.194.237.348.397.308.321.774.736 1.427 1.147C7.34 20.21 9.378 21 12.345 21c2.968 0 4.854-.79 6.018-1.646a5.597 5.597 0 001.209-1.193 3.945 3.945 0 00.339-.553 1.8 1.8 0 00.02-.043l.007-.016.002-.006.001-.002v-.001s.001-.002-.691-.29l.692.288A.75.75 0 0020 17.25v-5a.747.747 0 00-.203-.514l2.82-1.582a.75.75 0 000-1.308l-10.25-5.75zm6.133 9.368l-6.133 3.44a.75.75 0 01-.734 0L5.5 12.464v4.533c.047.055.107.124.182.202.233.242.605.577 1.144.916 1.072.675 2.833 1.385 5.52 1.385 2.686 0 4.252-.71 5.128-1.354.442-.325.722-.644.887-.87.061-.084.107-.155.139-.21v-4.602zM12 14.39L3.283 9.5 12 4.61l8.717 4.89L12 14.39z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
