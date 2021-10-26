import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconCornerDownLeft24 = forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill={color}
          d="M21.5 3.75a.75.75 0 00-1.5 0v7c0 .847-.357 1.669-1.009 2.282A3.639 3.639 0 0116.5 14H5.622l4.146-3.957a.75.75 0 10-1.036-1.086l-5.498 5.25a.748.748 0 00-.002 1.085l5.5 5.25a.75.75 0 101.036-1.085L5.622 15.5H16.5c1.312 0 2.578-.49 3.52-1.375a4.634 4.634 0 001.48-3.375v-7z"
        />
      </svg>
    )
  }
)
