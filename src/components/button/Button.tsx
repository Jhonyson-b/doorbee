import type { ComponentProps } from 'react'
import { buttonStyles, type ButtonVariant } from './buttonStyles'

type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
}

const Button = ({ variant = 'gold', className, type = 'button', ...props }: ButtonProps) => (
  <button
    type={type}
    className={buttonStyles(variant, `disabled:opacity-50 ${className ?? ''}`)}
    {...props}
  />
)

export default Button
