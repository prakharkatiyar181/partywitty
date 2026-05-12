import { motion } from 'framer-motion'
import GreenTick from '../../ui/GreenTick'

const benefits = [
  'Get noticed faster',
  'Higher chances your invite gets accepted',
  'Unlock drink invites & premium interactions',
  'Build trust with every profile visit',
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
      className="space-y-4"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {benefits.map((text, i) => (
        <motion.li key={i} variants={itemVariants} className="flex items-center gap-3">
          {/* Check icon container */}
          <GreenTick className="w-[20px] h-[20px]" iconSize={12} />
          <span className="text-[#4A4A4A] font-medium text-[14px] leading-relaxed">{text}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default BenefitsList
