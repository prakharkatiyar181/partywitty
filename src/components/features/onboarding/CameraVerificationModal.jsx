import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, SwitchCamera, Sun } from 'lucide-react'

const CameraVerificationModal = ({ isOpen, onClose, onCaptureSuccess }) => {
  const videoRef = useRef(null)
  const [stream, setStream] = useState(null)
  const [isCaptured, setIsCaptured] = useState(false)

  // Start camera when modal opens
  useEffect(() => {
    if (isOpen) {
      startCamera()
    } else {
      stopCamera()
    }
    return () => stopCamera()
  }, [isOpen])

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
      })
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    } catch (err) {
      console.error('Error accessing camera:', err)
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
  }

  const handleCapture = () => {
    setIsCaptured(true)
    setTimeout(() => {
      stopCamera()
      setIsCaptured(false)
      if (onCaptureSuccess) onCaptureSuccess()
    }, 800) // Brief flash before transitioning
  }

  const handleClose = () => {
    stopCamera()
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[640px] h-[85vh] min-h-[600px] max-h-[800px] bg-[#E3E3E3] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-[#D1C7EF] hover:bg-[#C2B5EA] transition-colors shadow-sm"
          >
            <X className="w-5 h-5 text-[#6B52FF]" strokeWidth={2} />
          </button>

          {/* Camera Feed Container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
            
            {/* The Video Element */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'scaleX(-1)' }} // Mirror the camera
            />

            {/* Edge Blur / Vignette Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.85) 100%)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                maskImage: 'radial-gradient(circle, transparent 35%, black 75%)',
                WebkitMaskImage: 'radial-gradient(circle, transparent 35%, black 75%)'
              }}
            />

            {/* UI Overlay Elements */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-6 pointer-events-none">
              
              {/* Inner Oval Guide */}
              <div className="relative w-[55%] max-w-[280px] aspect-[3/4] mt-6 border-2 border-white/50 rounded-[100px] flex flex-col items-center justify-between shrink">
                <div className="w-8 h-1.5 bg-white rounded-full -mt-[3px]" />
                
                <div className="absolute top-[20%] px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10">
                  <span className="text-white font-bold text-sm tracking-wide">Look straight</span>
                </div>
                
                <div className="w-8 h-1.5 bg-white rounded-full -mb-[3px]" />
              </div>

              {/* Bottom Instructions and Controls */}
              <div className="flex flex-col items-center w-full px-6 pointer-events-auto shrink-0 mt-4">
                <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg text-center">
                  Keep your face within the frame
                </h3>
                <p className="text-white/90 text-[15px] drop-shadow-md mb-4 text-center">
                  Center your face and wait for the scan to start
                </p>

                <div className="px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                  <span className="text-white font-semibold text-xs tracking-wide">Used only for verification</span>
                </div>

                <div className="flex justify-center items-center gap-10">
                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <SwitchCamera className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </button>

                  {/* Capture Button */}
                  <button 
                    onClick={handleCapture}
                    className={`w-[72px] h-[72px] rounded-full border-4 border-white flex items-center justify-center bg-transparent transition-transform hover:scale-105 active:scale-95 cursor-pointer z-50`}
                  >
                    <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center pointer-events-none">
                      <div className="w-[44px] h-[44px] rounded-full border-2 border-[#2E6B3A]" />
                    </div>
                  </button>

                  <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Sun className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Flash Effect on Capture */}
            {isCaptured && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white z-40 pointer-events-none mix-blend-overlay" 
              />
            )}
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CameraVerificationModal
