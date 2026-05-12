import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarOpen: false,
  activeNavItem: 'feed',
  activeTab: 'party packages',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarOpen = true
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setActiveNavItem: (state, action) => {
      state.activeNavItem = action.payload
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
  },
})

export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  setActiveNavItem,
  setActiveTab,
} = uiSlice.actions

export const selectSidebarOpen = (state) => state.ui.sidebarOpen
export const selectActiveNavItem = (state) => state.ui.activeNavItem
export const selectActiveTab = (state) => state.ui.activeTab

export default uiSlice.reducer
