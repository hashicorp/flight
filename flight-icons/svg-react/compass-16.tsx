import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconCompass16 = forwardRef<SVGSVGElement, IconProps>(
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
          <path d="M11.914 4.971a.7.7 0 00-.885-.885L6.154 5.71a.7.7 0 00-.443.443l-1.625 4.875a.7.7 0 00.885.885l4.875-1.625a.7.7 0 00.443-.443l1.625-4.875zm-6.057 5.172l1.071-3.215 3.215-1.071-1.071 3.215-3.215 1.071z" />
          <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
        </g>
      </svg>
    )
  }
)
