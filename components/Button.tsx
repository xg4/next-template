import classNames from 'classnames'
import { forwardRef } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  size?: 'large' | 'base' | 'small'
}

const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { loading, disabled, className, size = 'base', ...restProps } = props
    return (
      <button
        ref={ref}
        className={classNames(
          size === 'small' && 'px-4 py-1.5 text-xs leading-tight',
          size === 'base' && 'px-6 py-2.5 text-xs leading-tight',
          size === 'large' && 'px-7 py-3 text-sm leading-snug',
          'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800',
          'transition duration-150 ease-in-out',
          'shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg',
          'inline-block rounded font-medium text-white focus:outline-none focus:ring-0',
          className
        )}
        disabled={disabled || loading}
        {...restProps}
      >
        {props.children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
