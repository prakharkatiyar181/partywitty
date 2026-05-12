import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import GreenTick from '../../ui/GreenTick'

const VerificationModal = ({ isOpen, onClose, onStartVerification }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
          className="relative w-full max-w-[640px] bg-[#E3E3E3] rounded-sm overflow-hidden shadow-2xl px-6 py-12 md:px-12"
          style={{
            // Slightly off-white/grey to match the screenshot
            backgroundColor: '#E4E4E4'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D1C7EF] hover:bg-[#C2B5EA] transition-colors"
          >
            <X className="w-5 h-5 text-[#6B52FF]" strokeWidth={2} />
          </button>

          <div className="flex flex-col items-center text-center">
            
            {/* Illustration */}
            <div className="relative mb-8 w-[200px] h-[140px] flex items-center justify-center">
              {/* Dashed outer box */}
              <div className="absolute inset-0 border-[1.5px] border-dashed border-[#B0B0B0] rounded-[40px]" />
              
              {/* Inner solid oval shape */}
              <div className="relative w-[110px] h-[130px] rounded-full border-[3px] border-[#5E5E5E] flex items-center justify-center bg-transparent mt-1">
                {/* Face icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hair */}
                  <path d="M12 2C7.58172 2 4 5.58172 4 10C4 10 5.5 10 7 11C8.5 12 10.5 10 12 8C13.5 10 15.5 12 17 11C18.5 10 20 10 20 10C20 5.58172 16.4183 2 12 2Z" fill="#5E5E5E"/>
                  {/* Face Outline */}
                  <path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10" stroke="#5E5E5E" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Eyes */}
                  <circle cx="9" cy="11.5" r="1.5" fill="#5E5E5E"/>
                  <circle cx="15" cy="11.5" r="1.5" fill="#5E5E5E"/>
                </svg>

                {/* Verification Badge */}
                <div className="absolute -top-1 -right-4 w-7 h-7 rounded-full bg-[#8A8496] flex items-center justify-center border-[2px] border-[#E4E4E4]">
                  <Check className="w-3.5 h-3.5 text-[#2A2A2A]" strokeWidth={4} />
                </div>
              </div>
            </div>

            {/* Typography */}
            <h2 className="text-[#4A4A4A] font-bold text-[22px] md:text-[26px] mb-3 tracking-tight">
              You're one step away
            </h2>
            <p className="text-[#5E5E5E] font-medium text-[15px] md:text-[17px] leading-relaxed max-w-[420px] mb-8">
              Verify your profile to send this invite and connect with people around you.
            </p>

            {/* Benefits Row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 w-full">
              {[
                'Builds trust instantly',
                'Better chances she accepts',
                'Unlocks special invites'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <GreenTick className="w-[18px] h-[18px]" iconSize={11} />
                  <span className="text-[#5E5E5E] font-semibold text-[13.5px] md:text-[14px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onStartVerification}
              className="w-full max-w-[400px] flex items-center justify-center py-[18px] rounded-full font-bold text-[17px] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-lg mb-4"
              style={{
                background: 'linear-gradient(135deg, #DE3EBA, #FA4A72)'
              }}
            >
              Verify & Send Invite
            </button>

            {/* Footer Text */}
            <span className="text-[#8A8A8A] font-bold text-[11px] tracking-wider uppercase">
              Takes less than 30 seconds
            </span>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default VerificationModal
