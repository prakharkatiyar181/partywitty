import { motion } from 'framer-motion'
import MakeYourFirstMove from '../components/features/onboarding/MakeYourFirstMove'
import FeedSection from '../components/features/feed/FeedSection'

const FeedBids = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top gradient orb */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
        {/* Center right orb */}
        <div
          className="absolute top-1/3 -right-24 w-64 h-64 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)' }}
        />
        {/* Bottom left orb */}
        <div
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Page content */}
      <div className="relative z-10 px-4 py-6 max-w-screen-xl mx-auto">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-white font-bold text-2xl mb-1">Feed & Bids</h1>
          <p className="text-white/45 text-sm">Discover people near you tonight</p>
        </motion.div>

        {/* Two-column layout on large screens, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left: Onboarding / Verification card */}
          <div>
            <MakeYourFirstMove />
          </div>

          {/* Right: Feed / Discover cards */}
          <div>
            <FeedSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBids
