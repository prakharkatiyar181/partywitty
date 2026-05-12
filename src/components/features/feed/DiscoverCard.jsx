import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, Bookmark, BookmarkCheck, BadgeCheck, Users, Plus } from 'lucide-react'

const DiscoverCard = ({
  name = 'Zoe Miller, 22',
  mutualMates = 4,
  vibe = 'Matches your vibe',
  tags = ['Bollywood Nights', 'Chill Crowd', 'Party Regular'],
  imageSrc,
  colorIndex = 0,
  delay = 0,
}) => {
  const [bookmarked, setBookmarked] = useState(false)
  const [mateAdded, setMateAdded] = useState(false)

  const gradients = [
    'from-purple-600 via-pink-500 to-orange-400',
    'from-blue-600 via-purple-500 to-pink-400',
    'from-green-500 via-teal-400 to-blue-500',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className="relative rounded-[28px] overflow-hidden w-full"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
      }}
    >
      {/* Profile Image */}
      <div className="relative h-52 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradients[colorIndex % gradients.length]}`} />
        )}

        {/* Gradient overlay bottom */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,4,18,0.95) 0%, rgba(8,4,18,0.2) 50%, transparent 100%)' }}
        />

        {/* Vibe badge — top right */}
        <div className="absolute top-3 right-3">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <Flame className="w-3 h-3 text-orange-400" />
            {vibe}
          </div>
        </div>

        {/* Name + info — bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <h3 className="text-white font-bold text-base leading-tight">{name}</h3>
                <BadgeCheck className="w-4 h-4 text-blue-400 shrink-0" />
              </div>
              <button
                onClick={() => setMateAdded((p) => !p)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200"
                style={
                  mateAdded
                    ? { background: 'linear-gradient(135deg,#7C3AED,#EC4899)', color: '#fff' }
                    : { background: 'rgba(124,58,237,0.18)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(124,58,237,0.3)' }
                }
              >
                <Plus className="w-3 h-3" />
                {mateAdded ? 'Mate Added' : 'Mate'}
              </button>
            </div>

            {/* Mutual mates */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
              style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Users className="w-3 h-3 text-white/60" />
              <span className="text-white/70 font-medium">{mutualMates} Mutual Mates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 pt-3 pb-4">
        {/* Vibe Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full text-white/65"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-2">
          {/* Go Tonight — main CTA */}
          <button
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
          >
            <Flame className="w-4 h-4" />
            Go Tonight
          </button>

          {/* Bookmark */}
          <button
            onClick={() => setBookmarked((p) => !p)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={
              bookmarked
                ? { background: 'linear-gradient(135deg, #EC4899, #F97316)', boxShadow: '0 4px 16px rgba(236,72,153,0.4)' }
                : { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }
            }
          >
            {bookmarked
              ? <BookmarkCheck className="w-4 h-4 text-white" />
              : <Bookmark className="w-4 h-4 text-white/60" />
            }
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default DiscoverCard
