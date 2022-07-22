import classNames from 'classnames'
import { forwardRef } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { className, ...restProps } = props

    return (
      <input
        ref={ref}
        className={classNames(
          'px-3 py-1.5 text-base',
          'm-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none',
          className
        )}
        {...restProps}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
