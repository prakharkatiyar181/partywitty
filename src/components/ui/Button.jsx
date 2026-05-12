import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Button = forwardRef(
  ({ children, variant = 'gradient', size = 'md', className, onClick, disabled, ...props }, ref) => {
    const variants = {
      gradient: 'btn-gradient',
      outline: 'btn-outline',
      ghost: 'text-white/70 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 cursor-pointer select-none',
      icon: 'flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-all duration-200 cursor-pointer',
      'icon-gradient': 'flex items-center justify-center w-10 h-10 rounded-full bg-gradient-g1 shadow-glow-purple hover:opacity-90 transition-all duration-200 cursor-pointer',
    }

    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-sm px-6 py-3',
      lg: 'text-base px-8 py-4',
      xl: 'text-lg px-10 py-5',
    }

    const isIconVariant = variant === 'icon' || variant === 'icon-gradient'

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          variants[variant],
          !isIconVariant && sizes[size],
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
