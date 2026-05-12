import { motion } from 'framer-motion'
import DiscoverCard from './DiscoverCard'
import profileZoe from '../../../assets/images/profile_zoe.png'
import profile2 from '../../../assets/images/profile_2.png'

const profiles = [
  {
    name: 'Zoe Miller, 22',
    mutualMates: 4,
    vibe: 'Matches your vibe',
    tags: ['Bollywood Nights', 'Chill Crowd', 'Party Regular'],
    imageSrc: profileZoe,
    colorIndex: 0,
  },
  {
    name: 'Priya Sharma, 24',
    mutualMates: 7,
    vibe: 'Same energy',
    tags: ['EDM Nights', 'Rooftop Vibes', 'Social Butterfly'],
    imageSrc: profile2,
    colorIndex: 1,
  },
]

const FeedSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Explore Feed Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
          >
            Explore Feed
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-xs"
        >
          {profiles.length} nearby
        </motion.div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {profiles.map((profile, index) => (
          <DiscoverCard key={index} {...profile} delay={index * 0.1} />
        ))}
      </div>
    </div>
  )
}

export default FeedSection
