import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconDocsLink24 = forwardRef<SVGSVGElement, IconProps>(
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
          <path
            d="M4.5 3.75c0-.69.56-1.25 1.25-1.25h7.5a.75.75 0 000-1.5h-7.5A2.75 2.75 0 003 3.75v16.5A2.75 2.75 0 005.75 23h13.5A1.75 1.75 0 0021 21.25V8.75a.75.75 0 00-1.5 0v8.75H5.75c-.45 0-.875.108-1.25.3V3.75zm0 16.5c0 .69.56 1.25 1.25 1.25h13.5a.25.25 0 00.25-.25V19H5.75c-.69 0-1.25.56-1.25 1.25z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path d="M19.5 3.56v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h1.69l-2.97 2.97a.75.75 0 001.06 1.06l2.97-2.97z" />
        </g>
      </svg>
    )
  }
)
