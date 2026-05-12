import { useUI } from '../../context/UIContext'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const { sidebarOpen } = useUI()

  return (
    <div className="min-h-screen relative bg-transparent flex">
      <Sidebar />

      {/* Page Content */}
      <main 
        className="flex-1 w-full relative transition-all duration-300"
        style={{ paddingLeft: sidebarOpen ? '320px' : '80px' }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
