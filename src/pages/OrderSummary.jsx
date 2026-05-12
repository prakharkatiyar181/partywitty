import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Star, BadgeCheck, ShieldCheck, MoreHorizontal, Gift } from 'lucide-react'
import profileZoe from '../assets/images/profile_zoe.png'

const OrderSummary = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Extract state, fallback to empty/default if not provided
  const { person, event, selection } = location.state || {
    person: { name: 'Zoe Miller, 22', imageSrc: profileZoe },
    event: { location: 'Nocturne Rooftop', address: 'Sector 38, Entertainment City • 13 km' },
    selection: { type: 'drink', data: [{ name: 'Wine Glass', desc: 'Mint, Lime, Electric Glow', price: '2199', img: 'https://images.unsplash.com/photo-1595981267035-7b04d84b4f1c' }] }
  }

  return (
    <div className="relative min-h-screen pt-8 pb-32 px-4 flex flex-col items-center bg-gradient-to-br from-[#E2D8F5] via-[#F4ECD8] to-[#E9F3D8]">
      {/* Top Header */}
      <header className="w-full max-w-[700px] flex items-center justify-between mb-8 z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-2 py-2 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 text-[#1A1A1A]" strokeWidth={2} />
          <span className="text-[#1A1A1A] font-bold text-[15px] tracking-tight">Back</span>
        </button>

        <img 
          src="https://partywitty.com/static/media/logo.9231c309913633f74bb5f1ae87f70b59.svg" 
          alt="PartyWitty Logo" 
          className="h-8 w-auto object-contain"
        />
      </header>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[700px] bg-[#FDFDFD]/90 backdrop-blur-xl rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white/50 p-6 md:p-8 z-10"
      >
        {/* Top Profile Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-col gap-4">
            
            {/* Review Badge */}
            <div className="flex items-center gap-2">
              <span className="text-[#1A1A1A] font-bold text-[18px] tracking-tight">Illusion</span>
              <Star className="w-[18px] h-[18px] text-[#FBBF24] fill-[#FBBF24]" />
              <span className="text-[#1A1A1A] font-bold text-[15px]">4.1</span>
              <span className="text-[#4A4A4A] font-medium text-[14px] underline decoration-[#888888] underline-offset-2">Review (03)</span>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <div className="w-[84px] h-[84px] rounded-full overflow-hidden shadow-sm shrink-0">
                <img src={profileZoe} alt="Zoe Miller" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[#1A1A1A] font-bold text-[20px] leading-none tracking-tight">{person.name}</h3>
                  <BadgeCheck className="w-5 h-5 text-[#6B52FF]" strokeWidth={2.5} />
                </div>
                <p className="text-[#4A4A4A] font-medium text-[15px]">{event.location}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#888888]" strokeWidth={2} />
                  <span className="text-[#6B6B6B] text-[13px] font-medium tracking-wide">{event.address}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Date Badge */}
          <div className="bg-[#EBEBEB] rounded-xl flex flex-col items-center justify-center w-[54px] h-[60px] shadow-inner shrink-0 border border-black/5">
            <span className="text-[#888888] font-bold text-[11px] uppercase tracking-wider">Oct</span>
            <span className="text-[#1A1A1A] font-bold text-[20px] leading-none mt-0.5">24</span>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E0E0E0] my-6" />

        {/* Tickets Price */}
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-[#1A1A1A] font-bold text-[17px] tracking-tight">Tickets Price</h4>
          <span className="text-[#1A1A1A] font-bold text-[17px]">₹59.00</span>
        </div>

        {/* Selected Items */}
        <div className="flex flex-col gap-4 mb-6">
          {selection.type === 'drink' && Array.isArray(selection.data) ? (
            selection.data.map((drink, idx) => (
              <div key={idx} className="bg-[#F8F9FA] rounded-[20px] p-5 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="w-[84px] h-[84px] rounded-full bg-[#11131A] flex items-center justify-center shrink-0 shadow-inner overflow-hidden border border-black/10">
                    <img src={drink.img} className="w-full h-full object-cover" alt={drink.name} />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[#1A1A1A] font-bold text-[20px] tracking-tight">{drink.name}</h4>
                    <p className="text-[#6B6B6B] font-medium text-[14px]">{drink.desc || 'Exclusive selection'}</p>
                    <div className="bg-[#D4EEDB] text-[#288D41] px-3 py-1.5 rounded-md mt-2 w-fit">
                      <span className="text-[12px] font-bold tracking-wide">You only pay for the drink if they accept your invite</span>
                    </div>
                  </div>
                </div>
                
                <span className="text-[#1A1A1A] font-bold text-[17px]">₹{drink.price}</span>
              </div>
            ))
          ) : (
            <div className="bg-[#F8F9FA] rounded-[20px] p-5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-[84px] h-[84px] rounded-full bg-[#F0F0F0] flex items-center justify-center shrink-0 shadow-inner overflow-hidden border border-black/10">
                  <Gift className="w-8 h-8 text-[#FA4A72]" strokeWidth={1.5} />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[#1A1A1A] font-bold text-[20px] tracking-tight">{selection.data?.label || 'Action'}</h4>
                  <p className="text-[#6B6B6B] font-medium text-[14px]">Send a nice gesture to break the ice</p>
                </div>
              </div>
              
              <span className="text-[#1A1A1A] font-bold text-[17px]">{selection.data?.sub === 'FREE' ? 'FREE' : selection.data?.sub}</span>
            </div>
          )}
        </div>

        <div className="w-full h-[1px] bg-[#E0E0E0] my-6" />

        {/* Bill Details */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[#1A1A1A] font-bold text-[17px] tracking-tight mb-1">Bill Details</h4>
          
          <div className="flex items-center justify-between">
            <span className="text-[#4A4A4A] font-medium text-[15px]">Tickets Amount</span>
            <span className="text-[#1A1A1A] font-bold text-[15px]">₹59</span>
          </div>
          
          <div className="flex items-center justify-between">
            <a href="#" className="text-[#6B52FF] font-medium text-[14px] underline underline-offset-4 decoration-[#6B52FF]/40 hover:opacity-80">Platform & Other Charges</a>
            <span className="text-[#6B52FF] font-semibold text-[15px]">₹5.90</span>
          </div>

          <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#E0E0E0]">
            <span className="text-[#1A1A1A] font-bold text-[17px]">Grand Total</span>
            <span className="text-[#1A1A1A] font-bold text-[17px]">₹64.90</span>
          </div>
        </div>
      </motion.div>

      {/* Terms Checkbox */}
      <div className="w-full max-w-[700px] mt-6 flex items-start gap-3 z-10 px-2">
        <div className="relative flex items-start mt-0.5">
          <input type="checkbox" id="terms" className="peer appearance-none w-5 h-5 border border-[#888888] rounded flex-shrink-0 checked:bg-[#6B52FF] checked:border-[#6B52FF] transition-colors cursor-pointer" />
          <CheckIcon className="absolute top-[3px] left-[3px] w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
        <label htmlFor="terms" className="text-[#4A4A4A] text-[14px] font-medium leading-relaxed cursor-pointer select-none">
          I agree to the <a href="#" className="text-[#6B52FF] hover:underline">Terms of Service</a> and <a href="#" className="text-[#6B52FF] hover:underline">Privacy Policy.</a>
        </label>
      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
        <div className="bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-gray-100 p-2 rounded-full flex items-center gap-2 pointer-events-auto">
          
          {/* Shield Button */}
          <button className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EBEBEB] transition-colors shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#6B52FF]" strokeWidth={2} />
          </button>

          {/* More Button */}
          <button className="w-12 h-12 rounded-full bg-[#6B52FF] flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 shadow-[0_4px_12px_rgba(107,82,255,0.4)]">
            <MoreHorizontal className="w-6 h-6 text-white" strokeWidth={2} />
          </button>

          {/* Main Action Button */}
          <button className="h-12 px-12 md:px-20 rounded-full bg-[#6B52FF] text-white font-bold text-[16px] tracking-wide hover:opacity-90 transition-opacity shadow-[0_4px_12px_rgba(107,82,255,0.4)] whitespace-nowrap">
            Make The Move Now
          </button>
          
        </div>
      </div>

    </div>
  )
}

// Custom Check Icon for the checkbox
const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default OrderSummary
