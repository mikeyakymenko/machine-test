import { twMerge } from 'tailwind-merge'

export const Button = ({ children, className, ...rest }) => {
  return (
    <span
      className={twMerge(
        'bg-gray-500 rounded py-2 px-5 cursor-pointer text-center',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
