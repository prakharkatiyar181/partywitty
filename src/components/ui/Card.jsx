import { cn } from '../../utils/cn'

const Card = ({ children, className, hover = true, glow = false, ...props }) => {
  return (
    <div
      className={cn(
        'glass-card relative overflow-hidden',
        hover && 'transition-all duration-300 hover:bg-white/[0.09] hover:border-white/[0.12] hover:shadow-card-lg',
        glow && 'shadow-glow-purple',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
