import { Routes, Route, useLocation } from 'react-router-dom'
import {
  Calendar,
  Gavel,
  BookMarked,
  Search,
  MessageCircle,
  Bell,
  Heart,
  Gift,
  Settings,
  User,
} from 'lucide-react'
import Layout from './components/layout/Layout'
import FeedBids from './pages/FeedBids'
import PlaceholderPage from './pages/PlaceholderPage'
import OrderSummary from './pages/OrderSummary'

import EventListing from './pages/EventListing'
import DrinkSelection from './pages/DrinkSelection'

const AppContent = () => {
  return (
    <Routes>
      {/* Main feed */}
      <Route path="/" element={<FeedBids />} />
      
      {/* Standalone Pages (No Sidebar) */}
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/event-listing" element={<EventListing />} />
      <Route path="/drink-selection" element={<DrinkSelection />} />

      {/* Navigation pages */}
      <Route
        path="/my-plan"
        element={
          <PlaceholderPage
            icon={Calendar}
            title="My Plan"
            description="View and manage all your upcoming party plans, invites, and night-out schedules in one place."
            gradient="from-blue-600 to-purple-500"
          />
        }
      />
      <Route
        path="/my-bids"
        element={
          <PlaceholderPage
            icon={Gavel}
            title="My Bids"
            description="Track your drink offers and invites you've sent. See who accepted and manage active bids."
            gradient="from-purple-600 to-pink-500"
          />
        }
      />
      <Route
        path="/my-booking"
        element={
          <PlaceholderPage
            icon={BookMarked}
            title="My Booking"
            description="Your confirmed bookings, event tickets, and nightlife reservations all in one view."
            gradient="from-pink-600 to-orange-400"
          />
        }
      />
      <Route
        path="/search"
        element={
          <PlaceholderPage
            icon={Search}
            title="Search"
            description="Discover new people, clubs, events, and parties happening near you tonight."
            gradient="from-cyan-500 to-blue-500"
          />
        }
      />
      <Route
        path="/chat"
        element={
          <PlaceholderPage
            icon={MessageCircle}
            title="Chat Room"
            description="Connect and chat with your matches. Coordinate plans and get to know each other before the night out."
            gradient="from-green-500 to-teal-400"
          />
        }
      />
      <Route
        path="/notifications"
        element={
          <PlaceholderPage
            icon={Bell}
            title="Notifications"
            description="Stay up to date with invite responses, new matches, event reminders, and platform updates."
            gradient="from-yellow-500 to-orange-500"
          />
        }
      />
      <Route
        path="/saved"
        element={
          <PlaceholderPage
            icon={Heart}
            title="Save & Like"
            description="Revisit profiles you've liked and people you've saved for later. Your shortlist for the night."
            gradient="from-rose-500 to-pink-500"
          />
        }
      />
      <Route
        path="/rewards"
        element={
          <PlaceholderPage
            icon={Gift}
            title="Rewards"
            description="Earn points for every interaction, verified invite, and night out. Redeem exclusive perks and discounts."
            gradient="from-amber-500 to-yellow-400"
          />
        }
      />
      <Route
        path="/profile"
        element={
          <PlaceholderPage
            icon={User}
            title="Your Profile"
            description="Manage your profile, photos, vibes, and preferences. Build trust with verification badges."
            gradient="from-violet-600 to-purple-400"
          />
        }
      />
      <Route
        path="/settings"
        element={
          <PlaceholderPage
            icon={Settings}
            title="Settings"
            description="Configure notifications, privacy settings, account preferences, and membership options."
            gradient="from-slate-600 to-gray-500"
          />
        }
      />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <PlaceholderPage
            icon={Search}
            title="Page Not Found"
            description="This page doesn't exist yet. Head back to the feed to find your party."
          />
        }
      />
    </Routes>
  )
}

const App = () => {
  const location = useLocation()
  
  // Define routes that shouldn't render the Layout/Sidebar
  const isStandalonePage = ['/order-summary'].includes(location.pathname)

  return isStandalonePage ? <AppContent /> : <Layout><AppContent /></Layout>
}

export default App  
