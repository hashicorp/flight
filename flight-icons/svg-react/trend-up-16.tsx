import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconTrendUp16 = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M16 8.25a.75.75 0 01-1.5 0V5.761l-4.176 4.971a.75.75 0 01-.938.174L5.38 8.68l-4.1 4.1a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 01.894-.126l3.96 2.2L13.6 4.5H10.75a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v4.5z"
        />
      </svg>
    )
  }
)
