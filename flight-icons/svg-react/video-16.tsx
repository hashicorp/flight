import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconVideo16 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M0 5.25A2.25 2.25 0 012.25 3h6.5A2.25 2.25 0 0111 5.25v.818l3.018-2.09C14.843 3.382 16 3.97 16 4.991v6.018c0 1.021-1.157 1.61-1.982 1.013L11 9.932v.818A2.25 2.25 0 018.75 13h-6.5A2.25 2.25 0 010 10.75v-5.5zM11 8c0 .067.033.13.088.168l3.412 2.363V5.47l-3.412 2.363A.204.204 0 0011 8zM9.5 5.25a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-5.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
