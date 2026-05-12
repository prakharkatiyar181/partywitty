import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Flame } from 'lucide-react'
import DiscoverCard from './DiscoverCard'
import profileZoe from '../../../assets/images/profile_zoe.png'
import profileAisha from '../../../assets/images/Image.png'

const initialProfiles = [
  {
    id: 1,
    name: 'Zoe Miller, 22',
    mutualMates: 4,
    tags: ['Bollywood Nights', 'Chill Crowd', 'Party Regular'],
    imageSrc: profileZoe,
  },
  {
    id: 2,
    name: 'Aisha Sharma, 24',
    mutualMates: 2,
    tags: ['Techno', 'Weekend Vibes', 'Foodie'],
    imageSrc: profileZoe, // Will use gradient fallback
  },
  {
    id: 3,
    name: 'Sarah Khan, 21',
    mutualMates: 8,
    tags: ['Live Music', 'Coffee Dates', 'Spontaneous'],
    imageSrc: profileZoe, // Will use gradient fallback
  }
]

const FeedSection = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState(initialProfiles)
  const [swipeDirection, setSwipeDirection] = useState(null)

  const handleGoTonight = (profile) => {
    navigate('/event-listing', { state: { profile } })
  }

  const handleSwipe = (direction) => {
    if (cards.length === 0) return
    
    // Set direction to control exit animation
    setSwipeDirection(direction)
    
    // Remove top card after animation completes
    setTimeout(() => {
      setCards((prev) => prev.slice(1))
      setSwipeDirection(null) // reset for next card
    }, 400)
  }

  return (
    <div className="flex flex-col gap-6 h-full w-full max-w-md mx-auto lg:mx-0">
      {/* Explore Feed Button */}
      <div className="flex justify-center mb-2">
        <button 
          className="text-white font-bold py-3 px-8 rounded-full transition-colors text-[15px] tracking-wide shadow-lg"
          style={{ background: 'linear-gradient(90deg, #6B52FF, #482AF1)' }}
        >
          EXPLORE FEED
        </button>
      </div>

      {/* Cards Stack Container */}
      <div className="relative w-full h-[620px] perspective-1000 z-30">
        <AnimatePresence>
          {cards.map((profile, index) => {
            const isTop = index === 0
            return (
              <DiscoverCard 
                key={profile.id} 
                {...profile} 
                isTop={isTop}
                onSwipe={handleSwipe}
                forceSwipe={isTop ? swipeDirection : null}
              />
            )
          })}
        </AnimatePresence>

        {cards.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
            <Flame className="w-12 h-12 mb-4 opacity-50" />
            <p className="font-medium text-lg">No more profiles right now.</p>
          </div>
        )}
      </div>

      {/* Fixed Action Buttons (Smaller width than card) */}
      <div className="w-[95%] mx-auto relative shrink-0 h-[80px] rounded-[40px] flex items-center justify-between px-6 shadow-xl z-10 -mt-8 pt-4 pb-4"
        style={{
          background: 'linear-gradient(180deg, rgba(240,235,236,0.9) 0%, rgba(248,230,238,0.9) 100%)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Soft pink gradient blur behind the buttons */}
        <div className="absolute inset-0 pointer-events-none opacity-50 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-300 via-transparent to-transparent"></div>
        
        {/* Cross (Reject) Button */}
        <button 
          onClick={() => handleSwipe('left')}
          className="relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#EBE7E5] border border-[#D9D3CF] text-[#4A4A4A] hover:bg-[#E0DBD8] transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <X className="w-6 h-6" strokeWidth={2} />
        </button>

        {/* Go Tonight Button */}
        <button 
          onClick={() => {
            if (cards.length > 0) handleGoTonight(cards[0])
          }}
          className="relative z-10 flex-1 max-w-[160px] h-[56px] mx-4 rounded-full flex items-center justify-center gap-2 text-white font-bold text-[16px] shadow-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #DE3EBA, #FA4A72)' }}
        >
          <Flame className="w-5 h-5" strokeWidth={2.5} />
          Go Tonight
        </button>

        {/* Heart (Approve) Button */}
        <button 
          onClick={() => handleSwipe('right')}
          className="relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#FCECF3] border border-[#F2A3CC] text-[#DE3EBA] hover:bg-[#FADDE9] transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          <Heart className="w-6 h-6" strokeWidth={2} />
        </button>
      </div>

    </div>
  )
}

export default FeedSection