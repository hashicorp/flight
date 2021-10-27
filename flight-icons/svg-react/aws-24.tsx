import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAws24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M6.895 10.085c0 .288.031.521.086.692.062.172.14.359.249.561a.338.338 0 01.054.18c0 .077-.047.155-.148.233l-.49.327a.373.373 0 01-.202.07c-.078 0-.156-.039-.234-.11a2.407 2.407 0 01-.28-.365 6.028 6.028 0 01-.241-.46c-.607.717-1.37 1.075-2.288 1.075-.654 0-1.176-.187-1.557-.56-.381-.374-.576-.873-.576-1.495 0-.662.234-1.2.708-1.605.475-.404 1.105-.607 1.907-.607.265 0 .537.023.825.062.288.04.584.102.895.172v-.569c0-.591-.125-1.004-.366-1.246-.249-.24-.67-.358-1.268-.358a3.54 3.54 0 00-.84.102 6.2 6.2 0 00-.841.264 2.232 2.232 0 01-.273.101.477.477 0 01-.124.024c-.11 0-.164-.078-.164-.242V5.95c0-.125.016-.218.055-.273A.583.583 0 012 5.514c.272-.14.599-.257.98-.35a4.716 4.716 0 011.214-.148c.926 0 1.604.21 2.04.63.427.42.645 1.06.645 1.916v2.522h.016zm-3.16 1.183c.257 0 .522-.047.802-.14.28-.094.529-.265.74-.498.124-.148.217-.312.264-.499.046-.187.078-.412.078-.677v-.327a6.493 6.493 0 00-.716-.133 5.86 5.86 0 00-.732-.046c-.521 0-.903.1-1.16.311-.256.21-.381.506-.381.896 0 .366.093.638.288.825.187.195.46.288.817.288zm6.25.841c-.14 0-.234-.023-.296-.078-.062-.047-.117-.156-.164-.304L7.696 5.71a1.365 1.365 0 01-.07-.312c0-.124.063-.195.187-.195h.763c.148 0 .249.024.303.078.063.047.11.156.156.304l1.308 5.155 1.214-5.155c.039-.156.085-.257.147-.304a.535.535 0 01.312-.078h.622c.148 0 .25.024.312.078.062.047.117.156.148.304l1.23 5.217 1.346-5.217c.046-.156.1-.257.155-.304a.508.508 0 01.304-.078h.724c.124 0 .194.063.194.195 0 .039-.008.078-.015.125a1.104 1.104 0 01-.055.194l-1.876 6.02c-.046.155-.1.256-.163.303a.497.497 0 01-.296.078h-.669c-.148 0-.249-.024-.311-.078-.063-.055-.117-.156-.148-.312l-1.206-5.022-1.199 5.015c-.039.155-.085.257-.148.311-.062.055-.171.078-.311.078h-.67zm10 .21a5.15 5.15 0 01-1.198-.14c-.39-.093-.693-.195-.895-.311-.125-.07-.21-.148-.242-.218a.55.55 0 01-.046-.218v-.398c0-.163.062-.24.179-.24a.44.44 0 01.14.022c.047.016.117.047.194.078.265.117.553.21.857.273.31.062.614.093.926.093.49 0 .871-.085 1.136-.257a.839.839 0 00.405-.74.758.758 0 00-.21-.544c-.14-.148-.405-.28-.787-.405l-1.128-.35c-.568-.18-.988-.445-1.245-.795a1.856 1.856 0 01-.39-1.129c0-.327.07-.615.21-.864.14-.25.328-.467.561-.639a2.47 2.47 0 01.81-.405 3.39 3.39 0 01.98-.132c.171 0 .35.008.521.031.18.024.343.055.506.086.156.039.304.078.444.124.14.047.249.094.327.14a.673.673 0 01.233.195.42.42 0 01.07.257V6.2c0 .164-.062.25-.179.25a.81.81 0 01-.295-.094 3.559 3.559 0 00-1.495-.304c-.443 0-.793.07-1.035.218-.241.148-.365.374-.365.693 0 .218.077.405.233.553.156.148.444.296.856.428l1.105.35c.56.18.965.429 1.207.748.24.32.358.685.358 1.09 0 .335-.07.639-.203.903-.14.265-.327.499-.568.686-.241.194-.53.335-.864.436a3.7 3.7 0 01-1.113.163z" />
                    <path
                        fillRule="evenodd"
                        d="M21.456 16.103c-2.56 1.892-6.28 2.897-9.48 2.897-4.482 0-8.522-1.659-11.572-4.415-.242-.218-.024-.514.264-.343 3.3 1.916 7.37 3.076 11.58 3.076 2.841 0 5.962-.592 8.834-1.806.428-.195.794.28.374.591z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M22.522 14.889c-.327-.42-2.164-.203-2.996-.101-.25.03-.288-.187-.063-.35 1.463-1.029 3.868-.733 4.148-.39.28.35-.077 2.756-1.447 3.909-.21.179-.413.085-.32-.148.312-.771 1.005-2.508.678-2.92z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
