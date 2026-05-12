import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ClipboardList,
  Gavel,
  RotateCcw,
  Search,
  MessageCircle,
  Bell,
  Bookmark,
  Wallet,
  Sidebar as SidebarIcon,
  ArrowUpRight,
} from 'lucide-react'
import { useUI } from '../../context/UIContext'

const navItems = [
  { id: 'myplan',       label: 'My Plan',        icon: ClipboardList, path: '/my-plan' },
  { id: 'mybids',       label: 'My Bids',        icon: Gavel,         path: '/my-bids' },
  { id: 'mybooking',    label: 'My Booking',     icon: RotateCcw,     path: '/my-booking' },
  { id: 'search',       label: 'Search',         icon: Search,        path: '/search' },
  { id: 'chatroom',     label: 'Chat Room',      icon: MessageCircle, path: '/chat' },
  { id: 'notifications',label: 'Notifications',  icon: Bell,          path: '/notifications' },
  { id: 'savelike',     label: 'Save & Like',    icon: Bookmark,      path: '/saved' },
  { id: 'rewards',      label: 'Rewards',        icon: Wallet,        path: '/rewards' },
]

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar, activeNavItem, setActiveNavItem } = useUI()
  const navigate = useNavigate()

  const handleNavClick = (item) => {
    setActiveNavItem(item.id)
    navigate(item.path)
    if (window.innerWidth < 768) {
       // if we want to auto-close on mobile
    }
  }

  return (
    <motion.aside
      initial={false}
      animate={{ 
        width: sidebarOpen ? 320 : 80,
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 280 }}
      className="fixed top-0 left-0 h-full z-50 flex flex-col backdrop-blur-md overflow-visible"
      style={{ backgroundColor: 'rgba(241, 241, 241, 0.28)' }}
    >
      {/* Header */}
      <div className={`flex items-center pt-10 pb-8 relative ${sidebarOpen ? 'justify-between px-8' : 'justify-center px-0'}`}>
        <div className="flex items-center overflow-hidden">
          {sidebarOpen ? (
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              src="https://partywitty.com/static/media/logo.9231c309913633f74bb5f1ae87f70b59.svg" 
              alt="PartyWitty Logo" 
              className="h-8 w-auto object-contain"
            />
          ) : (
            <img 
              src="https://partywitty.com/static/media/logo2.38d9613d9216fb6dc54e0f49ef5dd585.svg" 
              alt="PartyWitty Icon" 
              className="h-8 w-auto object-contain"
            />
          )}
        </div>
        
        <button
          onClick={toggleSidebar}
          className={`w-10 h-10 rounded-xl bg-[#D9CFF1] flex items-center justify-center hover:bg-[#CBBEE8] transition-colors shrink-0 ${
            !sidebarOpen ? 'absolute -right-5 z-10' : ''
          }`}
        >
          <SidebarIcon className="w-5 h-5 text-[#7C3AED]" />
        </button>
      </div>

      {/* Navigation */}
      <nav className={`flex-1 py-2 overflow-y-auto space-y-7 ${sidebarOpen ? 'px-8' : 'px-0 flex flex-col items-center'}`}>
        {navItems.map(({ id, label, icon: Icon, path }) => (
          <button
            key={id}
            onClick={() => handleNavClick({ id, path })}
            className={`flex items-center text-[#1A1A1A] hover:text-[#7C3AED] transition-colors group ${
              sidebarOpen ? 'w-full gap-4' : 'justify-center w-full'
            }`}
            title={!sidebarOpen ? label : undefined}
          >
            <Icon className="w-7 h-7 stroke-[1.5] shrink-0" />
            {sidebarOpen && (
              <span className="text-[1.1rem] font-medium whitespace-nowrap">{label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`mt-auto flex flex-col pb-8 pt-4 ${sidebarOpen ? 'px-6' : 'px-0 items-center'}`}>
        
        {/* More button */}
        <button 
          className={`flex items-center text-[#1A1A1A] mb-6 hover:text-[#7C3AED] transition-colors group ${
            sidebarOpen ? 'gap-4 px-2' : 'justify-center w-full'
          }`}
          title={!sidebarOpen ? 'More' : undefined}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:text-[#7C3AED] shrink-0">
            {/* Custom staggered hamburger icon */}
            <path d="M4 8H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M6 14H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M9 20H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          {sidebarOpen && (
            <span className="text-[1.3rem] font-medium whitespace-nowrap tracking-tight">More</span>
          )}
        </button>

        {/* Corporate Employee Offer (Only in open state) */}
        {sidebarOpen && (
          <div className="bg-[#111822] rounded-md p-3.5 mb-5 flex items-center gap-4 shadow-lg shrink-0 overflow-hidden">
            <div className="text-[2.2rem] leading-none drop-shadow-md pb-1">👑</div>
            <div className="flex flex-col text-left whitespace-nowrap">
              <span className="text-[#E0E5EA] text-[0.85rem] font-medium tracking-wide">Corporate Employee Offer</span>
              <span className="text-[#C19C45] text-[15px] font-bold mt-0.5">1 Month For ₹1</span>
            </div>
          </div>
        )}

        {/* Profile */}
        <div 
          className={`flex items-center cursor-pointer group shrink-0 ${
            sidebarOpen ? 'gap-3 px-2' : 'justify-center relative mt-2'
          }`}
          onClick={() => { navigate('/profile') }}
          title={!sidebarOpen ? 'Zeeshan Ahmad' : undefined}
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#7C3AED] transition-colors">
              <img src="/src/assets/images/profile_2.png" alt="Zeeshan Ahmad" className="w-full h-full object-cover" />
            </div>
            {/* Small crown overlay for closed state */}
            {!sidebarOpen && (
              <div className="absolute -top-1 -left-2 w-6 h-6 rounded-full bg-[#111822] flex items-center justify-center border border-[#C19C45] shadow-sm z-10">
                <span className="text-[10px] leading-none">👑</span>
              </div>
            )}
          </div>
          
          {sidebarOpen && (
            <>
              <div className="flex-1 min-w-0 flex flex-col text-left overflow-hidden">
                <p className="text-black font-semibold text-[1.1rem] truncate tracking-tight">Zeeshan Ahmad</p>
                <p className="text-[#6B6B6B] text-[0.8rem] truncate font-medium mt-0.5">Indus Global Pvt Ltd Admin</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black group-hover:text-[#7C3AED] shrink-0" strokeWidth={1.5} />
            </>
          )}
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar
