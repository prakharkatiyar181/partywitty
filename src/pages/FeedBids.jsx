import { useState } from 'react'
import { motion } from 'framer-motion'
import MakeYourFirstMove from '../components/features/onboarding/MakeYourFirstMove'
import FeedSection from '../components/features/feed/FeedSection'

const FeedBids = () => {
  const [showRightCard, setShowRightCard] = useState(true)

  return (
    <div className="relative min-h-screen">
      {/* Page content */}
      <div className="relative z-10 px-8 py-8 max-w-[1280px] mx-auto min-h-screen flex items-center justify-center">
        
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 w-full justify-center items-start">
          
          {/* Left: Feed / Discover section */}
          <div className={`w-full flex justify-center ${showRightCard ? 'lg:justify-end flex-1' : ''}`}>
            <div className="w-full max-w-[400px]">
              <FeedSection />
            </div>
          </div>

          {/* Right: Make Your First Move Card */}
          {showRightCard && (
            <div className="flex justify-center lg:justify-end flex-1">
              <div className="w-full max-w-[420px]">
                <MakeYourFirstMove onHide={() => setShowRightCard(false)} />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default FeedBids
