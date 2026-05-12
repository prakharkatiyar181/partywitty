import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import avatarImg from '../../../assets/images/avatar_placeholder.png'

const VerificationProgressModal = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setProgress(0)
      
      // Simulate progress increase
      const duration = 3000 // 3 seconds total
      const intervalTime = 30 // update every 30ms
      const steps = duration / intervalTime
      const increment = 100 / steps

      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment
          if (next >= 100) {
            clearInterval(timer)
            return 100
          }
          return next
        })
      }, intervalTime)

      return () => clearInterval(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  const isComplete = progress >= 100

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[640px] bg-[#E3E3E3] rounded-2xl overflow-hidden shadow-2xl px-6 py-14 flex flex-col items-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D1C7EF] hover:bg-[#C2B5EA] transition-colors"
          >
            <X className="w-5 h-5 text-[#6B52FF]" strokeWidth={2} />
          </button>

          {/* Central Avatar with Decorative Elements */}
          <div className="relative mb-10 w-[200px] h-[200px] flex items-center justify-center">
            
            {/* Soft concentric circles */}
            <div className="absolute inset-0 rounded-full bg-black/[0.03] scale-125" />
            <div className="absolute inset-0 rounded-full bg-black/[0.04] scale-110" />

            {/* Profile Picture */}
            <div className="relative w-[150px] h-[150px] rounded-full border-[3px] border-[#D1D1D1] overflow-hidden shadow-lg bg-[#3F939A]">
              {/* In a real app, this would be the captured image or user's profile pic. 
                  For now we simulate the image from the screenshot with a placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <img src={avatarImg} className="w-full h-full object-cover" alt="Captured" />
                 {/* Dark overlay specifically for this visual */}
                 <div className="absolute inset-0 bg-teal-800/40 mix-blend-multiply" />
              </div>

              {/* Verified Badge on top of image */}
              {isComplete && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#10A320] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20"
                >
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  <span className="text-[11px] font-bold tracking-wider">VERIFIED</span>
                </motion.div>
              )}
            </div>

            {/* Floating Purple Sparkles */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-2 right-2 w-9 h-9 rounded-full bg-[#A898EA] flex items-center justify-center shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
              </svg>
            </motion.div>

            {/* Floating Heart */}
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute bottom-6 left-2 w-7 h-7 rounded-full bg-[#A898EA] flex items-center justify-center shadow-sm"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
              </svg>
            </motion.div>
          </div>

          {/* Typography */}
          <h2 className="text-[#4A4A4A] font-bold text-[32px] mb-2 tracking-tight">
            You're verified
          </h2>
          <p className="text-[#6C6C6C] font-semibold text-[16px] mb-8 tracking-wide">
            No fake vibes here. You're almost in
          </p>

          {/* Progress Bar Container */}
          <div className="w-full max-w-[360px] flex flex-col items-center mb-8">
            <div className="w-full h-3 bg-[#C7C7C7] rounded-full overflow-hidden shadow-inner mb-3">
              <motion.div 
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #7C3AED, #2A178C)',
                  width: `${progress}%`
                }}
              />
            </div>
            
            <div className="text-[#6C6C6C] font-bold text-[12px] tracking-[0.15em] uppercase">
              IDENTITY MATCH {progress.toFixed(1)}%
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            disabled={!isComplete}
            className={`w-full max-w-[360px] py-[16px] rounded-full font-bold text-[17px] text-white shadow-md transition-all duration-300 ${
              isComplete ? 'hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0' : 'opacity-70 cursor-not-allowed'
            }`}
            style={{
              background: '#6B52FF'
            }}
          >
            Go to Dashboard
          </button>

          {/* Footer Text */}
          <p className="text-[#888888] font-medium text-[13px] mt-6">
            No fake vibes here. You're almost in
          </p>

        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default VerificationProgressModal
