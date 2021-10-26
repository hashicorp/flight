import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconDollarSign16 = forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5.75a.75.75 0 00-1.5 0V2h-.594c-.9 0-1.766.353-2.405.985A3.36 3.36 0 003 5.375a3.36 3.36 0 001 2.39c.64.632 1.506.985 2.406.985H7v3.75H4.25a.75.75 0 000 1.5H7v1.25a.75.75 0 001.5 0V14h1.094c.9 0 1.766-.353 2.405-.985A3.36 3.36 0 0013 10.625a3.36 3.36 0 00-1-2.39 3.422 3.422 0 00-2.406-.985H8.5V3.5h3.25a.75.75 0 000-1.5H8.5V.75zM7 3.5h-.594c-.508 0-.994.2-1.35.552A1.86 1.86 0 004.5 5.375c0 .494.199.97.555 1.323.357.352.843.552 1.351.552H7V3.5zm1.5 5.25v3.75h1.094c.508 0 .994-.2 1.35-.552a1.86 1.86 0 00.556-1.323c0-.494-.199-.97-.555-1.323a1.922 1.922 0 00-1.351-.552H8.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    )
  }
)
