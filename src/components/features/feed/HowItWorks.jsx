import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import drinkImg from '../../../assets/images/image 2.png'

const steps = [
  {
    number: '1',
    title: 'Spot Your Person',
    description: "Pick someone you'd genuinely enjoy going out with.",
  },
  {
    number: '2',
    title: 'Send a Drink',
    description: "Offer their first drink your way of saying let's go out.",
  },
  {
    number: '3',
    title: "They Accept → You're Set",
    description: "Once accepted, it's a confirmed plan. No endless chatting.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const HowItWorks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-[#1A1A1A] font-bold text-[20px] tracking-tight mb-2">How It Works</h2>

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            variants={cardVariants}
            className="flex items-start gap-4"
          >
            {/* Left Image (Mojito) */}
            <div 
              className="w-[86px] h-[108px] rounded-[18px] shrink-0 overflow-hidden shadow-sm border border-[#D1CDCF]"
            >
              <img src={drinkImg} alt="Step illustration" className="w-full h-full object-cover" />
            </div>

            {/* Right Content */}
            <div className="flex-1 min-w-0 py-1">
              {/* Top row: Number badge & Eye Icon */}
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold text-white shadow-sm"
                  style={{ background: '#DE3EBA' }} // Solid pink to match image
                >
                  {/* The design mockup showed '2' for all steps, but we'll use actual sequence numbers */}
                  {step.number}
                </div>
                <Eye className="w-5 h-5 text-[#6B7280]" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className="text-[#333333] font-bold text-[15px] mb-1 leading-snug">
                {step.title}
              </h3>
              <p className="text-[#666666] font-medium text-[13px] leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default HowItWorks
