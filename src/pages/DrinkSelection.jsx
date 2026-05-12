import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock, BadgeCheck, Hand, Edit2 } from 'lucide-react'
import avatarImg from '../assets/images/avatar_placeholder.png'

const drinks = [
  {
    id: 1,
    name: 'Dry Martini',
    desc: 'Mint, Lime, Electric Glow',
    price: '999',
    badge: 'MOST LIKELY TO GET ACCEPTED',
    badgeColor: { bg: '#E8F8EA', text: '#10A320' },
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Cosmopolitan',
    desc: 'Mint, Lime, Electric Glow',
    price: '199',
    badge: 'Easy Choose',
    badgeColor: { bg: '#FCE8F5', text: '#DE3EBA' },
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Mai Tai',
    desc: 'Mint, Lime, Electric Glow',
    price: '899',
    badge: 'Most Popular',
    badgeColor: { bg: '#E8F8EA', text: '#10A320' },
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Wine Glass',
    desc: 'Mint, Lime, Electric Glow',
    price: '2199',
    badge: 'Make An Impression',
    badgeColor: { bg: '#E8F8EA', text: '#10A320' },
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Margarita',
    desc: 'Mint, Lime, Electric Glow',
    price: '899',
    badge: 'Classic Choice',
    badgeColor: { bg: '#FCE8F5', text: '#DE3EBA' },
    img: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Old Fashioned',
    desc: 'Mint, Lime, Electric Glow',
    price: '1499',
    badge: 'Make An Impression',
    badgeColor: { bg: '#E8F8EA', text: '#10A320' },
    img: 'https://images.unsplash.com/photo-1595981267035-7b04d84b4f1c?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Mojito',
    desc: 'Mint, Lime, Electric Glow',
    price: '699',
    badge: 'Most Popular',
    badgeColor: { bg: '#E8F8EA', text: '#10A320' },
    img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Tequila Sunrise',
    desc: 'Mint, Lime, Electric Glow',
    price: '1299',
    badge: 'Easy Choose',
    badgeColor: { bg: '#FCE8F5', text: '#DE3EBA' },
    img: 'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?q=80&w=400&auto=format&fit=crop'
  }
]

const actions = [
  { id: 'wave', label: 'Wave', sub: 'FREE', icon: Hand },
  { id: 'rose', label: 'Send a Rose', sub: '₹10', icon: () => <span className="text-2xl leading-none">🌹</span> },
  { id: 'chocolate', label: 'Chocolate', sub: '₹25', icon: () => <span className="text-2xl leading-none">🍬</span> }
]

