import { motion } from 'framer-motion'
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react'
import avatarImg from '../../../assets/images/avatar_placeholder.png'
import BenefitsList from './BenefitsList'
import HowItWorks from '../feed/HowItWorks'

const MakeYourFirstMove = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-[28px] overflow-hidden relative"
      style={{
        background: 'linear-gradient(160deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.08) 50%, rgba(15,10,30,0.95) 100%)',
        border: '1px solid rgba(124,58,237,0.2)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
      }}
    >
      {/* Decorative blur orbs */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EC4899, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          {/* Avatar with gradient ring */}
          <div className="shrink-0">
            <div
              className="p-0.5 rounded-full"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-black">
                <img src={avatarImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-white font-bold text-xl leading-tight mb-1">
              Make Your First Move
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">
              Verify your profile to start sending invites and offering drinks.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.4), transparent)' }} />

        {/* How It Works section */}
        <div className="mb-6">
          <HowItWorks />
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(236,72,153,0.3), transparent)' }} />

        {/* Benefits */}
        <div className="mb-6">
          <h3 className="text-white/80 font-semibold text-sm mb-3">Why get verified?</h3>
          <BenefitsList />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <button
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
              boxShadow: '0 8px 32px rgba(124,58,237,0.45)',
            }}
          >
            <ShieldCheck className="w-4 h-4" />
            Get Verified
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 text-white/45 text-xs">
            <Clock className="w-3 h-3" />
            <span>Takes less than 60 seconds</span>
          </div>

          <button className="text-white/40 text-xs hover:text-white/60 transition-colors underline underline-offset-2">
            Maybe later
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default MakeYourFirstMove
