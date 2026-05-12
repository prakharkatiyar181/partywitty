import { motion } from 'framer-motion'

/**
 * Generic placeholder page for nav items not yet implemented.
 * Shows a coming-soon screen with icon, title, and description.
 */
const PlaceholderPage = ({ icon: Icon, title, description, gradient = 'from-purple-600 to-pink-500' }) => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-sm"
      >
        {/* Icon circle */}
        <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-glow-purple`}>
          {Icon && <Icon className="w-9 h-9 text-white" />}
        </div>

        {/* Title */}
        <h1 className="text-white font-bold text-2xl mb-3">{title}</h1>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-8">{description}</p>

        {/* Coming soon badge */}
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-white"
          style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}
        >
          Coming Soon
        </span>
      </motion.div>
    </div>
  )
}

export default PlaceholderPage
