import { Link, type LinkProps } from 'react-router'
import { buttonStyles, type ButtonVariant } from './buttonStyles'

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
}

const ButtonLink = ({ variant = 'gold', className, ...props }: ButtonLinkProps) => (
  <Link className={buttonStyles(variant, className)} {...props} />
)

export default ButtonLink
