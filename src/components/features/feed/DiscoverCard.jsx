import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { BadgeCheck, Flame } from 'lucide-react'

const DiscoverCard = ({
  name = 'Zoe Miller, 22',
  mutualMates = 4,
  tags = ['Bollywood Nights', 'Chill Crowd', 'Party Regular'],
  imageSrc,
  onSwipe,
  onGoTonight,
  isTop,
  forceSwipe,
}) => {
  const [mateAdded, setMateAdded] = useState(false)
  const x = useMotionValue(0)
  const navigate = useNavigate()

  // Programmatically swipe when buttons are clicked
  useEffect(() => {
    if (isTop && forceSwipe) {
      if (forceSwipe === 'right') {
        animate(x, 500, { duration: 0.4, ease: 'easeOut' })
      } else if (forceSwipe === 'left') {
        animate(x, -500, { duration: 0.4, ease: 'easeOut' })
      }
    }
  }, [forceSwipe, isTop, x])

  // Rotate the card as it drags
  const rotate = useTransform(x, [-200, 200], [-15, 15])
  
  // Opacity overlays for Like/Nope indicators
  const likeOpacity = useTransform(x, [20, 100], [0, 1])
  const nopeOpacity = useTransform(x, [-20, -100], [0, 1])

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset > 100 || velocity > 500) {
      if (onSwipe) onSwipe('right')
    } else if (offset < -100 || velocity < -500) {
      if (onSwipe) onSwipe('left')
    }
  }

  return (
    <motion.div
      className="absolute top-0 left-0 w-full"
      style={{ x, rotate, zIndex: isTop ? 10 : 0 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: x.get() > 0 ? 500 : -500, opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="relative w-full max-w-[420px] mx-auto">
        
        {/* Stacked Cards Background Effect (only show on top card to simulate depth) */}
        {isTop && (
          <>
            <div className="absolute -top-5 left-[10%] right-[10%] h-10 bg-[#8B7F92]/20 backdrop-blur-md rounded-t-[30px] border-t border-white/10" />
            <div className="absolute -top-2.5 left-[5%] right-[5%] h-10 bg-[#8B7F92]/40 backdrop-blur-md rounded-t-[35px] border-t border-white/20" />
          </>
        )}

        {/* Main Card Container */}
        <div 
          className="relative w-full rounded-[40px] flex flex-col overflow-hidden bg-black cursor-grab active:cursor-grabbing"
          style={{ height: '620px' }} // Height just for the image card
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 pointer-events-none" />
          )}

          {/* Swipe Indicators */}
          <motion.div style={{ opacity: likeOpacity }} className="absolute top-12 left-8 border-4 border-green-500 rounded-xl px-4 py-1 z-50 rotate-[-15deg]">
            <span className="text-green-500 font-bold text-3xl tracking-widest uppercase drop-shadow-md">Like</span>
          </motion.div>
          <motion.div style={{ opacity: nopeOpacity }} className="absolute top-12 right-8 border-4 border-red-500 rounded-xl px-4 py-1 z-50 rotate-[15deg]">
            <span className="text-red-500 font-bold text-3xl tracking-widest uppercase drop-shadow-md">Nope</span>
          </motion.div>

          {/* Smooth black gradient overlay from bottom to middle */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,5,12,0.95) 85%, rgba(10,5,12,1) 100%)' }}
          />

          {/* Top Progress Bars & Badge */}
          <div className="absolute top-0 left-0 right-0 p-5 flex flex-col gap-4 pointer-events-none">
            <div className="flex gap-2 w-full justify-center opacity-90">
              <div className="h-1 flex-1 bg-white rounded-full shadow-sm"></div>
              <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
              <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
              <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
              <div className="h-1 flex-1 bg-white/30 rounded-full"></div>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md self-start border border-white/10">
              <Flame className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-xs font-semibold tracking-wide">Matches Your Vibe</span>
            </div>
          </div>

          {/* Content overlaid on bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 flex flex-col gap-4">
            
            {/* Top Row: Info & Mate Button */}
            <div className="flex flex-row items-end justify-between gap-2">
              {/* Name & Mutual Mates */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-[28px] leading-none tracking-wide drop-shadow-md">{name}</h3>
                  <BadgeCheck className="w-[22px] h-[22px] text-white shrink-0 drop-shadow-md" strokeWidth={2.5} />
                </div>
                <div className="text-[#A3A3A3] text-[15px] font-medium">
                  {mutualMates} Mutual Mates
                </div>
              </div>

              {/* Mate Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation() // Prevent dragging when clicking button
                  setMateAdded((p) => !p)
                }}
                className="flex items-center justify-center px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-200 hover:opacity-90 active:scale-95 text-white shadow-[0_4px_14px_rgba(236,72,153,0.4)] z-20"
                style={
                  mateAdded
                    ? { background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', boxShadow: 'none' }
                    : { background: 'linear-gradient(135deg, #DE3EBA, #FA4A72)' }
                }
              >
                {!mateAdded ? '+ Mate' : 'Added'}
              </button>
            </div>

            {/* Bottom Row: Tags */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] font-medium px-4 py-2 rounded-full text-[#E0E0E0] bg-[#1A141C] border border-[#2D2430]"
                >
                  {tag}
                </span>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DiscoverCard
