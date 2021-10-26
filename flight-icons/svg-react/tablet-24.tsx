import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconTablet24 = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <g fill={color}>
          <path d="M12 17a1 1 0 100 2h.01a1 1 0 100-2H12z" />
          <path
            d="M3.75 3A2.75 2.75 0 001 5.75v12.5A2.75 2.75 0 003.75 21h16.5A2.75 2.75 0 0023 18.25V5.75A2.75 2.75 0 0020.25 3H3.75zM2.5 5.75c0-.69.56-1.25 1.25-1.25h16.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V5.75z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
      </svg>
    )
  }
)
