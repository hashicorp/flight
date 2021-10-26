import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconAtSign24 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 1.288a11 11 0 104.188 19.445.75.75 0 10-.912-1.19 9.5 9.5 0 113.724-7.544v1.025c0 1.258-.995 2.476-2.325 2.476-1.288 0-2.175-1.142-2.175-2.476V7.75a.75.75 0 00-1.5 0v.68a5 5 0 10.488 6.587c.58 1.12 1.666 1.983 3.187 1.983C21.495 17 23 14.94 23 13.024V12a11 11 0 00-8.5-10.711zM15.5 12a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
