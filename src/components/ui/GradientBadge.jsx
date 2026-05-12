import { cn } from '../../utils/cn'

const GradientBadge = ({ children, className, variant = 'g1', icon }) => {
  const variants = {
    g1: 'bg-gradient-g1',
    g2: 'bg-gradient-g2',
    g3: 'bg-gradient-g3',
    outline: 'border border-white/20 bg-white/[0.06]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white',
        variants[variant],
        className
      )}
    >
      {icon && <span className="w-3 h-3">{icon}</span>}
      {children}
    </span>
  )
}

export default GradientBadge
