import { useState } from 'react'
import { motion } from 'framer-motion'
import avatarImg from '../../../assets/images/avatar_placeholder.png'
import BenefitsList from './BenefitsList'
import HowItWorks from '../feed/HowItWorks'
import VerificationModal from './VerificationModal'
import CameraVerificationModal from './CameraVerificationModal'
import VerificationProgressModal from './VerificationProgressModal'

const MakeYourFirstMove = ({ onHide }) => {
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false)
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false)
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false)

  const handleStartCamera = () => {
    setIsIntroModalOpen(false)
    setIsCameraModalOpen(true)
  }

  const handleCameraSuccess = () => {
    setIsCameraModalOpen(false)
    setIsProgressModalOpen(true)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-[20px] overflow-hidden relative w-full backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
        }}
      >
        <div className="relative z-10 p-7 md:p-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            {/* Profile Image with blue/purple gradient border */}
            <div className="w-[80px] h-[80px] p-[2px] mb-2">
              <div className="w-full h-full overflow-hidden">
                <img src={avatarImg} alt="Profile" className="w-full h-full object-cover scale-[1.25]" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-[#1A1A1A] font-bold text-[22px] leading-tight mb-2 tracking-tight">
                Make Your First Move
              </h2>
              <p className="text-[#5E5E5E] text-[15px] font-medium leading-relaxed max-w-[280px]">
                Verify your profile to start sending invites and offering drinks.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="h-[1px] w-full bg-[#D1CDCF] mb-8" />

          {/* How It Works section */}
          <div className="mb-8">
            <HowItWorks />
          </div>

          {/* Separator */}
          <div className="h-[1px] w-full bg-[#D1CDCF] mb-8" />

          {/* Benefits */}
          <div className="mb-8">
            <BenefitsList />
          </div>

          {/* Separator */}
          <div className="h-[1px] w-full bg-[#D1CDCF] mb-8" />

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setIsIntroModalOpen(true)}
              className="w-full flex items-center justify-center py-4 rounded-full font-bold text-[17px] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-md"
              style={{
                background: 'linear-gradient(135deg, #DE3EBA, #FA4A72)',
              }}
            >
              Get Verified
            </button>

            <p className="text-[#4A4A4A] font-medium text-[14px]">
              Takes less than 60 seconds
            </p>

            <button 
              onClick={() => {
                if (onHide) onHide()
              }}
              className="text-[#4A4A4A] font-semibold text-[14px] hover:text-[#1A1A1A] transition-colors mt-2 underline underline-offset-4 decoration-[#8A8A8A]"
            >
              Maybe later
            </button>
          </div>
        </div>
      </motion.div>

      {/* Intro Modal */}
      <VerificationModal 
        isOpen={isIntroModalOpen} 
        onClose={() => setIsIntroModalOpen(false)} 
        onStartVerification={handleStartCamera} 
      />

      {/* Camera Capture Modal */}
      <CameraVerificationModal 
        isOpen={isCameraModalOpen} 
        onClose={() => setIsCameraModalOpen(false)} 
        onCaptureSuccess={handleCameraSuccess}
      />

      {/* Progress / Success Modal */}
      <VerificationProgressModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
      />
    </>
  )
}

export default MakeYourFirstMove