import { motion } from 'framer-motion'
import { Zap, TrendingUp, Lock, Shield } from 'lucide-react'

const benefits = [
  {
    icon: <Zap className="w-3.5 h-3.5 text-white" />,
    text: 'Get noticed faster',
  },
  {
    icon: <TrendingUp className="w-3.5 h-3.5 text-white" />,
    text: 'Higher chances your invite gets accepted',
  },
  {
    icon: <Lock className="w-3.5 h-3.5 text-white" />,
    text: 'Unlock drink invites & premium interactions',
  },
  {
    icon: <Shield className="w-3.5 h-3.5 text-white" />,
    text: 'Build trust with every profile visit',
  },
]

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const BenefitsList = () => {
  return (
    <motion.ul
      className="space-y-3"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {benefits.map((benefit, i) => (
        <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
          {/* Gradient dot container */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
          >
            {benefit.icon}
          </div>
          <span className="text-white/75 text-sm leading-relaxed">{benefit.text}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default BenefitsList
