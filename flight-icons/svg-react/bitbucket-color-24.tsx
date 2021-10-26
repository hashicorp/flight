import { forwardRef } from 'react'
import { IconProps } from './types'

export const IconBitbucketColor24 = forwardRef<SVGSVGElement, IconProps>(
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
          fill="#2684FF"
          d="M2.153 3.225A.64.64 0 012.643 3l18.715.003a.64.64 0 01.634.744L19.289 20.45a.644.644 0 01-.634.54H5.572a.874.874 0 01-.847-.717L2.008 3.743a.64.64 0 01.145-.518zm7.765 11.722h4.187l1.011-5.897H8.804l1.114 5.897z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill="url(#bitbucket-color-24__paint0_linear_707:129)"
          d="M21.138 9.05h-6.005l-1.001 5.897H9.918L5.011 20.79a.871.871 0 00.56.21h13.085c.315 0 .583-.23.634-.54l1.848-11.41z"
        />
        <defs>
          <linearGradient
            id="bitbucket-color-24__paint0_linear_707:129"
            x1="17.29"
            x2="10.339"
            y1="7.014"
            y2="16.89"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".18" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
)
