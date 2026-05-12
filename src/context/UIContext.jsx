import { createContext, useContext, useState, useCallback } from 'react'

const UIContext = createContext(null)

export const UIProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeNavItem, setActiveNavItem] = useState('feed')

  const openSidebar = useCallback(() => setSidebarOpen(true), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])

  return (
    <UIContext.Provider
      value={{
        sidebarOpen,
        activeNavItem,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        setActiveNavItem,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within UIProvider')
  return ctx
}
