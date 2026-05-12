import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BadgeCheck, Search, Mic, MapPin, Star, ArrowDown } from 'lucide-react'
import avatarImg from '../assets/images/avatar_placeholder.png'
// Dummy data for event cards
const events = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=800&auto=format&fit=crop',
    tag: 'HAPPENING NOW',
    tagColor: 'bg-[#0E7A8A]',
    club: 'PRISM NIGHTCLUB',
    name: 'F-Bar',
    rating: '4.1',
    time: 'Friday\n10:00 PM onwards',
    highlight: 'Zoya has been here twice',
    location: 'Nocturne Rooftop',
    address: 'Sector 38, Entertainment City • 13 km',
    discount: '36% OFF F&B'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    tag: 'HAPPENING NOW',
    tagColor: 'bg-[#2D5A27]',
    club: 'PRISM NIGHTCLUB',
    name: 'F-Bar',
    rating: '4.1',
    time: 'Friday\n10:00 PM onwards',
    highlight: 'Zoya has been here twice',
    location: 'Nocturne Rooftop',
    address: 'Sector 38, Entertainment City • 13 km',
    discount: '36% OFF F&B'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=800&auto=format&fit=crop',
    tag: 'HAPPENING NOW',
    tagColor: 'bg-[#0E7A8A]',
    club: 'PRISM NIGHTCLUB',
    name: 'F-Bar',
    rating: '4.1',
    time: 'Friday\n10:00 PM onwards',
    highlight: 'Zoya has been here twice',
    location: 'Nocturne Rooftop',
    address: 'Sector 38, Entertainment City • 13 km',
    discount: '36% OFF F&B'
  }
]

const EventListing = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Extract selected person from router state, provide fallback if directly accessed
  const selectedPerson = location.state?.person || {
    name: 'Zoe Miller, 22',
    imageSrc: '/src/assets/images/profile_zoe.png'
  }

  return (
    <div className="relative min-h-screen pt-8 pb-32 px-6 lg:px-12 w-full max-w-[1440px] mx-auto flex flex-col">
      
      {/* Top Breadcrumb & User Profile Row */}
      <div className="flex justify-between items-start mb-6">
        <div className="text-[13px] font-medium text-[#4A4A4A] tracking-wide">
          <span className="cursor-pointer hover:text-black" onClick={() => navigate('/')}>Home</span> / Party Package / <span className="text-black font-semibold">Selected item</span>
        </div>
      </div>

      {/* Main Selected Person Header Card & Right Profile */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        
        {/* Left Card */}
        <div className="flex-1 w-full bg-[#F5F5F5]/80 backdrop-blur-xl rounded-[20px] py-4 px-6 shadow-sm border border-white/60">
          <h3 className="text-[#1A1A1A] font-bold text-[16px] mb-2">Pick a plan you'd both enjoy</h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img src={selectedPerson.imageSrc} alt={selectedPerson.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#1A1A1A] font-bold text-[18px] tracking-tight">{selectedPerson.name}</span>
              <BadgeCheck className="w-[18px] h-[18px] text-[#6B52FF]" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Right side profile (Alen Markram) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 overflow-hidden shrink-0">
            <img src={avatarImg} alt="Alen" className="w-full h-full object-cover scale-125" />
          </div>
          <div className="flex flex-col pr-2">
            <span className="text-[#1A1A1A] font-bold text-[14px] leading-tight">Alen Markram</span>
            <button className="bg-[#FA4A72] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit mt-0.5 shadow-sm">
              Get Verified
            </button>
          </div>
        </div>
        
      </div>

      {/* Section Title & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h2 className="text-[#1A1A1A] font-semibold text-[26px] tracking-tight">Tonight near you</h2>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full h-12 bg-[#EBEBEB]/80 backdrop-blur-md rounded-full pl-12 pr-12 text-[#1A1A1A] font-medium outline-none border border-transparent focus:border-[#6B52FF]/30 transition-colors shadow-inner"
          />
          <Mic className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A1A]" />
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div 
            key={event.id}
            whileHover={{ y: -4 }}
            className="bg-[#F5F5F5]/90 backdrop-blur-xl rounded-[24px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-white/50 flex flex-col cursor-pointer"
            onClick={() => navigate('/drink-selection', { state: { person: selectedPerson, event } })}
          >
            {/* Top Image Section */}
            <div className="relative h-[360px] w-full overflow-hidden bg-black">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover opacity-90" />
              
              {/* Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Tags */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className={`${event.tagColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm`}>
                  {event.tag}
                </span>
                <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                  Vibe Matches
                </span>
              </div>

              {/* Image Bottom Text */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-white/90 text-[11px] font-bold tracking-widest uppercase mb-1">{event.club}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-[24px] leading-none">{event.name}</span>
                    <div className="flex items-center gap-1 bg-[#1E1E1E]/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                      <Star className="w-3 h-3 text-[#FBBF24] fill-[#FBBF24]" />
                      <span className="text-white text-[12px] font-bold">{event.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col">
                  <span className="text-white/90 text-[13px] font-medium leading-snug whitespace-pre-line text-right">{event.time}</span>
                </div>
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="relative px-5 pt-8 pb-5 flex flex-col bg-[#F9F9F9]">
              
              {/* Floating Highlight Pill */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FA4A72] text-white px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white/50">
                  <img src={selectedPerson.imageSrc} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="text-[12px] font-bold">{event.highlight}</span>
              </div>

              {/* Location */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-2.5">
                  <MapPin className="w-5 h-5 text-[#6B6B6B] shrink-0 mt-0.5" strokeWidth={2} />
                  <div className="flex flex-col">
                    <span className="text-[#1A1A1A] font-bold text-[16px]">{event.location}</span>
                    <span className="text-[#6B6B6B] text-[13px] font-medium">{event.address}</span>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-[#EBEBEB] flex items-center justify-center hover:bg-[#E0E0E0] transition-colors shrink-0">
                  <ArrowDown className="w-4 h-4 text-[#4A4A4A]" strokeWidth={2} />
                </button>
              </div>

              <div className="w-full h-[1px] bg-[#E0E0E0] mb-4" />

              {/* Friends & Discount Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                        <img src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop`} className="w-full h-full object-cover" alt="friend" />
                        <div className="absolute inset-0 bg-[#FA4A72]/20 mix-blend-multiply" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="bg-white border border-[#D1CDCF] text-[#1A1A1A] text-[11px] font-bold px-1.5 py-0.5 rounded-full">22+</span>
                    <span className="text-[#6B6B6B] text-[12px] font-medium ml-1">Your Circle</span>
                  </div>
                </div>

                <div className="text-[#10A320] font-bold text-[15px] tracking-wide">
                  {event.discount}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default EventListing
