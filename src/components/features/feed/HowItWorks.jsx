import { motion } from 'framer-motion'
import { Eye, Flame } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: <Eye className="w-4 h-4 text-gray-500" />,
    title: 'Spot Your Person',
    description: "Pick someone you'd genuinely enjoy going out with.",
    color: 'from-purple-600 to-blue-500',
  },
  {
    number: '2',
    icon: <Flame className="w-4 h-4 text-orange-400" />,
    title: 'Send a Drink',
    description: "Offer their first drink — your way of saying let's go out.",
    color: 'from-pink-500 to-orange-500',
  },
  {
    number: '3',
    icon: (
      <span className="text-green-400 text-xs">✓</span>
    ),
    title: "They Accept → You're Set",
    description: "Once accepted, it's a confirmed plan. No endless chatting.",
    color: 'from-green-500 to-teal-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const HowItWorks = () => {
  return (
    <div className="space-y-3">
      {/* Section title */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-gray-900 font-bold text-lg">How It Works</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent" />
      </div>

      <motion.div
        className="grid grid-cols-1 gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={cardVariants}
            className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/50 group cursor-default"
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
            }}
          >
            {/* Step number */}
            <div className="shrink-0 flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-white text-sm shadow-lg`}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px flex-1 h-6" style={{ background: 'rgba(0, 0, 0, 0.1)' }} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-gray-900 font-semibold text-sm group-hover:text-black transition-colors">
                  {step.title}
                </h3>
                <span>{step.icon}</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default HowItWorks
