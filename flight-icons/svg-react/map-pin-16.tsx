import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconMapPin16 = forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color} fillRule="evenodd" clipRule="evenodd">
          <path d="M8 4.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM7 7a1 1 0 112 0 1 1 0 01-2 0z" />
          <path d="M8 0C4.138 0 1 3.114 1 6.964a6.927 6.927 0 002.085 4.957l4.42 3.892a.75.75 0 00.99 0l4.42-3.892A6.927 6.927 0 0015 6.964C15 3.114 11.862 0 8 0zM2.5 6.964C2.5 3.95 4.958 1.5 8 1.5s5.5 2.45 5.5 5.464c0 1.5-.607 2.858-1.594 3.847L8 14.251l-3.906-3.44A5.427 5.427 0 012.5 6.964z" />
        </g>
      </svg>
    )
  }
)
