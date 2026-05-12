import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Calendar,
  Gavel,
  BookMarked,
  Search,
  MessageCircle,
  Bell,
  Heart,
  Gift,
  ChevronRight,
  Star,
  LogOut,
  Settings,
} from 'lucide-react'
import { useUI } from '../../context/UIContext'
import Avatar from '../ui/Avatar'

const navItems = [
  { id: 'feed',         label: 'Feed',          icon: Star,          path: '/' },
  { id: 'myplan',       label: 'My Plan',        icon: Calendar,      path: '/my-plan' },
  { id: 'mybids',       label: 'My Bids',        icon: Gavel,         path: '/my-bids' },
  { id: 'mybooking',    label: 'My Booking',     icon: BookMarked,    path: '/my-booking' },
  { id: 'search',       label: 'Search',         icon: Search,        path: '/search' },
  { id: 'chatroom',     label: 'Chat Room',      icon: MessageCircle, path: '/chat' },
  { id: 'notifications',label: 'Notifications',  icon: Bell,          path: '/notifications', badge: 3 },
  { id: 'savelike',     label: 'Save & Like',    icon: Heart,         path: '/saved' },
  { id: 'rewards',      label: 'Rewards',        icon: Gift,          path: '/rewards' },
]

const Sidebar = () => {
  const { sidebarOpen, closeSidebar, activeNavItem, setActiveNavItem } = useUI()
  const navigate = useNavigate()

  const handleNavClick = (item) => {
    setActiveNavItem(item.id)
    navigate(item.path)
    closeSidebar()
  }

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={closeSidebar}
          />

          {/* Sidebar Panel */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col bg-white/70 backdrop-blur-3xl"
            style={{
              borderRight: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-g1 flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-900 font-bold text-lg tracking-tight">PartyWitty</span>
              </div>
              <button
                onClick={closeSidebar}
                className="w-8 h-8 rounded-full bg-black/[0.05] flex items-center justify-center hover:bg-black/[0.1] transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Profile Card */}
            <div
              className="mx-4 mb-4 p-4 rounded-2xl cursor-pointer hover:bg-white/40 transition-colors"
              style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.2)' }}
              onClick={() => { navigate('/profile'); closeSidebar() }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar name="Zeeshan Ahmad" size="lg" colorIndex={0} verified />
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-semibold text-sm truncate">Zeeshan Ahmad</p>
                  <p className="text-gray-500 text-xs truncate">Indus Global Pvt Ltd</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
              </div>

              {/* Corporate Badge */}
              <div
                className="w-full rounded-xl p-2.5 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3))',
                  border: '1px solid rgba(124,58,237,0.3)',
                }}
              >
                <p className="text-gray-800 text-[10px] font-medium mb-0.5">Corporate Employee Offer</p>
                <p className="text-gray-900 font-bold text-sm">
                  1 Month for <span className="gradient-text">₹1</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="px-6 mb-2">
              <div className="h-px bg-black/[0.1]" />
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 overflow-y-auto">
              {navItems.map(({ id, label, icon: Icon, badge, path }) => {
                const isActive = activeNavItem === id
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick({ id, path })}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200 group relative"
                    style={
                      isActive
                        ? { background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(236,72,153,0.15))', border: '1px solid rgba(124,58,237,0.25)' }
                        : { background: 'transparent', border: '1px solid transparent' }
                    }
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                      style={
                        isActive
                          ? { background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }
                          : { background: 'rgba(0,0,0,0.05)' }
                      }
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <span
                      className={`text-sm font-medium flex-1 text-left transition-colors ${
                        isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                      }`}
                    >
                      {label}
                    </span>
                    {badge && (
                      <span className="w-5 h-5 rounded-full bg-gradient-g1 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                        {badge}
                      </span>
                    )}
                    {isActive && (
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Footer */}
            <div className="px-3 pb-6 mt-2 border-t border-black/[0.1] pt-4 space-y-1">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-black/[0.05] transition-all duration-200"
                onClick={() => { navigate('/settings'); closeSidebar() }}
              >
                <div className="w-8 h-8 rounded-lg bg-black/[0.05] flex items-center justify-center shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <LogOut className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-sm font-medium">Log Out</span>
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