const DrinkSelection = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedDrinks, setSelectedDrinks] = useState([])
  
  // Extract state passed from EventListing, with fallbacks
  const person = location.state?.person || {
    name: 'Zoe Miller, 22',
    imageSrc: avatarImg
  }
  const event = location.state?.event || {
    name: 'F-Bar',
    location: 'Nocturne Rooftop',
    address: 'Sector 38, Noida at ILLUSION',
    time: 'Tonight, 10:30 PM - '
  }

  const handleProceedToOrder = () => {
    const selectedDrinksData = drinks.filter(d => selectedDrinks.includes(d.id))
    navigate('/order-summary', {
      state: {
        person,
        event,
        selection: { type: 'drink', data: selectedDrinksData }
      }
    })
  }

  const handleActionSelection = (action) => {
    navigate('/order-summary', {
      state: {
        person,
        event,
        selection: { type: 'action', data: action }
      }
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative min-h-screen pt-8 pb-32 px-6 lg:px-12 w-full max-w-[1440px] mx-auto flex flex-col"
    >
      
      {/* Top Breadcrumb */}
      <div className="mb-4">
        <div className="text-[13px] font-medium text-[#4A4A4A] tracking-wide">
          <span className="cursor-pointer hover:text-black" onClick={() => navigate('/')}>Home</span> /{' '}
          <span className="cursor-pointer hover:text-black" onClick={() => navigate('/event-listing')}>Party Package</span> /{' '}
          <span className="text-black font-semibold">Selected item</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 w-full">
        
        {/* Left Panel: Event & Person Info */}
        <div 
          className="w-full shrink-0 flex flex-col gap-4"
          style={{ maxWidth: '350px' }}
        >
          
          {/* Right side profile (Alen Markram) - Moved here */}
          <div className="flex items-center gap-3 shrink-0 mb-2">
            <div className="rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 p-[3px] shrink-0" style={{ width: 64, height: 64 }}>
              <img src={avatarImg} alt="Alen" className="w-full h-full object-cover rounded-full border-2 border-[#EAE5E8]" />
            </div>
            <div className="flex flex-col pr-2">
              <span className="text-[#333333] font-bold text-[20px] leading-tight mb-1">Alen Markram</span>
              <button className="bg-[#FA4A72] text-white text-[14px] font-medium px-4 py-1.5 rounded-full w-fit shadow-sm hover:bg-[#E53961] transition-colors">
                Get Verified
              </button>
            </div>
          </div>

          <div className="bg-[#EAE4DC] rounded-[24px] overflow-hidden shadow-sm border border-[#E0D9D1]">
            {/* Top Image Section */}
            <div className="relative h-[320px] w-full bg-black">
              <img 
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop" 
                alt="Cityscape" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Gradient Overlay for bottom text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlaid Profile Info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                <div className="rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-white" style={{ width: 56, height: 56 }}>
                  <img src={person.imageSrc} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-bold text-[22px] leading-tight tracking-tight">{person.name}</span>
                    <BadgeCheck className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 font-semibold text-[15px]">{event.location}</span>
                </div>
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-[22px] h-[22px] text-[#4A4A4A] shrink-0" strokeWidth={1.5} />
                <span className="text-[#4A4A4A] font-semibold text-[16px]">{event.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-[22px] h-[22px] text-[#4A4A4A] shrink-0" strokeWidth={1.5} />
                <span className="text-[#4A4A4A] font-semibold text-[16px]">{event.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Selection Actions */}
        <div className="flex-1 w-full flex flex-col pt-2">
          
          <h2 className="text-[#1A1A1A] font-bold text-[22px] tracking-tight mb-1">
            One Step Before Your First Move
          </h2>
          <p className="text-[#4A4A4A] font-medium text-[14px] mb-8">
            Verify your profile to send invites and offer drinks.
          </p>

          {/* Drinks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {drinks.map((drink) => {
              const isSelected = selectedDrinks.includes(drink.id)
              
              const toggleDrink = () => {
                if (isSelected) {
                  setSelectedDrinks(prev => prev.filter(id => id !== drink.id))
                } else {
                  if (selectedDrinks.length < 3) {
                    const newSelection = [...selectedDrinks, drink.id]
                    setSelectedDrinks(newSelection)
                    
                    if (newSelection.length === 3) {
                      const selectedDrinksData = drinks.filter(d => newSelection.includes(d.id))
                      navigate('/order-summary', {
                        state: {
                          person,
                          event,
                          selection: { type: 'drink', data: selectedDrinksData }
                        }
                      })
                    }
                  }
                }
              }

              return (
                <div 
                  key={drink.id}
                  onClick={toggleDrink}
                  className={`relative flex items-stretch h-[100px] bg-[#F6F6F6] rounded-[24px] cursor-pointer transition-all duration-200 overflow-hidden shadow-sm ${
                    isSelected ? 'border-[2px] border-[#FA4A72] shadow-md' : 'border-[2px] border-transparent hover:border-[#FA4A72]/30'
                  }`}
                >
                  {/* Drink Image */}
                  <div className="w-[85px] shrink-0 overflow-hidden">
                    <img src={drink.img} alt={drink.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Drink Details */}
                  <div className="flex-1 p-4 pl-5 flex flex-col justify-center">
                    <h3 className="text-[#1D172A] font-bold text-[18px] mb-0.5">{drink.name}</h3>
                    <p className="text-[#5D5D5D] text-[13px] font-medium mb-2">{drink.desc}</p>
                    <span 
                      className="w-fit text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: drink.badgeColor.bg, color: drink.badgeColor.text }}
                    >
                      {drink.badge}
                    </span>
                  </div>

                  {/* Price Tag Overlapping */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDrink()
                    }}
                    className="absolute top-0 right-0 bg-gradient-to-r from-[#C229B0] to-[#FA4A72] text-white font-bold text-[14px] px-4 py-1.5 rounded-bl-[20px] shadow-sm hover:opacity-90 transition-opacity"
                  >
                    ₹{drink.price}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Bottom Actions Row */}
          <div className="flex gap-4 mb-8">
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleActionSelection(action)}
                className="flex-1 flex flex-col items-center justify-center gap-2 py-5 bg-[#F4F4F4] rounded-[20px] border border-transparent hover:border-[#FA4A72]/30 hover:bg-[#FA4A72]/5 transition-all shadow-sm group"
              >
                {typeof action.icon === 'function' ? (
                  <action.icon />
                ) : (
                  <action.icon className="w-7 h-7 text-[#FA4A72] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                )}
                <div className="flex flex-col items-center">
                  <span className="text-[#1A1A1A] font-bold text-[15px]">{action.label}</span>
                  <span className="text-[#6B6B6B] font-semibold text-[13px] uppercase tracking-wide">{action.sub}</span>
                </div>
              </button>
            ))}
          </div>

          {/* A Little About Me */}
          <div className="flex flex-col mb-6">
            <span className="text-[#4A4A4A] font-bold text-[14px] mb-3 ml-1">A Little About Me</span>
            <div className="relative flex items-center w-full bg-[#F4F4F4] rounded-[16px] border border-transparent p-1 shadow-sm">
              <input 
                type="text" 
                defaultValue="Hey, I'm Aman, into good music and chill nights"
                className="w-full bg-transparent px-5 py-3 text-[#1A1A1A] font-medium text-[15px] outline-none placeholder:text-[#A0A0A0]"
              />
              <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl hover:bg-[#F5F5F5] transition-colors mr-1">
                <Edit2 className="w-[18px] h-[18px] text-[#6B6B6B]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Continue Button */}
          {selectedDrinks.length > 0 && (
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleProceedToOrder}
              className="w-full bg-[#6B52FF] text-white font-bold text-[16px] tracking-wide py-4 rounded-[20px] shadow-[0_8px_20px_rgba(107,82,255,0.3)] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
            >
              Review Order ({selectedDrinks.length} Drink{selectedDrinks.length > 1 ? 's' : ''})
            </motion.button>
          )}

        </div>
      </div>
      
    </motion.div>
  )
}

export default DrinkSelection
