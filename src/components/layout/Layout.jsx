import { useNavigate } from 'react-router-dom'
import { Menu, Search, Bell, User } from 'lucide-react'
import { useUI } from '../../context/UIContext'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const { toggleSidebar } = useUI()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen relative" style={{ background: 'transparent' }}>
      {/* Top Navigation Bar */}
      <header
        className="fixed top-0 left-0 right-0 z-30 px-4 py-3 flex items-center justify-between"
        style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
        }}
      >
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/60"
            style={{ background: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.6)' }}
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-g1 flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-gray-900 font-bold text-base tracking-tight hidden sm:block">PartyWitty</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/search')}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/60"
            style={{ background: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.6)' }}
            aria-label="Search"
          >
            <Search className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => navigate('/notifications')}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/60 relative"
            style={{ background: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.6)' }}
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-g1 rounded-full text-[8px] font-bold text-white flex items-center justify-center shadow-md">
              3
            </span>
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
            aria-label="Profile"
          >
            <User className="w-4 h-4 text-white" />
          </button>
        </div>
      </header>

      <Sidebar />

      {/* Page Content */}
      <main className="pt-16">{children}</main>
    </div>
  )
}

export default Layout
