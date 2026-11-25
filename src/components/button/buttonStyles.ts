export type ButtonVariant = 'gold' | 'navy' | 'outline'

const variants: Record<ButtonVariant, string> = {
  gold: 'bg-gold text-navy transition-colors hover:bg-gold-hover',
  navy: 'bg-navy text-white transition-opacity hover:opacity-90',
  outline: 'border border-navy text-navy hover:bg-mist',
}

export const buttonStyles = (variant: ButtonVariant, className = '') =>
  `rounded-full font-semibold ${variants[variant]} ${className}`
