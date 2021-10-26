import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconRepeat16 = forwardRef<SVGSVGElement, IconProps>(
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
        <g fill={color}>
          <path d="M11.238.68a.75.75 0 10-.976 1.14l1.96 1.68H4.418A3.417 3.417 0 001 6.917v.833a.75.75 0 001.5 0v-.833A1.917 1.917 0 014.417 5h7.806l-1.961 1.68a.75.75 0 00.976 1.14l3.5-3a.75.75 0 000-1.14l-3.5-3z" />
          <path d="M5.82 8.262a.75.75 0 01-.082 1.057L3.778 11h7.805A1.916 1.916 0 0013.5 9.083V8.25a.75.75 0 011.5 0v.833a3.417 3.417 0 01-3.417 3.417H3.777l1.961 1.68a.75.75 0 11-.976 1.14l-3.5-3a.75.75 0 010-1.14l3.5-3a.75.75 0 011.057.082z" />
        </g>
      </svg>
    )
  }
)
